export function header() {
  let base = "http://localhost:5477/";
  let projectName = "";

  if (location.hostname !== "localhost") {
    projectName = "/54-grupe-teamwork-personal";
    base = "https://front-end-by-rimantas.github.io/54-grupe-teamwork-personal/";
  }
  document.head.insertAdjacentHTML("afterbegin", `<base href ="${base}">`);

  const menu = [
    { text: "home", href: "/" },
    { text: "about", href: "/about/" },
    { text: "services", href: "/services/" },
    { text: "portfolio", href: "/portfolio/" },
    { text: "pricing", href: "/pricing/" },
    {
      text: "blog",
      children: [
        { text: "Blog Home", href: "#" },
        { text: "Blog Single", href: "#" },
      ],
    },
    {
      text: "pages",
      children: [
        { text: "Blog Home 2", href: "#" },
        { text: "Blog Single 2", href: "#" },
        {
          text: "Drop Single 2",
          children: [
            { text: "Blog Home 3", href: "#" },
            { text: "Blog Single 3", href: "#" },
          ],
        },
      ],
    },
    { text: "contacts", href: "/contacts/" },
  ];

  const lp = location.pathname;
  const currentPage = lp.length > 1 && lp.at(-1) === "/" ? lp.slice(0, -1) : lp;

  const crossIcon =
    '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="2rem" width="2rem" xmlns="http://www.w3.org/2000/svg"><path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"></path></svg>';

  let HTML = `
    <header>
      <div class='mobile-bg'></div>
        <div class="header-main-div">
          <div class="logo">
            <a href="./"> <img src="./img/logo.webp" alt="Logo" /> </a>
          </div>
          <div class='menu-cross'>${crossIcon}</div>
          <div class="meniu-icon">
            <i class="fa fa-bars"></i>
          </div>
          <nav class="nav-links">`;

  for (const linkItem of menu) {
    if (linkItem.hasOwnProperty("children")) {
      HTML += `
    <div class="dropdown drop-event">
      <button type="button" class="dropbtn">${linkItem.text}
        <i class="fa fa-angle-down"></i>
      </button>
      <ul class="dropdown-content header-dropdown-shadow dropdown-mobile-closed">
        ${linkItem.children
          .map(({ href, text, children }) => {
            if (!children) return `<li><a href="${href}">${text}</a></li>`;
            return `
              <div class="dropdown2 drop-event">
                <button type="button" class="dropbtn2">${text}
                  <i class="fa fa-angle-down header-arrow-icon-down"></i>
                  <i class="fa fa-angle-left header-arrow-icon-left"></i>
                  </button>
                  <ul class="dropdown-content2 header-dropdown-shadow dropdown-mobile-closed">
                    ${children.map(({ href, text }) => `<li><a href="${href}">${text}</a></li>`).join("")}
                  </ul>
              </div>`;
          })
          .join("")}
      </ul>
    </div>`;
    } else {
      HTML += `<a class='${projectName + linkItem.href === location.pathname ? "active" : ""}' href=".${
        linkItem.href
      }" > ${linkItem.text} </a>`;
    }
  }

  HTML += `</nav>
        </div>
    </header>`;
  document.body.insertAdjacentHTML("beforeend", HTML);

  const headerEl = document.querySelector("header");

  document.addEventListener("scroll", () => {
    headerEl.classList.toggle("shadow", window.scrollY > headerEl.offsetHeight + 5);
  });

  document.querySelectorAll(".drop-event button").forEach((btnEl) => {
    btnEl.addEventListener("click", () => {
      btnEl.nextElementSibling.classList.toggle("dropdown-mobile-closed");
    });
  });

  const menuIconEl = document.querySelector(".meniu-icon");
  const menuCrossEl = document.querySelector(".menu-cross");
  const navLinksEl = document.querySelector(".nav-links");
  const mobileBgEl = document.querySelector(".mobile-bg");

  menuIconEl.addEventListener("click", () => {
    navLinksEl.classList.add("nav-links-active");
    menuIconEl.classList.add("menu-icon-none");
    menuCrossEl.classList.add("menu-icon-flex");
    mobileBgEl.style.display = "block";
  });

  menuCrossEl.addEventListener("click", () => {
    navLinksEl.classList.remove("nav-links-active");
    menuIconEl.classList.remove("menu-icon-none");
    menuCrossEl.classList.remove("menu-icon-flex");
    mobileBgEl.style.display = "";
  });
}
