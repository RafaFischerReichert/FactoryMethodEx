import IItem from "./interfaces/IItem";

export default class Game implements IItem {
  start(): void {
    this.getDescription();
    console.log("Jogo Iniciando!");
  }
  getDescription(): void {
    console.log("Esta é a descrição de um jogo!");
  }
}
