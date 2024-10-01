export default class Modell {
  #Lista=[];
  constructor() {

    this.listaFeltolt();
  }

    listaFeltolt() {
      if (this.#Lista.length < 1) {
        for (let index = 0; index < 20; index++) {
          const szam = Math.random() * 11;
          this.#Lista[index] = szam <= 3 ? "😈" : "👻";
        }
      }
    }

  getLista() {
    return this.#Lista;
  }
  listaFeololvas() {
    let txt = "";
    for (let index = 0; index < this.#Lista.length; index++) {
      txt += `${index}.elem: ${this.#Lista[index]}`;
    }
    return txt;
  }
  listaBizonyosEleme(elem) {
    if (elem >= 0 && elem < this.#Lista.length) {
      return this.#Lista[elem] === "😈" ? "Elvitt az ördög!" : "Megmentettek a jó lelkek!";
    } else {
      return "Érvénytelen elem!";
    }
  }
}
