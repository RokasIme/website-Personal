import { sectionTitleHtml } from "./section-title.js";

const items = [
  {
    name: "Harriet Maxwell",
    position: "Designer at Airbnb",
    message:
      "Clean design and quick load times. It's rare to find a website that just works this smoothly on both desktop and mobile devices. (1)",
    avatarImage: "img/user1.webp",
    link: "#",
  },
  {
    name: "Carolyn Craig",
    position: "Product Manager at Meta",
    message:
      "I love how intuitive everything feels. The layout guides you naturally, and the content is easy to read without feeling overwhelming. (2)",
    avatarImage: "img/user2.webp",
    link: "#",
  },
  {
    name: "Sarah Underwood",
    position: "Consultant at IBM",
    message:
      "I was impressed with the responsiveness across screen sizes. Everything stays crisp and usable no matter what device I'm using. (3)",
    avatarImage: "img/user1.webp",
    link: "#",
  },
  {
    name: "Aaron Trevino",
    position: "Engineer at Netflix",
    message:
      "Really appreciate the performance optimizations. Pages load instantly, even with high-quality images and complex layouts. (4)",
    avatarImage: "img/user2.webp",
    link: "#",
  },
];

export function clientFeedbackSection() {
  let html = `<section class="container client-feedback-section">
                ${sectionTitleHtml(
                  "Client's Feedback About Me",
                  "It is very easy to start smoking but it is an uphill task to quit it. Ask any chain smoker or even a person."
                )}
                <div class="row client-feedback-section-flex">
                    <div class="client-feedback-section-block-list-wrapper">
                        <div class="client-feedback-section-block-list">
                `;

  items.forEach(({ name, message, position, avatarImage, link }) => {
    html += `
        <a class="client-feedback-section-block" href="${link}">
          <div>
            <div class="client-feedback-section-block-avatar">
                <img src="${avatarImage}" alt="avatar">
            </div>
            <div class="client-feedback-section-block-details">
                <p>${message}</p>
                <p>${name}</p>
                <p>${position}</p>
            </div>
          </div>
        </a>
        `;
  });

  html += `   </div>
            </div>
              <div class="client-feedback-section-buttons">
                <div>
                  <button class="client-feedback-section-upBtn"><i class="fa fa-arrow-up" aria-hidden="true"></i><i class="fa fa-arrow-left" aria-hidden="true"></i></button>
                  <button class="client-feedback-section-downBtn"><i class="fa fa-arrow-down" aria-hidden="true"></i><i class="fa fa-arrow-right" aria-hidden="true"></i></button>
                </div>
            </div>
        </div>
    </section>`;

  document.body.insertAdjacentHTML("beforeend", html);

  const itemListWrapperEl = document.querySelector(".client-feedback-section-block-list-wrapper");
  const itemListEl = document.querySelector(".client-feedback-section-block-list");
  const upBtn = document.querySelector(".client-feedback-section-upBtn");
  const downBtn = document.querySelector(".client-feedback-section-downBtn");

  const gap = 10;
  const animationSpeed = 120;
  let allowMoving = true;
  let blockInnerWidth = 0;
  let blockOuterWidth = 0;
  let lastPos = 0;

  resizeBlocks();

  function allowAnimation(isAllowed) {
    itemListEl.style.transition = isAllowed ? `transform ${animationSpeed}ms` : "transform 0ms";
  }

  function resizeBlocks() {
    const visibleBlocks = window.innerWidth <= 1000 ? 1 : 2;
    blockInnerWidth = (itemListWrapperEl.offsetWidth - gap * (visibleBlocks - 1)) / visibleBlocks;
    blockOuterWidth = blockInnerWidth + gap;

    Array.from(itemListEl.children).forEach((itemEl) => {
      itemEl.style.width = blockInnerWidth + "px";
    });

    lastPos = -blockOuterWidth;
    itemListEl.style.transform = `translateX(${lastPos}px)`;
  }

  window.addEventListener("resize", () => {
    resizeBlocks();
  });

  function moveSlide(direction) {
    if (!allowMoving) return;
    allowMoving = false;
    allowAnimation(true);
    lastPos += direction * blockOuterWidth;
    itemListEl.style.transform = `translateX(${lastPos}px)`;

    setTimeout(() => {
      allowAnimation(false);
      if (direction > 0) {
        itemListEl.prepend(itemListEl.children[itemListEl.children.length - 1]);
      } else {
        itemListEl.append(itemListEl.children[0]);
      }
      lastPos -= direction * blockOuterWidth;
      itemListEl.style.transform = `translateX(${lastPos}px)`;
      allowMoving = true;
    }, animationSpeed);
  }

  upBtn.addEventListener("click", () => moveSlide(-1));
  downBtn.addEventListener("click", () => moveSlide(1));
}
