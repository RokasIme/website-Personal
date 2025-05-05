export function aboutTools() {
  const dataLeft = [
    {
      tool: "After Effects",
      progress: 85,
    },
    {
      tool: "Photoshop",
      progress: 90,
    },
    {
      tool: "Ilustrator",
      progress: 70,
    },
  ];

  const dataRight = [
    {
      tool: "Sublime",
      progress: 95,
    },
    {
      tool: "Sketch",
      progress: 85,
    },
  ];

  let html = `<section class="container">
      <div class="row">
        <h3 class="tools-name">Tools Expertness</h3>
        <div class="progress-left-column col-12 col-lg-6">`;

  for (const item of dataLeft) {
    html += ` <div class="progress-bar">
            <div class="progress-bar-up">
              <div class="label">${item.tool}&nbsp</div>
              <div class="value">${item.progress}%</div>
            </div>
            <div class="progress-bar-down">
              <div class="bar" data-progress="${item.progress}" style="width: ${item.progress}%"></div>
            </div>
          </div>`;
  }

  html += `</div>
  <div class="progress-right-column col-12 col-lg-6">`;

  for (const item of dataRight) {
    html += ` <div class="progress-bar">
            <div class="progress-bar-up">
              <div class="label">${item.tool}&nbsp</div>
              <div class="value">${item.progress}%</div>
            </div>
            <div class="progress-bar-down">
              <div class="bar" data-progress="${item.progress}" style="width: ${item.progress}%"></div>
            </div>
          </div>`;
  }

  html += ` </div>
      </div>
    </section>`;

  document.body.insertAdjacentHTML("beforeend", html);

  const unactivatedElements = new Set(document.querySelectorAll(".bar"));

  function onScroll() {
    unactivatedElements.forEach((item) => {
      const rectBox = item.getBoundingClientRect();
      if (rectBox.bottom < window.innerHeight) {
        activateCounting(item);
        unactivatedElements.delete(item);
      }
    });

    if (unactivatedElements.size === 0) window.removeEventListener("scroll", onScroll);
  }

  onScroll();
  window.addEventListener("scroll", onScroll);

  function activateCounting(item) {
    const finalCount = Number(item.dataset.progress);
    let progress = 0;
    const countTime = 30;
    const increment = Math.ceil(finalCount / countTime);

    const timer = setInterval(() => {
      progress += increment;
      item.style.width = (progress > finalCount ? finalCount : progress) + "%";

      if (progress >= finalCount) {
        clearInterval(timer);
      }
    }, countTime);
  }
}
