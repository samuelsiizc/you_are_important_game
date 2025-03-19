// 游戏状态管理
let currentScene = "start";
let gameHistory = [];

// DOM元素
const sceneTitleElement = document.getElementById('scene-title');
const sceneContentElement = document.getElementById('scene-content');
const choicesContainerElement = document.getElementById('choices-container');
const restartButtonElement = document.getElementById('restart-button');

// 添加背景音乐
const bgMusic = new Audio("Invisible.ogg");
bgMusic.loop = true;
bgMusic.preload = "auto";

// 创建静音按钮
const muteButton = document.createElement("button");
muteButton.textContent = "Mute";
muteButton.classList.add("mute-button", "fade-in");
document.body.appendChild(muteButton);

muteButton.style.position = "fixed";
muteButton.style.bottom = "20px";
muteButton.style.right = "20px";
muteButton.style.padding = "10px 20px";
muteButton.style.fontSize = "1rem";
muteButton.style.border = "none";
muteButton.style.borderRadius = "50px";
muteButton.style.backgroundColor = "white";
muteButton.style.color = "#333";
muteButton.style.cursor = "pointer";
muteButton.style.transition = "all 0.3s";
muteButton.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";

muteButton.addEventListener("mouseover", () => {
    muteButton.style.backgroundColor = "#333";
    muteButton.style.color = "white";
});

muteButton.addEventListener("mouseout", () => {
    muteButton.style.backgroundColor = "white";
    muteButton.style.color = "#333";
});

muteButton.addEventListener("click", () => {
    if (bgMusic.paused) {
        bgMusic.play();
        muteButton.textContent = "Mute";
    } else {
        bgMusic.pause();
        muteButton.textContent = "Unmute";
    }
});

// 让音乐在主页加载时播放（用户交互后）
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", () => {
        bgMusic.play().catch(error => console.log("Autoplay blocked, waiting for user interaction."));
    }, { once: true });
});

// 初始化游戏
function initGame() {
    renderScene(currentScene);
    restartButtonElement.addEventListener('click', restartGame);
}

// 渲染场景
function renderScene(sceneId) {
    if (sceneId !== currentScene) {
        gameHistory.push(currentScene);
        currentScene = sceneId;
    }
    
    const scene = gameData[sceneId];
    if (!scene) {
        console.error(`场景 ${sceneId} 不存在`);
        return;
    }

    sceneTitleElement.textContent = scene.title;
    sceneContentElement.innerHTML = scene.content;
    choicesContainerElement.innerHTML = '';
    
    if (sceneId === 'game_over') {
        restartButtonElement.classList.remove('hidden');
    } else {
        restartButtonElement.classList.add('hidden');
    }
    
    if (scene.choices && scene.choices.length > 0) {
        scene.choices.forEach((choice, index) => {
            const choiceButton = document.createElement('button');
            choiceButton.classList.add('choice-button');
            choiceButton.textContent = choice.text;
            choiceButton.dataset.index = index;
            
            choiceButton.addEventListener('click', function() {
                handleChoice(sceneId, index);
            });
            
            choicesContainerElement.appendChild(choiceButton);
        });
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    sceneContentElement.classList.remove('fade-in');
    void sceneContentElement.offsetWidth;
    sceneContentElement.classList.add('fade-in');
}

// 处理选择
function handleChoice(sceneId, choiceIndex) {
    const scene = gameData[sceneId];
    if (!scene || !scene.choices || !scene.choices[choiceIndex]) {
        console.error('无效的选择');
        return;
    }
    
    const choice = scene.choices[choiceIndex];
    const nextSceneId = choice.nextScene;
    
    if (nextSceneId) {
        renderScene(nextSceneId);
    }
}

// 重新开始游戏
function restartGame() {
    gameHistory = [];
    currentScene = "start";
    renderScene(currentScene);
}

// 处理返回上一步
function goBack() {
    if (gameHistory.length > 0) {
        const previousScene = gameHistory.pop();
        currentScene = previousScene;
        renderScene(previousScene);
    }
}

// 键盘快捷键
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        restartGame();
    }
});

// 游戏启动
document.addEventListener('DOMContentLoaded', function() {
    initGame();
});
