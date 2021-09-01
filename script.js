var currentRoom = "start";
var commands = ["go", "pick up", "look", "talk"];
var inventory = [];

// room movement
function changeRoom(dir) {
    if(rooms[currentRoom].directions[dir] !== undefined) {
        currentRoom = rooms[currentRoom].directions[dir]
        $('#game-text').append("<p>" + rooms[currentRoom].description + "</p>");
    } else {
        $('#game-text').append("<p>Looks like you are unable to move in that direction.</p>");
    }
}

// look command
function seeRoom() {
    if (rooms[currentRoom].character || rooms[currentRoom].item !== undefined) {
        $('#game-text').append("<p>You move your head around the room and see " + rooms[currentRoom].character.name + " and " + rooms[currentRoom].item.name + "<br>");
    } else {
        $('#game-text').append("<p>You don't see anything special.</p>");
    }
}

// help command
function showHelp() {
    $('#game-text').append("</p>Here are the possible commands: </p>");
    $('#game-text').append("<p><ul>");
        for(var i = 0; i < commands.length; i++) {
            $('#game-text').append("<li>" + commands[i] + "</li>");            
        
        }
        $('#game-text').append("</ul></p>");
}

// check person's inventory
function showInventory() {
    if(inventory.length === 0) {
        $('#game-text').append("<p>Your pockets are empty.<p>");
        return;
    }
    $('#game-text').append("</p>You are currently carrying: </p>");
    $('#game-text').append("<p><ul>");
    for(var i = 0; i < inventory.length; i++) {
        $('#game-text').append("<li>" + inventory[i] + "</li>");
    }
    $('#game-text').append("</ul></p>");
}

// defining commands in text box
function playerInput(input) {
    var command = input.split(" ")[0];
    switch (command) {
        case "go":
            var dir = input.split(" ")[1];
            changeRoom(dir);
            break;
        case "help":
            showHelp();
            break;
        case "look":
            seeRoom();
            break;
        case "inventory":
            showInventory();
            break;
        default:
            $('#game-text').append("<p>Invalid Command. Type 'help' for commands.</p>");
    }
}


$(document).ready(function() {
    $('#game-text').append("<p>" + rooms.start.description + "</p>");

    $(document).keypress(function(key) {
        if(key.which === 13 && $('#user-input').is(':focus')) {
            var value = $('#user-input').val().toLowerCase();
            $('#user-input').val("");
            playerInput(value);
        }
    })


})
