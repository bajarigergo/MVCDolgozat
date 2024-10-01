export default class Modell {
  #Lista=[];
  constructor() {

    this.listaFeltolt();
  }
  listaFeltolt() {
    if (this.#Lista.length<1) {
      for (let index = 0; index < 20; index++) {
        let szam = Math.random() * 11;
        if (szam <= 3) {
          this.#Lista[index] = "😈";
        } else {
          this.#Lista[index] = "👻";
        }
      }
    }

  }
  getLista() {
    return this.#Lista;
  }
  listaFeololvas() {
    let txt = "";
    for (let index = 0; index < this.#Lista.length(); index++) {
      txt += `${index}.elem: ${this.#Lista[index]}`;
    }
    return txt;
  }
  listaBizonyosEleme(elem) {
    if (this.#Lista[elem] === "😈") {
      return "Elvitt az ördög!";
    } else {
      return "Megmentettek a jó lelkek!";
    }
  }
}
