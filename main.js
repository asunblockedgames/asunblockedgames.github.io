function searchGames() {
    var input = document.getElementById('search-bar');
    var filter = input.value.toLowerCase();
    var gameGrid = document.getElementById('game-grid');
    var games = gameGrid.getElementsByTagName('a');
  
    
    for (var i = 0; i < games.length; i++) {
      var game = games[i];
      var altText = game.getElementsByTagName('img')[0].alt.toLowerCase();
      if (altText.indexOf(filter) > -1) {
        game.style.display = '';
      } else {
        game.style.display = 'none';
      }
    }
  }