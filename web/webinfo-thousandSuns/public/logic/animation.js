function headerAnimation() {
  let idheader = document.getElementById("header");
  let HeaderButtonNav = document.getElementById("HeaderButtonNav");
  let scroll = document.documentElement.scrollTop;
  if (scroll === 0) {
    idheader.style.cssText = "margin-block: 10%;";
  } else {
    HeaderButtonNav.style.cssText = "top:2.5%";
    idheader.style.cssText =
      "margin-top: 0%; position: fixed; width: 85%; top: 0%; left:7.5%";
  }
}

function projectPartAnimation(id_, nScroll, nameClass_) {
  let problematicPorject = document.getElementById(id_);
  let scroll = document.documentElement.scrollTop;
  console.log(scroll);
  if (scroll >= nScroll) {
    problematicPorject.classList.add(nameClass_);
    problematicPorject.style.opacity = 1;
  }
}

window.addEventListener("scroll", headerAnimation);

window.addEventListener("scroll", () =>
  projectPartAnimation("descriptioProject", 0, "bottom")
);

window.addEventListener("scroll", () =>
  projectPartAnimation("problematicPorject", 100, "up")
);
window.addEventListener("scroll", () =>
  projectPartAnimation("projectPart1", 500, "left")
);

window.addEventListener("scroll", () =>
  projectPartAnimation("projectPart2", 1090, "right")
);

window.addEventListener("scroll", () =>
  projectPartAnimation("projectPart3", 1700, "left")
);

window.addEventListener("scroll", () =>
  projectPartAnimation("projectPart4", 2356, "right")
);
