import { sectionTitleHtml } from "./section-title.js";

const questionsList = [
  {
    question: "Dude You Re Getting A Telescope",
    answer:
      "Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo ut scelerisque mattis, leo quam aliquet diam, congue laoreet elit metus eget diam. Proin ac metus diam.",
  },
  {
    question: "The Basics Of Buying A Telescope",
    answer:
      "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. leo quam aliquet diam, congue laoreet elit metus eget diam. ",
  },
  {
    question: "Astronomy Binoculars A Great Alternative",
    answer:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. Proin ac metus diam.",
  },
  {
    question: "Do Your Self Realizations Quickly Fade",
    answer:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. Proin ac metus diam.",
  },
  {
    question: "Success Steps For Your Personal Or Business Life",
    answer:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. Proin ac metus diam.",
  },
];

export function faqSection() {
  let html = `<section class="container faq-section">
    ${sectionTitleHtml(
      "Frequently Asked Questions",
      "When someone does something that they know that they shouldn't do, did they really have a choice. Maybe what I mean to say is did they really have a chance. You can take two people."
    )}
    <div class="row">
        `;

  questionsList.forEach(({ question, answer }, index) => {
    html += `
      <div class="faq-section-row">
        <dt class="faq-section-question">
          <button>
            <i class="fa fa-angle-up faq-section-icon" aria-hidden="true"></i><i class="fa fa-angle-down faq-section-icon" aria-hidden="true"></i> ${question}
          </button>
        </dt>
        <dd class="faq-section-answer">
          ${answer}
        </dd>
      </div>`;
  });

  html += `</div>
        </div>
    </section>`;

  document.body.insertAdjacentHTML("beforeend", html);

  let lastOpenedRow = null;
  
  function onQuestionClick(row) {
    if (lastOpenedRow && lastOpenedRow !== row) lastOpenedRow.classList.remove("faq-section-row-active");
    row.classList.toggle("faq-section-row-active");
    lastOpenedRow = row;
  }

  const rows = document.querySelectorAll(".faq-section-row");

  onQuestionClick(rows[0]);

  rows.forEach((row) => {
    row.querySelector("button").addEventListener("click", () => onQuestionClick(row));
  });
}
