export function loadMap () {
    const HTML =`
    <section class="container map">
        <div class="row col-12">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d47364.180443076606!2d-75.94478600608242!3d42.10187476529932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sBinghamton%2C%20New%20York%204343%20Hinkle%20Deegan%20Lake%20Road!5e0!3m2!1slt!2slt!4v1745770048820!5m2!1slt!2slt" 
                width="100%" 
                height="450" 
                style="border:0;" 
                allowfullscreen="" 
                loading="eager" 
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    </section>`;

    document.body.insertAdjacentHTML('beforeend', HTML);
}