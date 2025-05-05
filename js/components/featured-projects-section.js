import { sectionTitleHtml } from "./section-title.js";

const items = [
    { image: "img/p1.webp", title: "2D Vinyl Design", text: "vector", tag: "vector" },
    { image: "img/p2.webp", title: "2D Vinyl Design", text: "vector", tag: "Raster" },
    { image: "img/p3.webp", title: "Creative Poster Design", text: "Agency", tag: "UI/UX" },
    { image: "img/p4.webp", title: "Embosed Logo Design", text: "Portal", tag: "Printing" },
    { image: "img/p5.webp", title: "3D Helmet Design", text: "vector", tag: "vector" },
    { image: "img/p6.webp", title: "2D Vinyl Design", text: "raster", tag: "Raster" },
];

const tagsList = ["all", ...new Set(Object.values(items).map(({ tag }) => tag))];

export function featuredProjectsSection() {
    let selectedCategory = "all";

    let html = `<section class='container featured-projects-section'>
  ${sectionTitleHtml("Our Latest Featured Projects", "Who are in extremely love with eco friendly system.")}
  <div class="row featured-projects-section-category-list">`;

    tagsList.forEach((tag) => {
        html += `<button class="featured-projects-section-category" data-category-tag="${tag}">${tag}</button>`;
    });

    html += `</div><div class="row featured-projects-section-items"></div></section>`;

    document.body.insertAdjacentHTML("beforeend", html);

    const categoryButtonsEls = document.querySelectorAll(".featured-projects-section-category");
    const itemsEl = document.querySelector(".featured-projects-section-items");

    generateItemElements(itemsEl, selectedCategory);
    checkActiveCategory(selectedCategory, categoryButtonsEls);

    // on category button click
    for (const btn of categoryButtonsEls) {
        btn.addEventListener("click", () => {
            if (selectedCategory !== btn.dataset.categoryTag) {
                selectedCategory = btn.dataset.categoryTag;
                checkActiveCategory(selectedCategory, categoryButtonsEls);
                generateItemElements(itemsEl, selectedCategory);
            }
        });
    }
}
function generateItemElements(itemsEl, selectedCategory) {
    let html = "";
    items.forEach(({ title, tag, image, text }) => {
        if (selectedCategory === "all" || selectedCategory === tag) {
            html += `
        <div class="col-md-4">
            <div class="featured-projects-section-block" style="transform: rotateY(180deg); opacity: 0">
                <div class="featured-projects-section-image-wrapper">
                    <a href="#" class="featured-projects-section-overlay">
                        <img src="img/preview.webp" alt="preview">
                    </a>
                    <img src="${image}" alt="image">
                </div>
                <h4>${title}</h4>
                <p>${text}</p>
            </div>
        </div>
      `;
        }
    });
    itemsEl.innerHTML = html;

    //animation
    setTimeout(() => {
        document.querySelectorAll(".featured-projects-section-block").forEach((block) => {
            block.style = "";
        });
    }, 100);
}

function checkActiveCategory(category, categoryButtons) {
    for (const btn of categoryButtons) {
        if (btn.dataset.categoryTag === category) {
            btn.classList.add("featured-projects-section-category-active");
        } else {
            btn.classList.remove("featured-projects-section-category-active");
        }
    }
}