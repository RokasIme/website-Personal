export function sectionTitle(title, description) {
  const HTML = `
    <section class="container section-container">
      <div class="row">
        <div class="col-12">
          <div class="section-title">
            <h1>${title}</h1>
            <p>${description}</p>
          </div>
        </div>
      </div>
    </section>`;
  document.body.insertAdjacentHTML("beforeend", HTML);
}

export function sectionTitleHtml(title, description) {
  const HTML = `
    <div class="row">
      <div class="col-12">
        <div class="section-title">
            <h1>${title}</h1>
            <p>${description}</p>
        </div>
      </div>
    </div>`;
  return HTML;
}
