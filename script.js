 function playVideo(videoSrc) {
  const modal = document.getElementById("videoModal");
  const video = document.getElementById("popupVideo");

  video.src = videoSrc;
  modal.style.display = "flex";
  video.play();
}

function closeVideo() {
  const modal = document.getElementById("videoModal");
  const video = document.getElementById("popupVideo");

  video.pause();
  video.currentTime = 0;
  video.src = "";
  modal.style.display = "none";
}


    
    document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', () => {
        card.querySelector('.flip-inner').classList.toggle('flipped');
    });
    });
   

       
        const flipInner = document.getElementById("flipInner");

        document.querySelectorAll(".flip-btn").forEach(button => {
            button.addEventListener("click", () => {
                flipInner.classList.toggle("flipped");
            });
        });

        // Enable smooth click for flip cards
document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click', () => {
    const checkbox = card.querySelector('input');
    checkbox.checked = !checkbox.checked;
  });
});

