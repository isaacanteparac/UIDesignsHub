function navigation(bool = true) {
  const navigation = document.getElementById("navigation");
  let HeaderButtonNav = document.getElementById("HeaderButtonNav");
  if (bool) {
    header(false);
    main(false);
    footer(false);
    HeaderButtonNav.style.display = "none";
    navigation.style.display = "flex";
  } else {
    header();
    main();
    footer();
    HeaderButtonNav.style.display = "flex";
    navigation.style.display = "none";
  }
}

function header(bool = true) {
  const header = document.getElementById("header");
  if (bool) {
    header.style.display = "grid";
  } else {
    header.style.display = "none";
  }
}

function main(bool = true) {
  const main = document.getElementById("main");
  if (bool) {
    main.style.display = "flex";
  } else {
    main.style.display = "none";
  }
}

function footer(bool = true) {
  const footer = document.getElementById("footer");
  if (bool) {
    footer.style.display = "grid";
  } else {
    footer.style.display = "none";
  }
}

function moveSelection(idElement) {
  navigation(false);
  location.hash = "#" + idElement;
}

function windowBlurImg(bool = true, url = "") {
  const windowBlurImg = document.getElementById("windowBlurImg");
  const imgBlur = document.getElementById("imgBlur");
  if (bool) {
    header(false);
    imgBlur.src = "" + url;
    windowBlurImg.style.display = "flex";
  } else {
    header();
    imgBlur.src = "";
    windowBlurImg.style.display = "none";
  }
}
