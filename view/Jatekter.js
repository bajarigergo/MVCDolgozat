import Kartya from "./Kartya.js";

export default class Jatekter {
  #Lista=[];
  #SzuloElem;
  #EredmenyElem;
  constructor(SzuloElem, Lista) {
    this.#Lista = Lista;
    this.#SzuloElem = SzuloElem;
    this.jatekTerKialakit()
    this.#EredmenyElem = $(".eldont");
    
}
  jatekTerKialakit(){
    this.#SzuloElem.empty();
    for (let index = 0; index < this.#Lista.length; index++) {
      new Kartya(this.#SzuloElem, this.#Lista[index],index);
    }
  }
  setSzoveg(szoveg) {
    this.#EredmenyElem.empty()
    this.#EredmenyElem.append(szoveg);
  }
}
