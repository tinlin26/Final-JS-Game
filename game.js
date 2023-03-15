const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id: 1,
        text: 'Choose your own adventure! :)',
        options: [
            {
                text: 'Start!',
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text: 'You wake up in a room with 2 doors in front of you',
        options: [
            {
                text: 'Take the left door',
                setState: { left: true },
                nextText: 3
            },
            {
                text: 'Take the right door',
                nextText: 4
            }
        ]
    },
    {
        id: 3,
        text: 'You open the door and woah! You are on a spaceship!',
        options: [
            {
                text: 'Put on a space suit and go for a walk on the moon',
                requiredState: (currentState) => currentState.left,
                nextText: 5
            },
            {
                text: 'Find a quiet corner to sleep',
                nextText: 6
            },
            {
                text: 'Try to talk to other people on the spaceship',
                nextText: 7
            }
        ]
    },
    {
        id: 4,
        text: 'You open the door and woah! You are in a mysterious cafe...you order a',
        options: [
            {
                text: 'strawberry drink',
                nextText: 8
            },
            {
                text: 'chocolate milkshake',
                nextText: 9
            },
            {
                text: 'iced coffee',
                nextText: 10
            }
        ]
    },
    {
        id: 5,
        text: 'You are walking on the moon when you see a lonely alien sitting there. You...',
        options: [
            {
                text: 'Try and talk to it',
                nextText: 11
            },
            {
                text: 'Run away screaming in terror',
                nextText: 12
            }
        ]
    },
    {
        id: 6,
        text: 'The captain sees you sleeping in a corner, but he wakes you up and tells you to do something else with your time! Then, you pass out from exhaustion.',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 7,
        text: 'Everyone on this spaceship is busy working on their own projects, so you cannot find anyone to socialize with.',
        options: [
            {
                text: 'Restart',
                nextText: -1
            },
        ]
    },
    {
        id: 8,
        text: 'You take a sip of your strawberry drink when you realize that it tastes REALLY weird. Uh oh, I think the strawberry syrup in it was actually blood...',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 9,
        text: 'You take a sip of your chocolate milkshake and you somehow gained flight powers! Where do you want to fly?',
        options: [
            {
                text: 'Airport',
                nextText: 13
            },
            {
                text: 'Grocery Store',
                nextText: 14
            },
            {
                text: 'Chuck E Cheese',
                nextText: 15
            }
        ]
    },
    {
        id: 10,
        text: 'You take a sip of your iced coffee and you become hyper-energetic. When you cannot fall asleep at night, your parents suspect that you are a vampire.',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 11,
        text: 'You talk with the alien and he seems nice! He invites you to visit his own planet.',
        options: [
            {
                text: 'Go to his planet',
                nextText: 16
            },
            {
                text: 'Politely refuse and say you have to return to your spaceship',
                nextText: 17
            }
        ]
    },
    {
        id: 12,
        text: 'You ran so fast that you ran off the surface of the moon...',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 13,
        text: 'Your flying skills are cool, but a pilot mistakes you for a plane and tries to fly you internationally, but you run out of fuel as your flight abilities are limited.',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 14,
        text: 'At the grocery store, many snacks are on sale! Which one do you choose?',
        options: [
            {
                text: 'Takis',
                nextText: 18
            },
            { 
                text: 'Doritos',
                nextText: 19
            },
            {
                text: 'Chips Ahoy',
                nextText: 20
            }
        ]
    },
    {
        id: 15,
        text: 'When you walk into the Chuck E Cheese, you notice how eerily dark it is. You try to open the door again to leave, but it is locked. When you turn around again, evil Chuck E the mouse throws a scalding hot pizza at your face!',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 16,
        text: 'He brings you to a planet that looks identical to Earth...maybe a little too identical to Earth. You look around for the alien, but he is no where to be seen. All you see is a cute puppy running around at your feet! The puppy barks and says that he is the alien from earlier; he can morph into different forms according to the planet he is on!',
        options: [
            {
                text: 'Congratulations! Play Again?',
                nextText: -1
            }
        ]
    },
    {
        id: 17, 
        text: 'You walk away from the alien and decide that it is time to get back to the spaceship. But when you look around, it is no where to be found! You got lost in space...',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 18,
        text: 'While the Takis are delicious, you also have an extremely low spice tolerance. You open your mouth to ask for water, but fire forms instead of words! You accidentally burn down the grocery store with your fire, thankfully everyone evacuated in time...',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 19,
        text: 'You open the bag of Doritos and before you can even take out a chip, a little boy runs up to you and steals the bag out of your hands! You start weeping tears of agony because Doritos are your favorite.',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }

        ]
    },
    {
        id: 20,
        text: 'There is a promotion at the store where you can get as many Chips Ahoys as you want for the price of 1! You share your Chips Ahoy with everyone else at the grocery store and it is a happy ending.',
        options: [
            {
                text: 'Congratulations! Play Again?',
                nextText: -1
            }
        ]
    }
]

startGame()
