const checkIntro = setInterval(function () {
  if (document.querySelector("[data-uia='player-skip-intro']")) {
    document.querySelector("[data-uia='player-skip-intro']").click();
  }
}, 1000);
