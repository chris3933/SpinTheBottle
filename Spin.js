// Add listener for when the spin button is clicked to call the spinBottle function
let spin = document.getElementById('spin');
spin.addEventListener('click', spinBottle);

// Add listener for when the Add Player button is clicked to call the addPlayers function
let addPlayer = document.getElementById('add-player');
addPlayer.addEventListener('click', addPlayers);

// Function that picks a random player from the current list of players
function spinBottle(){
    let status = document.getElementById('status'); // Get the element with the ID status
    let playerList = Array.from(document.querySelectorAll('li')); // Get all the current list items and store it in an array
    let length = playerList.length; // Length of the current player list

    status.textContent = "Spinning..."; // Update status to spinning

    // Wait 2 seconds using setTimeout then chose a random player by generating a random integer within the length of the player list and getting that positions textContent
    setTimeout(() => {
        let chosenPlayer = Math.floor(Math.random() * length);
        status.textContent = "Selected player: " + playerList[chosenPlayer].textContent;
    }, 2000);

}

// Function that adds a player to the HTML list
function addPlayers(){
    let status = document.getElementById('status'); // Get the element with the ID status
    let player = document.getElementById('player-name').value; // Get the player by taking the value from the element with the name ID
    let form = document.querySelector('form'); // Get the form to later reset to default state

    status.textContent = "Spin the bottle!"; // Update status to after the first player is added

    let list = document.getElementById('players'); // Get the list element with ID players
    let playerList = Array.from(document.querySelectorAll('li')); // Get list of current player names

    // Loop through the list and check if the player already exists
    for(let i = 0; i < playerList.length; i++){
        if(playerList[i].textContent === player){
            status.textContent = 'Player already exists!';
            form.reset();
            return;
        }
    }

    let newPlayer = document.createElement('li'); // Create a new list element
    newPlayer.textContent = player; // Update the new list element with the name of the submitted player name
    list.appendChild(newPlayer); // Append the new list element to the existing list

    form.reset();
}
