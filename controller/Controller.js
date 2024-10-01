import Modell from "../modell/Modell.js";
import Jatekter from "../view/Jatekter.js";

export default class Controller {
  SzuloElem;
  constructor() {
    this.SzuloElem = $(".jatekter");
    const modell = new Modell();
    const view = new Jatekter(this.SzuloElem, modell.getLista());
    view.setSzoveg(modell.listaBizonyosEleme);
  }
}
