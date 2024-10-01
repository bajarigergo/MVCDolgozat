export default class Kartya {
  #SzuloElem;
  #Jel;
  kattintElem;
  constructor(SzuloElem, Jel) {
    this.#SzuloElem = SzuloElem;
    this.#Jel = Jel;
    kartyaMegjelenit();
    kattint = $("kartya");
  }
  kartyaMegjelenit() {
    let txt = `
    <div class="card kartya" style="width: 18rem;">
            <h1>🔍</h1>
        <div class="card-body">
            <p class="card-text">Kattints Rám</p>
        </div>
    </div>`;
    this.#SzuloElem.append(txt);
  }
  esemenykezelo() {
    kattint.on("click", (event) => {
      const esemeny = new CustomEvent();
      window.dispatchEvent(esemeny);
      return event.detail;
    });
  }
}
