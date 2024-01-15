window.addEventListener('DOMContentLoaded', function () {

    var video = document.querySelector ('.work__video');

    video.addEventListener("click", function () {

        if (video.classList.contains('ready')) {
            return;
        }

        video.classList.add('ready');

        var src = video.dataset.src;

        video.insertAdjacentHTML('afterbegin', '<iframe class="work__video-item" src=" '+ src +' " title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');

    });
});
