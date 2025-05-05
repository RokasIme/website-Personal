export function contactsForms() {
  const html = `<section class="container contacts-section">
<div class="row contacts-main">
        <div class="contacts-icons col-1">
            <span class="icon fa fa-home"></span>
            <span class="icon fa fa-phone"></span>
            <span class="icon fa fa-envelope"></span>
        </div>

    <div class="info-block col-lg-3 col-md-4 col-sm-5 col-10">
        <div class="location">
            <p class="main-info">Binghamton, New York</p>
            <p class="add-info">4343 Hinkle Deegan Lake Road</p>
        </div>
        <div class="location">
            <p class="main-info">00 (958) 9865 562</p>
            <p class="add-info">Mon to Fri 9am to 6 pm</p>
        </div>
        <div class="location">
            <p class="main-info">support@colorlib.com</p>
            <p class="add-info">Send us your query anytime!</p>
        </div>
    </div>    
    <div class="input-fields col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
        <input class="contacts-name" type="text" placeholder="Enter your name">
        <input class="contacts-email" type="email" placeholder="Enter email address">
        <input class="contacts-subject" type="text" placeholder="Enter subject">
    </div>
    <div class="input-message">
        <textarea name="input-message" id="input-message" class="input-message col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12" placeholder="Enter message"></textarea>
    </div>
    <div class="contacts-btn-div col-12">
    <button class="contacts-btn">send message</button>
    </div>
</div>
</section>`;

  document.body.insertAdjacentHTML("beforeend", html);
}
