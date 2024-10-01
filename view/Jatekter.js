import Kartya from "./Kartya.js";

export default class Jatekter {
  #Lista;
  #SzuloElem;
  #EredmenyElem;
  constructor(SzuloElem, Lista) {
    this.#Lista = Lista;
    this.#SzuloElem = SzuloElem;
    for (let index = 0; index < this.#Lista.length(); index++) {
      new Kartya(this.#SzuloElem, this.#Lista[index]);
    }
    this.#EredmenyElem = $("eldont");
    
}
  setSzoveg(szoveg) {
    this.#EredmenyElem.append(szoveg);
  }
}
