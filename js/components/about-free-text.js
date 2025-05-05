export function aboutFreeText() {
  const text = [
    {
      title:
        "It won’t be a bigger problem to find one video game lover in your neighbor. Since the introduction of Virtual Game, it has been achieving great heights so far as its popularity and technological advancement are concerned. The history of video game is as interesting as a fairy tale.",
    },
    {
      title:
        "The quality of today’s video game was not at all there when video game first conceptualized and played ever. During the formulative years, video games were created by using various interactive electronic devices with various display formats. The first ever video game was designed in 1947 by Thomas T. Goldsmith Jr.",
    },
  ];

  let html = `<section class="container free-text-container">
    <div class="row col-12">`;

  for (const row of text) {
    html += `<p class="free-text">${row.title}</p>`;
  }

  html += `</div>
    </section>`;

  document.body.insertAdjacentHTML("beforeend", html);
}
