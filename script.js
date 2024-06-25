const uImage = document.querySelector('#uImage');
const wImage = document.querySelector('#wImage');

function convertImage(event) {
    if (event.target.files.length > 0) {
        // mostra a imagem original
        let src = URL.createObjectURL(event.target.files[0]);
        uImage.src = src;

        // converte a imagem pro canvas
        let canvas = document.createElement('canvas');
        let context = canvas.getContext('2d');

        let userImage = new Image();
        userImage.src = src;
        
        userImage.onload = function() {
            canvas.width = userImage.width;
            canvas.height = userImage.height;
            context.drawImage(userImage, 0, 0);

            // converte o canvas pra webp
            let webpImage = canvas.toDataURL('image/webp', 1);
            wImage.src = webpImage;
        };
    }
};