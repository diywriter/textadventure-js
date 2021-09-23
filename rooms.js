var rooms = {
    "start": {
        "name": "start",
        "description": "You are in a dark, cold place and you see a light to the <b>north</b>\
        and you hear the sound of running water to the <b>west</b>",
        "directions": {
            "north": "clearing1",
            "west": "bridge1"
        }
    },
    "clearing1": {
        "name": "clearing1",
        "description": "You arrive at a clearing and you see a lighthouse to the <b>north</b>\
        and there is a strange smell coming from the <b>east</b>",
        "directions": {
            "south": "start",
            "north": "lighthouse",
            "east": "trolls"
        }
    },

    "lighthouse": {
        "name": "lighthouse",
        "description": "You arrive at the lighthouse and walk up to the North. What do you do?",
        "character": {
            "name": "lady",
            "description": "Something smells -- musty.",
            "dialogue": ["Hello, I have a quest for you"]
        },
        "directions": {
            "south": "clearing1"
        },
        "item": {
            "name": "rock",
            "description": "this rock is so shiny that it feels smooth to the touch"
        },
        "items":[
            {"name": "rock", "description": "this rock is so shiny that it feels smooth to the touch", "pickedUp": false}
        ]
    },
 
    "trolls": {
        "name": "trolls",
        "description": "You arrive at a clearing and there are some trolls",
        "directions": {
            "west": "clearing1"
        }
    },

    "bridge1": {
        "name": "bridge1",
        "description": "You arrive at a clearing. There is a bridge to the <b>west</b>",
        "directions": {
            "east": "start",
            "west": "bridge2"
        }
    },
    "bridge2": {
        "name": "bridge2",
        "description": "You try to cross the bridge but a troll jumps out and tries to bite you.",
        "directions": {
            "east": "bridge1"
        } 
    },


}
