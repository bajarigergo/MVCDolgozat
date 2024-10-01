import Modell from "../modell/Modell.js";
import Jatekter from "../view/Jatekter.js";

export default class Controller {
  #MODELL
  #JATEKTER
  #VIEW
  constructor() {
    this.#MODELL = new Modell();
    this.#JATEKTER = $(".jatekter") 
    this.#VIEW = new Jatekter(this.#JATEKTER, this.#MODELL.getLista());
    this.esemenyKezelo()
    
  }
  esemenyKezelo(){
    $(window).on("kivalaszt",(event) => {
      let kivalasztott = event.detail
      this.#VIEW.setSzoveg(this.#MODELL.listaBizonyosEleme(kivalasztott))
      this.#VIEW = new Jatekter(this.#JATEKTER, this.#MODELL.getLista());
    })
  }
}
