const file = document.getElementById('image');
const gallery = document.getElementById('gallery');
const clear = document.getElementById('clear');

/* Function to handle image view */
function preview(event) {
    const files = event.target.files;
    for (const file of files) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        img.width = 400
        gallery.appendChild(img);

        const dlt = document.createElement('button');
        dlt.innerHTML = "delete";
        gallery.appendChild(dlt);


        /* Delete Single Image */

        dlt.addEventListener('click', () => {

            gallery.removeChild(img);
            gallery.removeChild(dlt);

        })
    }
    /* Clear all */

    clear.addEventListener('click', () => {

        while (gallery.firstChild) {
            gallery.removeChild(gallery.firstChild);
        }
    })

}