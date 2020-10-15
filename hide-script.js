const $ = document.querySelector.bind(document);

function hide(node) {
  if(node) {
    node.style.display = 'none';
  }
}

function hideAll() {
  hide($('#contents')); // Suggested videos on front page
  hide($('#comments')); // Comments on each video
  hide($('#related')); // Related videos beside the player
}

window.addEventListener("load", function () {
  hideAll();
  document.addEventListener('yt-navigate-finish', function() {
    hideAll();
  });
});

