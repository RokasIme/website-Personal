const subFooterItems = [
  {
    imgSrc: "./img/l2.png.webp",
    alt: "creative",
    link: "#",
  },
  {
    imgSrc: "./img/l3.png.webp",
    alt: "premium labels anchor",
    link: "#",
  },
  {
    imgSrc: "./img/l4.webp",
    alt: "premium labels",
    link: "#",
  },
  {
    imgSrc: "./img/l5.png",
    alt: "premium labels mountains",
    link: "#",
  },
  {
    imgSrc: "./img/l1.png",
    alt: "premium labels crown",
    link: "#",
  },
];
export function subFooter() {
  let HTML = `
    <section class="container subfooter-section">
      <div class="row">
        <div class="col-12 subfooter-section-container">
          <div class="subfooter-section-wrapper" style="width: 9999px">`;

  for (let i = 0; i < subFooterItems.length; i++) {
    const { imgSrc, alt, link } = subFooterItems[i];
    const target = link === "#" ? "" : "_blank";
    HTML += `
      <div class="subfooter-section-item-block">
        <a href="${link}" target="${target}" class="subfooter-section-item">
          <img src="${imgSrc}" alt="${alt}">
        </a>
      </div>`;
  }
  HTML += `
          </div>
        </div>
      </div>
    </section>`;

  document.body.insertAdjacentHTML("beforeend", HTML);

  const container = document.querySelector(".subfooter-section-container");
  const itemWrapper = document.querySelector(".subfooter-section-wrapper");
  const itemsList = [];

  Array.from(document.querySelectorAll(".subfooter-section-item-block")).forEach((item) => {
    const clonedItem = item.cloneNode(true);
    itemWrapper.append(clonedItem);
    itemsList.push(item, clonedItem);
  });

  let visibleItemCount = subFooterItems.length;
  let itemWidth = 100;
  let wrapperWidth = 9999;
  let lastPos = 0;
  let isHovering = false;
  const transitionTime = 250;

  function allowAnimations(isAllowed) {
    itemWrapper.style.transition = isAllowed ? `transform ${transitionTime}ms` : "transform 0s";
  }

  function resetTransform() {
    allowAnimations(false);
    lastPos = 0;
    itemWrapper.style.transform = `translateX(0px)`;
  }

  function resizeElements() {
    if (window.innerWidth < 700) {
      visibleItemCount = 1;
    } else if (window.innerWidth < 800) {
      visibleItemCount = 2;
    } else if (window.innerWidth < 1000) {
      visibleItemCount = 3;
    } else if (window.innerWidth < 1100) {
      visibleItemCount = 4;
    } else {
      visibleItemCount = 5;
    }
    itemWidth = container.clientWidth / visibleItemCount;
    wrapperWidth = itemWidth * itemsList.length;
    itemWrapper.style.width = `${wrapperWidth}px`;
    itemWrapper.style.setProperty("--child-width", `${itemWidth}px`);
    resetTransform();
  }

  function shiftItems() {
    if (isHovering) return;
    if (-lastPos >= itemWidth * subFooterItems.length - 1) {
      resetTransform();
    }

    setTimeout(() => {
      if (isHovering) return;
      allowAnimations(true);
      lastPos -= itemWidth;
      itemWrapper.style.transform = `translateX(${lastPos}px)`;
    }, transitionTime);
  }

  resizeElements();
  shiftItems();

  setInterval(shiftItems, 3000);
  addEventListener("resize", resizeElements);

  itemWrapper.addEventListener("mouseenter", () => {
    isHovering = true;
  });

  itemWrapper.addEventListener("mouseleave", () => {
    isHovering = false;
  });
}
