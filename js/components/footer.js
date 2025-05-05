export function footer() {
  const socialLinks = [{ name: "facebook" }, { name: "twitter" }, { name: "dribbble" }, { name: "behance" }];
  const arrow =
    '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="30px" width="17px" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"></path></svg>';
  let socialHTML = "";
  for (const link of socialLinks) {
    socialHTML += `<a href="#"><i class="fa fa-${link.name}"></i></a>`;
  }

  let HTML = `
  <footer class="container">
      <div class="row">
        <div class="footer-div col-xl-5 col-lg-5 col-md-6 col-sm-6 col-12">
          <h4>About Me</h4>
          <p>
            We have tested a number of registry fix and clean utilities and present our top 3 list on our site for your
            convenience.
          </p>
          <p class="lastp">
            Copyright &#169 2025 All rights reserved | This template is made with <i class="fa fa-heart-o"></i> by
            <a class="colorlib" href="#">Colorlib</a>
          </p>
        </div>
        <div class="footer-div col-xl-5 col-lg-5 col-md-6 col-sm-6 col-12">
          <h4>Newsletter</h4>
          <p>Stay updated with our latest trends</p>
          <div class="input-div col-12">
            <input class="input-email" type="email" placeholder="Enter Email Address" name="email" />
            <button type="submit" class="input-arrow">${arrow}</button>
          </div>
          <p class="submitting">Submitting...</p>
        </div> 
        <div class="footer-div col-lg-2 col-12">
          <h4>Follow Me</h4>
          <p>Let us be social</p>
          <nav class="social-links">
            ${socialHTML}
          </nav>
        </div>
      </div>
    </footer>`;

  document.body.insertAdjacentHTML("beforeend", HTML);

  const submitDOM = document.querySelector(".input-arrow");
  const submittingTextDOM = document.querySelector(".submitting");

  submitDOM.addEventListener("click", () => {
    submittingTextDOM.classList.add("submitting-show");
  });
}
