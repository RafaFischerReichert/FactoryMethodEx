import IItem from "./interfaces/IItem";

export default class Movie implements IItem {
  start(): void {
    this.getDescription();
    console.log("Filme Iniciando!");
  }
  getDescription(): void {
    console.log("Esta é a descrição de um filme!");
  }
}
