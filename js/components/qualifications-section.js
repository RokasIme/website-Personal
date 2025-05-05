import { sectionTitleHtml } from "./section-title.js";

const qualificationsList = [
  {
    side: "left",
    title: "Masters in Graphics & Fine Arts",
    session: "2010-11",
    result: "3.78 (In the Scale of 4.00)",
    description: null,
    image: null,
  },
  {
    side: "right",
    title: "Creative Content Developer",
    session: null,
    result: null,
    description: "July 2015 to Present",
    image: "./img/c-logo.png.webp",
  },
  {
    side: "left",
    title: "Bachelor in Graphics & UI/UX",
    session: "2006-09",
    result: "3.40 (In the Scale of 4.00)",
    description: null,
    image: null,
  },
  {
    side: "right",
    title: "Senior UI/UX Designer",
    session: null,
    result: null,
    description: "July 2015 to Present",
    image: "./img/c-logo.png.webp",
  },
  {
    side: "left",
    title: "Diploma in Fine Arts & Printing",
    session: "2003-06",
    result: "4.94 (In the Scale of 5.00)",
    description: null,
    image: null,
  },
];

function qualificationsBlock({ title, session, result, image, description }) {
  return `<div class="qualifications-section-content" style="opacity:0">
    ${image ? `<img src="${image}" alt="image">` : ""}
    <h4>${title}</h4>
    ${session ? `<p><span class="qualifications-bold">Session</span>: ${session}</p>` : ""}
    ${result ? `<p><span class="qualifications-bold">Result:</span> ${result}</p>` : ""}
    ${description ? `<p>${description}</p>` : ""}
    </div>`;
}

export function qualificationsSection() {
  const HTML = `
    <section class="container qualifications-section">
    ${sectionTitleHtml("My Qualifications", "Who are in extremely love with eco friendly system.")}
        <div class="row">
            <div class="col-12 row qualifications-section-main">
                ${qualificationsList
                  .map((item) => {
                    return `
                        <div class="qualifications-section-row">
                            <div class="qualifications-section-right">${
                              item.side === "right" ? qualificationsBlock(item) : ""
                            }</div>
                            <div class="qualifications-section-middle">

                            </div>
                            <div class="qualifications-section-left">${
                              item.side === "left" ? qualificationsBlock(item) : ""
                            }</div>
                        </div>
                    `;
                  })
                  .join("")}
            </div>
        </div>
    </section>`;

  document.body.insertAdjacentHTML("beforeend", HTML);

  const unactivatedElements = new Set(document.querySelectorAll(".qualifications-section-content"));

  function onScroll() {
    unactivatedElements.forEach((item) => {
      const rectBox = item.getBoundingClientRect();
      if (rectBox.bottom < window.innerHeight) {
        item.style.opacity = 1;
        unactivatedElements.delete(item);
      }
    });

    if (unactivatedElements.size === 0) window.removeEventListener("scroll", onScroll);
  }

  onScroll();
  window.addEventListener("scroll", onScroll);
}
