export default class Kartya {
  #SzuloElem;
  #Jel;
  #index
  #kattintElem;
  constructor(SzuloElem, Jel,index) {
    this.#SzuloElem = SzuloElem;
    this.#Jel = Jel;
    this.#index=index
    this.kartyaMegjelenit();
    this.#kattintElem = $(".kartya:last");
    this.esemenykezelo()
  }
  kartyaMegjelenit() {    
    let txt = `
    <div class="card kartya">
            <h1>🔍</h1>
        <div class="card-body">
            <p class="card-text">Kattints Rám</p>
        </div>
    </div>`;
    this.#SzuloElem.append(txt);
  }
  esemenykezelo() {
    this.#kattintElem.on("click", this.kattintasHandler.bind(this));
  }

  kattintasHandler(event) {
    console.log(this.#index);
    const esemeny = new CustomEvent("kivalaszt", {
      detail: this.#index,
    });
    window.dispatchEvent(esemeny);
  }
}
