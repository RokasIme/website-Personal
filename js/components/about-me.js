export function aboutMe() {
  const HTML = `
<section class='container about-me-section'>
    <div class='row'>
        <div class="img-div-about col-12 col-md-6">
            <img class="img" src="./img/about-img.webp" alt="about me">
        </div>
        <div class="content col-12 col-md-6 col-lg-5 m-lg-1">
            <h1 class="topic">ABOUT ME</h1>
            <h2 class="personal-details">PERSONAL DETAILS</h2>
            <p class="hero-text">Here, I focus on a range of items and features that we use in life without giving them a second thought. such as Coca Cola. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            <a href="#" class="btn">VIEW FULL DETAILS</a>
    </div>
</section>`;
  document.body.insertAdjacentHTML("beforeend", HTML);
}
