const arrow =
    '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="30px" width="17px" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"></path></svg>';


export function blueTitleColumn(name, currentPage, link) {
    const HTML = `
    <section class="container blue-container">
        <div class="row">
            <div class="blue-content">
                <h1 class="blue-title">${name}</h1>
                <div class="blue-links">
                <a href="./index.html">Home</a>
                <span>${arrow}</span>
                <a href="${link}">${currentPage}</a>
            </div>
            </div>
        </div>
    </section>`;

    document.body.insertAdjacentHTML("beforeend", HTML);        
}


