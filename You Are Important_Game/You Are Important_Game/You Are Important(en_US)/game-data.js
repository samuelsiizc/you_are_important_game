// Game scene data
const gameData = {
    // Opening
    "start": {
        title: "Opening",
        content: `<p>"Another new day..."</p>
        <p>You open your eyes, looking at the familiar crack in the ceiling. The sunlight outside tries to squeeze in, but you don't feel its warmth. Your phone alarm rings for the third time before you reluctantly turn it off.</p>
        <p>Today seems like any other day, nothing special. But when you pick up your phone, you see a strange message:</p>
        <p>"Today, your choices will change everything."</p>`,
        choices: [
            {
                text: "Ignore this strange message and start the day as usual",
                nextScene: "ignore_message"
            },
            {
                text: "Curiosity drives you to reply to this message",
                nextScene: "reply_message"
            }
        ]
    },

    // Route A - Ignore Message
    "ignore_message": {
        title: "An Ordinary Day",
        content: `<p>You decide to ignore the message, probably just spam.</p>
        <p>You start your day as usual: washing up, breakfast (if there's time), and rushing to work.</p>
        <p>On the bus, you notice an elderly person standing, looking very tired.</p>`,
        choices: [
            {
                text: "Get up and offer your seat",
                nextScene: "give_seat"
            },
            {
                text: "Look down at your phone, pretending not to see",
                nextScene: "ignore_elder"
            }
        ]
    },

    // Route A1 - Offer Seat
    "give_seat": {
        title: "A Small Act of Kindness",
        content: `<p>You get up and offer your seat to the elderly person.</p>
        <p>The elderly person looks at you gratefully: "Thank you, young person. Nowadays, few people notice us elderly folks."</p>
        <p>You smile and nod, saying nothing, but feel a warmth inside.</p>
        <p>At work, you notice your colleague Xiao Li is worried about a project, looking very anxious.</p>`,
        choices: [
            {
                text: "Actively ask if they need help",
                nextScene: "offer_help"
            },
            {
                text: "Focus on your own work, after all, everyone is busy",
                nextScene: "focus_own_work"
            }
        ]
    },

    // Route A1-1 - Offer Help
    "offer_help": {
        title: "Extending a Hand",
        content: `<p>"Hey, need any help?" you ask.</p>
        <p>Xiao Li looks relieved: "That's great! I'm stuck with this data analysis, you always spot things I miss."</p>
        <p>You help Xiao Li solve the problem, and although it takes some time, seeing their relieved expression makes you feel satisfied.</p>
        <p>On your way home, you receive another message from that strange number from this morning:</p>
        <p>"See? Your existence is more important than you imagine."</p>
        <p><i>(A small video appears on the screen, showing the people you helped today, and how their gratitude spread to others.)</i></p>
        <p>"Today, because you offered your seat, that elderly person went home in a good mood and was extra patient with their grandchild, helping them with their studies; the colleague you helped not only completed the project but also had time to help another new colleague..."</p>`,
        choices: [
            {
                text: "Continue reading",
                nextScene: "ending_a"
            }
        ]
    },

    // Ending A - Ripple Effect
    "ending_a": {
        title: "Ending: Ripple Effect",
        content: `<p>Your small acts of kindness are like stones thrown into a lake, creating ripples that affect more people. You might think your actions are insignificant, but to others, they might mean the world.</p>
        <p>Your value isn't in doing earth-shattering things, but in those seemingly small but kind actions in daily life. Every smile, every helping hand, proves your importance.</p>
        <p>Remember, you don't need amazing achievements to prove your worth. Sometimes, just the moment you're willing to extend a helping hand is enough to change someone's world.</p>`,
        choices: [
            {
                text: "Game Over",
                nextScene: "game_over"
            }
        ]
    },

    // Route A1-2 - Focus on Own Work
    "focus_own_work": {
        title: "Focus on Yourself",
        content: `<p>You decide to focus on your own work, after all, everyone has their own responsibilities.</p>
        <p>At the end of the day, you complete your tasks but feel something is missing.</p>
        <p>On your way home, you receive another message from that strange number from this morning:</p>
        <p>"Sometimes we need to see our own value before others can see it."</p>
        <p>In the evening, you receive a call from your sister, who's having trouble at school and needs your advice. Despite being tired, you patiently listen to her.</p>`,
        choices: [
            {
                text: "Listen carefully and give advice",
                nextScene: "listen_carefully"
            },
            {
                text: "Give brief comfort and end the call",
                nextScene: "brief_consolation"
            }
        ]
    },

    // Route A1-2-1 - Listen Carefully
    "listen_carefully": {
        title: "The Power of Listening",
        content: `<p>You carefully listen to your sister's troubles and give advice based on your experience.</p>
        <p>"Thank you," your sister says, "I knew I could count on you. You always know what to do."</p>
        <p>After hanging up, you receive the last message from that strange number:</p>
        <p>"See? Even when you don't realize it, you're irreplaceable to some people."</p>`,
        choices: [
            {
                text: "Continue reading",
                nextScene: "ending_b"
            }
        ]
    },

    // Route A1-2-2 - Brief Consolation
    "brief_consolation": {
        title: "Missed Opportunity",
        content: `<p>You give brief comfort and end the call.</p>
        <p>The next day, you learn from your parents that your sister cried a lot last night, making you feel guilty.</p>
        <p>You receive a message from that strange number:</p>
        <p>"Sometimes we miss the most important moments because we don't truly invest our time."</p>
        <p>You decide to send your sister a long message, carefully explaining your advice.</p>`,
        choices: [
            {
                text: "Continue reading",
                nextScene: "ending_b_alt"
            }
        ]
    },

    // Ending B - Silent Power
    "ending_b": {
        title: "Ending: Silent Power",
        content: `<p>Sometimes, importance isn't just about what we do, but about what we mean to others. To your sister, you're someone she can rely on; to that elderly person, you're a ray of warmth.</p>
        <p>We often underestimate our value because we only see our shortcomings, ignoring those we've already influenced and helped.</p>
        <p>You don't need to change the world to prove your importance. Sometimes, just being someone's listener, supporter, or role model is enough.</p>
        <p>Remember, your existence itself has value, you don't need achievements to prove it.</p>`,
        choices: [
            {
                text: "Game Over",
                nextScene: "game_over"
            }
        ]
    },

    // Ending B-Alternative - Power of Making Amends
    "ending_b_alt": {
        title: "Ending: Power of Making Amends",
        content: `<p>Sometimes we miss important moments, but that doesn't mean we can't make up for them.</p>
        <p>Your initiative to make amends not only repairs the relationship but lets your sister feel your care. This reminds us that even when we make mistakes, we still have the ability to change.</p>
        <p>Your value isn't just in what you do, but in your courage to admit mistakes and try to correct them.</p>
        <p>Remember, no one is perfect, but everyone deserves a second chance.</p>`,
        choices: [
            {
                text: "Game Over",
                nextScene: "game_over"
            }
        ]
    },

    // Route A2 - Pretend Not to See
    "ignore_elder": {
        title: "Turning a Blind Eye",
        content: `<p>You choose to look down at your phone, pretending not to see the elderly person.</p>
        <p>There's a slight unease inside, but you quickly convince yourself: there are so many people on the bus, why should you be the one to offer your seat?</p>
        <p>At work, you encounter a difficult problem that's been stumping you for a while.</p>`,
        choices: [
            {
                text: "Try to solve it yourself, even if it takes more time",
                nextScene: "solve_alone"
            },
            {
                text: "Seek help from colleagues",
                nextScene: "seek_help"
            }
        ]
    },

    // Route A2-1 - Solve Alone
    "solve_alone": {
        title: "Self-Reliance",
        content: `<p>You decide to solve this problem yourself, even if it takes more time.</p>
        <p>After several hours, you finally find a solution. Although the process was painful, the joy of success makes it worth it.</p>
        <p>On your way home, you receive another message from that strange number:</p>
        <p>"Sometimes, admitting we need help is also a form of courage."</p>
        <p>In the evening, an old friend suddenly messages saying they're near your place and asks if you can meet.</p>`,
        choices: [
            {
                text: "Agree to meet",
                nextScene: "agree_meet"
            },
            {
                text: "Make an excuse to decline",
                nextScene: "make_excuse"
            }
        ]
    },

    // Route A2-2 - Seek Help
    "seek_help": {
        title: "Seeking Help",
        content: `<p>You decide to ask your colleagues for help.</p>
        <p>To your surprise, your colleagues are all willing to help. With everyone working together, the problem is quickly solved.</p>
        <p>You receive a message from that strange number:</p>
        <p>"Seeking help isn't weakness, it's wisdom. Everyone needs each other."</p>
        <p>This experience teaches you that sometimes admitting we need help can bring unexpected rewards.</p>`,
        choices: [
            {
                text: "Continue reading",
                nextScene: "ending_c_alt"
            }
        ]
    },

    // Ending C-Alternative - Power of Mutual Help
    "ending_c_alt": {
        title: "Ending: Power of Mutual Help",
        content: `<p>In this world, no one is an island. We all need each other's support and help.</p>
        <p>Your value isn't just in what you can do independently, but in your willingness to cooperate, share, and help others.</p>
        <p>Remember, seeking help isn't a sign of weakness, but a wise choice. It's this mutual support that makes our world better.</p>`,
        choices: [
            {
                text: "Game Over",
                nextScene: "game_over"
            }
        ]
    },

    // Route A2-1-1 - Agree to Meet
    "agree_meet": {
        title: "Unexpected Reunion",
        content: `<p>You decide to meet this old friend.</p>
        <p>During the conversation, you discover they've been going through a difficult time and specifically came to seek your advice.</p>
        <p>"I've always admired your resilience," they say, "that's why I specifically came to talk to you."</p>
        <p>You're surprised by how they see you in their mind, realizing your experiences and attitude have been inspiring them.</p>
        <p>Before parting, you receive the last message from that strange number:</p>
        <p>"See? You're more important than you think. Your perseverance not only affects you but also silently inspires others."</p>`,
        choices: [
            {
                text: "Continue reading",
                nextScene: "ending_c"
            }
        ]
    },

    // Route A2-1-2 - Make Excuse
    "make_excuse": {
        title: "Missed Opportunity",
        content: `<p>You make an excuse to decline the meeting.</p>
        <p>Days later, you learn from other friends that this friend has been experiencing severe depression, and this meeting was something they gathered great courage to propose.</p>
        <p>You feel very regretful and immediately call them.</p>
        <p>On the other end of the line, their voice is slightly choked: "Thank you for being willing to listen to these things."</p>
        <p>You receive a message from that strange number:</p>
        <p>"Sometimes we miss the most important moments because we don't truly invest our time."</p>`,
        choices: [
            {
                text: "Continue reading",
                nextScene: "ending_c_alt2"
            }
        ]
    },

    // Ending C-Alternative 2 - Power of Making Amends
    "ending_c_alt2": {
        title: "Ending: Power of Making Amends",
        content: `<p>Sometimes we miss important moments for various reasons, but that doesn't mean we can't make up for them.</p>
        <p>Your initiative to reach out not only helps your friend but also teaches you that sometimes we need to put aside our concerns to care for those who truly need help.</p>
        <p>Your value isn't just in what you do, but in your courage to admit mistakes and try to correct them.</p>
        <p>Remember, even if we miss the first opportunity, we can still create a second one.</p>`,
        choices: [
            {
                text: "Game Over",
                nextScene: "game_over"
            }
        ]
    },

    // Ending C - Hidden Influence
    "ending_c": {
        title: "Ending: Hidden Influence",
        content: `<p>We often underestimate our influence on others. You might think you're just an ordinary person, but to some people, your perseverance and courage are their beacon.</p>
        <p>Everyone has their unique position and role. Sometimes, what you consider "ordinary" experiences are valuable guidance and support to others.</p>
        <p>Your importance doesn't need to be seen or recognized by everyone. As long as one person benefits from you, you've already proven your value.</p>
        <p>Remember, your existence and experiences themselves are a silent force, influencing those around you in ways you can't imagine.</p>`,
        choices: [
            {
                text: "Game Over",
                nextScene: "game_over"
            }
        ]
    },

    // Route B - Reply to Message
    "reply_message": {
        title: "Responding to Mystery",
        content: `<p>Curiously, you reply to the message: "Who are you? What do you mean?"</p>
        <p>A few seconds later, the reply comes: "Who I am isn't important, what's important is what you'll discover today. Pay attention to the people and things around you, you'll see your value."</p>
        <p>With confusion, you start your day.</p>
        <p>At the coffee shop, you notice the server looks particularly tired and down.</p>`,
        choices: [
            {
                text: "Give them a smile and encouraging words",
                nextScene: "encourage_waiter"
            },
            {
                text: "Order coffee and leave quickly, not wanting to get involved",
                nextScene: "leave_quickly"
            }
        ]
    },

    // Route B1 - Give Encouragement
    "encourage_waiter": {
        title: "Warm Words",
        content: `<p>You smile at the server: "You've worked hard, I hope your day gets better."</p>
        <p>The server looks surprised, then smiles sincerely: "Thank you, that's the first kind word I've received today."</p>
        <p>After leaving the coffee shop, you receive another mysterious message:</p>
        <p>"See? A simple word can brighten someone's day. Everyone longs to be seen and understood."</p>
        <p>At work, you notice there's a new project needing volunteers, but everyone seems hesitant.</p>`,
        choices: [
            {
                text: "Volunteer to participate",
                nextScene: "volunteer_project"
            },
            {
                text: "Wait for others to act first",
                nextScene: "wait_others"
            }
        ]
    },

    // Route B1-1 - Volunteer for Project
    "volunteer_project": {
        title: "Brave Step",
        content: `<p>You raise your hand to volunteer for the project.</p>
        <p>"Great!" the manager says, "I knew we could count on you. Your creative thinking is exactly what this project needs."</p>
        <p>You didn't expect such high regard in the team. After the project meeting, several colleagues thank you privately, saying that because you stepped forward, they found the courage to participate too.</p>
        <p>On your way home, you receive the last mysterious message:</p>
        <p>"Courage is contagious. Your one step forward may have inspired many others. That's your importance."</p>`,
        choices: [
            {
                text: "Continue reading",
                nextScene: "ending_d"
            }
        ]
    },

    // Ending D - Spark of Courage
    "ending_d": {
        title: "Ending: Spark of Courage",
        content: `<p>Sometimes, all we need is the courage to take the first step. You might not know it, but your actions not only changed your path but also ignited the spark of progress for others.</p>
        <p>Your value isn't just in what you can do, but in who you can inspire. When you show courage, kindness, or creativity, you're showing the world a possibility that someone might need to see.</p>
        <p>Remember, every attempt, every adventure, regardless of outcome, proves your existence is important. Because it's these seemingly small actions that form the power of change.</p>`,
        choices: [
            {
                text: "Game Over",
                nextScene: "game_over"
            }
        ]
    },

    // Route B1-2 - Wait for Others
    "wait_others": {
        title: "Hesitation",
        content: `<p>You decide to wait and see if anyone else will volunteer for the project.</p>
        <p>The meeting ends, and the project is temporarily shelved due to lack of volunteers.</p>
        <p>As you leave work, you receive another message:</p>
        <p>"Sometimes, the opportunities we wait for are actually waiting for us to create them."</p>
        <p>In the evening, you receive a call from an old classmate who's organizing a community event and hopes you can help.</p>`,
        choices: [
            {
                text: "Agree to help",
                nextScene: "help_community"
            },
            {
                text: "Politely decline",
                nextScene: "decline_politely"
            }
        ]
    },

    // Route B1-2-1 - Help Community
    "help_community": {
        title: "Discovering Potential",
        content: `<p>You decide to help this old classmate, even though you're not sure what you can do.</p>
        <p>"Thank you so much!" they say, "I really need your organizational skills and ideas. Remember how you always came up with the most creative solutions in college?"</p>
        <p>You're surprised by their recognition of your talents, qualities you hadn't fully acknowledged yourself.</p>
        <p>During the event preparation, you discover you do have many good ideas and are unexpectedly good at coordinating people with different personalities to work together.</p>
        <p>After the event, you receive the last mysterious message:</p>
        <p>"See? You have more talents and abilities than you think. You don't need to become someone else, because you already have unique value."</p>`,
        choices: [
            {
                text: "Continue reading",
                nextScene: "ending_e"
            }
        ]
    },

    // Route B1-2-2 - Decline Politely
    "decline_politely": {
        title: "Missed Opportunity",
        content: `<p>You politely decline your old classmate's request.</p>
        <p>Days later, you see on social media that the event was a great success, helping many people in need.</p>
        <p>You receive a message from that strange number:</p>
        <p>"Sometimes we miss the most important opportunities because we don't believe in ourselves."</p>
        <p>This makes you start thinking that maybe you really could do more.</p>`,
        choices: [
            {
                text: "Continue reading",
                nextScene: "ending_e_alt"
            }
        ]
    },

    // Ending E - Underestimated Talents
    "ending_e": {
        title: "Ending: Underestimated Talents",
        content: `<p>We often underestimate our abilities and talents because they come so naturally to us that we don't realize their specialness. But it's these seemingly ordinary traits that can shine brilliantly in the right environment.</p>
        <p>Your importance isn't in whether you can do earth-shattering things, but in how you can contribute value in your unique way. Not everyone needs to be a leader or star, sometimes an excellent supporter, listener, or thinker is equally important.</p>
        <p>Remember, you don't need to prove your value by comparing yourself to others. Everyone has their unique position and role, and your position is irreplaceable precisely because of who you are.</p>`,
        choices: [
            {
                text: "Game Over",
                nextScene: "game_over"
            }
        ]
    },

    // Ending E-Alternative - Power of Awakening
    "ending_e_alt": {
        title: "Ending: Power of Awakening",
        content: `<p>Sometimes we need to miss some opportunities to realize our potential.</p>
        <p>This experience teaches you that you have more abilities than you imagined. Although you missed this opportunity, this awakening makes you braver in future choices.</p>
        <p>Your value isn't just in what you do, but in your willingness to acknowledge your potential and work towards it.</p>
        <p>Remember, everyone has their own pace, what matters is that you eventually chose to believe in yourself.</p>`,
        choices: [
            {
                text: "Game Over",
                nextScene: "game_over"
            }
        ]
    },

    // Route B2 - Leave Quickly
    "leave_quickly": {
        title: "Quick Departure",
        content: `<p>You choose to quickly order your coffee and leave, not wanting to get involved.</p>
        <p>As you leave the coffee shop, you receive another message:</p>
        <p>"Sometimes we miss opportunities to connect with others, and also miss opportunities to discover our value."</p>
        <p>This makes you feel uneasy. At work, you notice the team's atmosphere is low, an important project has just failed.</p>`,
        choices: [
            {
                text: "Stay silent, focus on your own work",
                nextScene: "stay_silent"
            },
            {
                text: "Try to propose new ideas to salvage the situation",
                nextScene: "propose_idea"
            }
        ]
    },

    // Route B2-1 - Stay Silent
    "stay_silent": {
        title: "Choice of Silence",
        content: `<p>You choose to stay silent and focus on your own work.</p>
        <p>Days later, you hear that the project was eventually cancelled, and the team's atmosphere becomes even lower.</p>
        <p>You receive a message from that strange number:</p>
        <p>"Sometimes our silence may cost more than we imagine."</p>
        <p>This makes you start thinking that maybe you should express your ideas more.</p>`,
        choices: [
            {
                text: "Continue reading",
                nextScene: "ending_f_alt"
            }
        ]
    },

    // Route B2-2 - Propose Idea
    "propose_idea": {
        title: "Voice of Breakthrough",
        content: `<p>You decide to gather courage and propose a new solution in the meeting.</p>
        <p>"This idea is very creative!" the manager says in surprise, "Why didn't we think of this angle before?"</p>
        <p>Your proposal is adopted, and the team regains their spirit. Several colleagues thank you privately for your courage and creativity, saying your ideas gave the project new life.</p>
        <p>On your way home, you receive another mysterious message:</p>
        <p>"See? Your voice is more important than you think. Sometimes, it's your perspective and ideas that can bring change."</p>
        <p>In the evening, you share some personal insights on social media, unexpectedly receiving many responses.</p>`,
        choices: [
            {
                text: "Continue sharing more ideas",
                nextScene: "share_more"
            },
            {
                text: "Feel uncomfortable with this attention, choose to retreat to safety",
                nextScene: "retreat_safe"
            }
        ]
    },

    // Route B2-2-1 - Share More
    "share_more": {
        title: "Authentic Voice",
        content: `<p>Encouraged by the feedback, you decide to continue sharing your thoughts and feelings.</p>
        <p>You discover that when you express yourself authentically, someone always resonates. Your experiences and insights are great comfort and inspiration to some people.</p>
        <p>"I always thought I was the only one who felt this way..."</p>
        <p>"Thank you for speaking up, this makes me feel less alone..."</p>
        <p>The next morning, you receive the last mysterious message:</p>
        <p>"Your story, your voice, your existence are all unique. It's this uniqueness that makes you irreplaceable."</p>`,
        choices: [
            {
                text: "Continue reading",
                nextScene: "ending_f"
            }
        ]
    },

    // Route B2-2-2 - Retreat to Safety
    "retreat_safe": {
        title: "Safe Choice",
        content: `<p>You choose to retreat to safety, deleting the post that received many responses.</p>
        <p>But days later, you receive some private messages saying your sharing helped them greatly.</p>
        <p>You receive a message from that strange number:</p>
        <p>"Sometimes we choose safety but miss opportunities to help others."</p>
        <p>This makes you realize that maybe your voice is more important than you thought.</p>`,
        choices: [
            {
                text: "Continue reading",
                nextScene: "ending_f_alt2"
            }
        ]
    },

    // Ending F - Power of Authenticity
    "ending_f": {
        title: "Ending: Power of Authenticity",
        content: `<p>Being authentically yourself, sharing your stories and thoughts, is itself a form of courage. In a world that often encourages people to hide their true selves, you chose to show your authentic self, which not only helped you but also inspired others.</p>
        <p>Your value isn't in how perfect you are, but in how authentic you are. It's your imperfections and struggles that give others hope and possibility.</p>
        <p>Remember, you don't need to become anyone's "ideal image." Your importance comes from who you are, not who you try to be.</p>
        <p>Because in this world, there is no second you. And that, is important enough.</p>`,
        choices: [
            {
                text: "Game Over",
                nextScene: "game_over"
            }
        ]
    },

    // Ending F-Alternative - Cost of Silence
    "ending_f_alt": {
        title: "Ending: Cost of Silence",
        content: `<p>Sometimes our silence may cost more than we imagine.</p>
        <p>Your choice teaches you that sometimes staying silent not only misses opportunities to help others but also misses opportunities to show your value.</p>
        <p>Your value isn't just in what you do, but in your willingness to speak up when appropriate.</p>
        <p>Remember, sometimes silence isn't golden, it's regret.</p>`,
        choices: [
            {
                text: "Game Over",
                nextScene: "game_over"
            }
        ]
    },

    // Ending F-Alternative 2 - Safe Choice
    "ending_f_alt2": {
        title: "Ending: Safe Choice",
        content: `<p>Sometimes we choose safety but miss opportunities to help others.</p>
        <p>Your experience teaches you that sometimes our voice is more important than we think, and our stories might be exactly what others need.</p>
        <p>Your value isn't just in what you do, but in your willingness to share your experiences and thoughts.</p>
        <p>Remember, sometimes we need to step out of our comfort zone to discover our true value.</p>`,
        choices: [
            {
                text: "Game Over",
                nextScene: "game_over"
            }
        ]
    },

    // Game Over Scene
    "game_over": {
        title: "Game Over",
        content: `<p>Remember, you are important, not because of what you do, but because of who you are.</p>
        <p>The world needs your unique perspective, your voice, your existence.</p>
        <p>No one can replace your place in this world.</p>`,
        choices: []
    }
};