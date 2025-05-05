import { sectionTitleHtml } from "./section-title.js";

const plans = [
  {
    number: "01",
    title: "Economy",
    lable: 'For the individuals',
    price: "199.00",
    items: ['Secure online transfer', 'Unlimited styles for interface', 'Reliable Customer Service'],
  },
  {
    number: "02",
    title: "Business",
    lable: 'For the individuals',
    price: "299.00",
    items: ['Secure online transfer', 'Unlimited styles for interface', 'Reliable Customer Service'],
  },
  {
    number: "03",
    title: "Premium",
    lable: 'For the individuals',
    price: "399.00",
    items: ['Secure online transfer', 'Unlimited styles for interface', 'Reliable Customer Service'],
  },
  {
    number: "04",
    title: "Exclusive",
    lable: 'For the individuals',
    price: "499.00",
    items: ['Secure online transfer', 'Unlimited styles for interface', 'Reliable Customer Service'],
  },
];

export function choosePlan() {
  let html = `
    <section class="container plan-container">
        ${sectionTitleHtml(
          "Choose Your Plan",
          "When someone does something that they know that they shouldn't do, did they."
        )}
        <div class="row">`;

  for (const plan of plans) {
    html += `
        <div class="plan-column ">
          <div class="column-upper">
            <div class="outer-circle">
              <div class="inner-circle">${plan.number}</div>
            </div>
          </div>

          <div class="column-title">
            <h4>${plan.title}</h4>
            <p>${plan.lable}</p>
          </div>
          <div class="column-text">
            <span class="column-line"></span>
            ${plan.items.map(item => `<p>${item}</p>`).join('<span class="column-line"></span>')}
            <span class="column-line"></span>
          </div>
          <div class="price">&#163;${plan.price}</div>
          <div class="buy-now"><a href="#">buy now</a></div>
        </div>`;
  }

  html += `</div>
    </section>`;

  document.body.insertAdjacentHTML("beforeend", html);
}
