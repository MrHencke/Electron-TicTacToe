module.exports = {
	initializeGame: function initializeGame() {
		gameState = ["", "", "", "", "", "", "", "", ""];
		player1 = {
			icon: "X",
			name: "Player 1",
		};
		player2 = {
			icon: "O",
			name: "Player 2",
		};
		currentPlayer = player1;
		count++;
		var title = gamelogic.getTitle(count);
		document.getElementById("title").innerHTML = `${title} game`;
		document.getElementById(
			"turn"
		).innerHTML = `Its player ${currentPlayer.name}'s turn`;
	},

	setTile: function setTile(tile) {
		var tileEl = document.getElementById(tile);
		console.log(`Tile: ${tile} has been clicked`);
		var arg = currentPlayer == player1 ? "xBox" : "oBox";
		var value = currentPlayer == player1 ? "X" : "O";
		tileEl.classList.add(arg);
		tileEl.value = value;
		gameState[tile] = value;
		gamelogic.winCheck(gameState);
		currentPlayer = currentPlayer == player1 ? player2 : player1; //changes player
		document.getElementById(
			"turn"
		).innerHTML = `Its player ${currentPlayer.name}'s turn`;
	},

	winCheck: function winCheck(gs) {
		var xCount = 0;
		var oCount = 0;
		for (let j = 0; j < 3; j++) {
			for (let i = 0; i < 3; i++) {
				if (gs[i * 3 + j] == "X") xCount++;
				if (gs[i * 3 + j] == "O") oCount++;
				if (xCount == 3) {
					console.log("X WON");
					gamelogic.initializeGame(count);
				}
				if (oCount == 3) {
					console.log("X WON");
					gamelogic.initializeGame(count);
				}
			}
		}
	},

	restart: function fullBoard(gameState) {
		if (!gameState.includes("")) {
			document.querySelectorAll(".buttonbox").forEach((cell) => {
				cell.classList.remove("oBox");
				cell.classList.remove("xBox");
				cell.value = "";
			});
			gamelogic.initializeGame(count);
		}
	},

	getTitle: function getTitle(count) {
		if (count == 1) return "First";
		if (count == 2) return "Second";
		if (count == 3) return "Third";
		if (count > 3) return `${count}th`;
	},
};
