const countList = [
  { count: 2563, text: "projects completed" },
  { count: 6784, text: "happy clients" },
  { count: 2239, text: "cups of coffee" },
  { count: 434, text: "real professionals" },
];

export function countingNumbers() {
  let html = `
    <section class='container main-container'>
      <div class='row'>`;

  countList.forEach((numberEl) => {
    html += `
    <div class='number col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12'>
        <div class='count' data-count="${numberEl.count}">0</div>
        <p class='text'>${numberEl.text}</p>
    </div>`;
  });

  html += `</div>
    </section>`;

  document.body.insertAdjacentHTML("beforeend", html);

  const unactivatedElements = new Set(document.querySelectorAll(".count"));

  function onScroll() {
    unactivatedElements.forEach((numberEl) => {
      const rectBox = numberEl.getBoundingClientRect();
      if (rectBox.bottom < window.innerHeight) {
        activateCounting(numberEl);
        unactivatedElements.delete(numberEl);
      }
    });

    if (unactivatedElements.size === 0) window.removeEventListener("scroll", onScroll);
  }

  onScroll();
  window.addEventListener("scroll", onScroll);

  function activateCounting(numberEl) {
    const finalCount = Number(numberEl.dataset.count);
    let count = 0;
    const countTime = 30;
    const increment = Math.ceil(finalCount / countTime);

    const timer = setInterval(() => {
      count += increment;
      numberEl.textContent = count > finalCount ? finalCount : count;

      if (count >= finalCount) {
        clearInterval(timer);
      }
    }, countTime);
  }
}
