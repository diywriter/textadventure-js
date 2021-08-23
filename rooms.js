var rooms = {
    "start": {
        "description": "You are in a dark, cold place and you see a light to the <b>north</b>\
        and you hear the sound of running water to the <b>west</b>",
        "directions": {
            "north": "clearing1",
            "west": "bridge1"
        }
    },
    "clearing1": {
        "description": "You arrive at a clearing and you see a lighthouse to the <b>north</b>\
        and there is a strange smell coming from the <b>east</b>",
            "directions": {
            "south": "start",
            "north": "lighthouse",
            "east": "trolls"
        }
    },
    "lighthouse": {
        "description": "You arrive at the lighthouse and walk up to the North. A strange old lady\
        opens the door. What do you do?",
        "directions": {
            "south": "clearing1"
        }
    },
    "trolls": {
        "description": "You arrive at a clearing and there are some trolls",
        "directions": {
            "west": "clearing1"
        }
    },
    "bridge1": {
        "description": "You arrive at a clearing. There is a bridge to the <b>west</b>",
        "directions": {
            "east": "start",
            "west": "bridge2"
        }
    },
    "bridge2": {
        "description": "You try to cross the bridge but a troll jumps out and tries to bite you.",
        "directions": {
            "east": "bridge1"
        } 
    }
}
