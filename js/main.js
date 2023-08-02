const gameMap = new Map();
gameMap.set('PokémonHOME','本名' );

//githubにアクセスする関数
const TwitterImage = document.querySelector('#Twitter');
 TwitterImage.onclick = () => {
  console.log("aaaaaaaaaa")
  window.location.href = "https://twitter.com/avocard_11";
  }  

//twitterにアクセスする関数
const GithubImage = document.querySelector('#Github');
 GithubImage.onclick = () => {
  console.log("aaaaaaaaaa")
  window.location.href = "https://github.com/avocard";
  }  

  //ゲーム名検索する関数
  function gameNameChecker(){
    let element = document.getElementById('gameName');
console.log(gameMap.has(element));
console.log(document.getElementById('gameName'));
      }

  //閲覧にパスワードを追加する関数
   function gate() {
    var UserInput = document.finder.getElementById('password');
    if (UserInput == "aiueo"){
        gameNameChecker();
    }
   }

   