import { GameController } from "./GameController.js";
class App {
  async play() {
    const gameController = new GameController();
    await gameController.startGame();
  }
}

export default App;
