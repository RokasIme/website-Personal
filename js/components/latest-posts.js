import { sectionTitleHtml } from "./section-title.js";

const items = [
  {
    image: "img/b1.webp",
    authorImage: "img/user.webp",
    authorName: "Mark Wiens",
    date: "13th Dec",
    heartCount: 15,
    commentCount: 4,
    title: "Break Through Self Doubt And Fear",
    text: "Dream interpretation has many forms; it can be done be done for the sake of fun, hobby or can be taken up as a serious career.",
  },
  {
    image: "img/b2.webp",
    authorImage: "img/user.webp",
    authorName: "Mark Wiens",
    date: "14th Dec",
    heartCount: 10,
    commentCount: 9,
    title: "Portable Fashion for young women",
    text: "You may be a skillful, effective employer but if you don't trust your personnel and the opposite, then the chances of improving.",
  },
  {
    image: "img/b3.webp",
    authorImage: "img/user.webp",
    authorName: "Mark Wiens",
    date: "15th Dec",
    heartCount: 25,
    commentCount: 2,
    title: "Do Dreams Serve As A Premonition",
    text: "So many of us are demotivated to achieve anything. Such people are not enthusiastic about anything. They don't want to work involved.",
  },
];

export function latestPosts() {
  let html = `
    <section class='container latest-posts'>
      ${sectionTitleHtml(
        "Latest posts from our blog",
        "You may be a skillful, effective employer but if you don’t trust your personnel and the opposite, then the chances of improving and expanding the business"
      )}
      <div class="row">`;

  items.forEach(({ image, authorName, authorImage, date, heartCount, commentCount, title, text }) => {
    html +=
      /*html*/
      `<div class="col-lg-4 col-md-6 latest-posts-block">
        <a href="#" class="latest-posts-image-wrapper"><img src="${image}" alt="image" class="latest-posts-image"></a>
        <div class="latest-posts-info">
          <a href="#" class="latest-posts-info-author latest-posts-transition">
            <img src="${authorImage}" alt="author image">
            <span>${authorName}</span>
          </a>
          <div>
            <div class="latest-posts-block-date">${date}</div>
            <a href="#" class="latest-posts-block-hearts latest-posts-transition" title="This post has ${heartCount} likes">
                <i class="fa fa-heart" aria-hidden="true"></i> ${heartCount}
            </a>
            <a href="#" class="latest-posts-block-comments latest-posts-transition" title="This post has ${commentCount} comments">
                <i class="fa fa-comment" aria-hidden="true"></i> ${commentCount}
            </a>
          </div>
        </div>
        <a class="latest-posts-content" href="#">
          <h4 class="latest-posts-transition">${title}</h4>
          <p>${text}</p>
        </a>
      </div>`;
  });

  html += `</div></section>`;

  document.body.insertAdjacentHTML("beforeend", html);
}
