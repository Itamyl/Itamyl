

// Ortalamayı sağlamak için sayfa yeniden boyutlandığında çalışacak bir işlev
function centerVideo() {
    const videoContainer = document.querySelector('.video-container');
    const video = videoContainer.querySelector('video');
    video.style.marginTop = (videoContainer.clientHeight - video.clientHeight) / 2 + 'px';
}

// Sayfa yüklendiğinde ve boyut değiştirdiğinizde ortala işlevini çağırın
window.addEventListener('load', centerVideo);
window.addEventListener('resize', centerVideo);

