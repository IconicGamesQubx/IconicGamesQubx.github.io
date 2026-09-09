const trailerLink = document.querySelector("[data-trailer-play]");
const trailerButton = document.createElement("button");
trailerButton.type = "button";
trailerButton.className = trailerLink.className;
trailerButton.setAttribute("aria-label", "Play the Qubx 2 trailer");
trailerButton.append(...trailerLink.childNodes);
trailerLink.replaceWith(trailerButton);

// Without JavaScript the poster remains an ordinary link to YouTube.
trailerButton.addEventListener(
  "click",
  () => {
    const player = document.createElement("iframe");
    player.src =
      "https://www.youtube-nocookie.com/embed/He80x8rVXrY?autoplay=1&playsinline=1&rel=0";
    player.title = "Qubx 2 official trailer";
    player.allow =
      "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share";
    player.allowFullscreen = true;
    player.referrerPolicy = "strict-origin-when-cross-origin";
    document.querySelector("[data-trailer]").replaceChildren(player);
    player.focus();
  },
  { once: true },
);
