export function hero() {
  const HTML = `
  <section class='container hero-section'>
    <div class='row'>
      <div class="content col-12 col-md-6">
        <h6 class="topic">THIS IS ME</h6>
        <h1 class="name"> PHILIP GILBERT</h1> 
        <p class="hero-text">You will begin to realise why this exercise is called the Dickens Pattern with reference to the ghost showing Scrooge some different futures.</p>
        <a href="#" class="btn">DISCOVER NOW</a>
      </div>
      <div class="img-div col-10 m-1 col-md-6 m-md-0">
        <img class="img" src="./img/hero-img.webp" alt="Philip Gilbert">
      </div>
    </div>
  </section>`;
  document.body.insertAdjacentHTML("beforeend", HTML);
}
