// Define a class Player to represent a player with a name and number
class Player {
    constructor(name, number) {
    this.name = name;
    this.number = number;
    }
}

  // Define a class Menu to interact with a list of players
class Menu {
    constructor() {
      this.players = []; // Initialize an empty array to store players
    }

    // Method to create a new player and add it to the players array
    createPlayer(name, number) {
      const player = new Player(name, number); // Create a new player object
      this.players.push(player); // Add the player to the players array
      console.log(`Player ${name} with number ${number} created.`); // Log a message to indicate player creation
    }

    // Method to view all existing players in the players array
    viewPlayers() {
      console.log("=== Players ==="); // Log header for player list
      this.players.forEach((player, index) => { // Iterate over each player in the array
        console.log(`${index + 1}. Name: ${player.name}, Number: ${player.number}`); // Log player name and number
    });
      console.log("==============="); // Log footer for player list
    }

    // Method to delete a player from the players array by index
    deletePlayer(index) {
      if (index < 0 || index >= this.players.length) { // Check if the index is valid
        console.log("Invalid player index."); // Log an error message for invalid index
    } else {
        const deletedPlayer = this.players.splice(index, 1); // Remove the player at the specified index
        console.log(`Player ${deletedPlayer[0].name} with number ${deletedPlayer[0].number} deleted.`); // Log a message to indicate player deletion
    }
    }
}

  // Sample usage of the menu app
  // Create an instance of the Menu class
const menu = new Menu(); 

  // Create a player named "Alice" with number 10
menu.createPlayer("Alice", 10); 
  // Create a player named "Bob" with number 20
menu.createPlayer("Bob", 20); 
   // View all players in the menu
menu.viewPlayers(); 


  menu.deletePlayer(1); // Delete the player at index 1
  menu.viewPlayers(); // View the updated list of players after deletion