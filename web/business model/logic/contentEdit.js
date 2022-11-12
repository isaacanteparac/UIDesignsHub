function createLi(idUl, list) {
  let countEmote = 0;
  let ulBoxList = document.getElementById(idUl);
  ulBoxList.innerHTML = "";
  list.map((item) => {
    const newLi = document.createElement("li");
    countEmote++;
    if (countEmote === 1) {
      newLi.innerText = `${emote[0]} ${item}`;
      ulBoxList.appendChild(newLi);
    } else {
      newLi.innerText = `${emote[1]} ${item}`;
      ulBoxList.appendChild(newLi);
      countEmote = 0;
    }
  });
}

function createParagraph(data) {
  let boxText = document.createElement("div");
  boxText.className += "boxText";
  boxText.setAttribute("style", "display: block;");
  let paragraph = document.createElement("p");
  paragraph.className += "boxText-p";
  paragraph.innerText = data.text;
  boxText.appendChild(paragraph);
  if (data.children) {
    console.log(data.dad);
    let dad = document.getElementById(data.dad);
    dad.appendChild(boxText);
  }
}

function createPicture(data) {
  let picture = document.createElement("picture");
  picture.className = "fullView-picture";
  picture.setAttribute("style", "display: flex");
  let img = document.createElement("img");
  img.className += "fullView-picture-img";
  img.src = data.src;
  picture.appendChild(img);
  if (data.children) {
    let dad = document.getElementById(data.dad);
    dad.appendChild(picture);
  }
}

function createList(data) {
  let countEmote = 0;
  let boxLixt = document.createElement("div");
  let ul = document.createElement("ul");
  boxLixt.className += "boxList";
  boxLixt.setAttribute("style", "display: block;");
  ul.className += "boxList-ul";

  data.list.map((item) => {
    let newLi = document.createElement("li");
    countEmote++;
    if (countEmote === 1) {
      newLi.innerText = `${emote[0]} ${item}`;
      ul.appendChild(newLi);
    } else {
      newLi.innerText = `${emote[1]} ${item}`;
      ul.appendChild(newLi);
      countEmote = 0;
    }
  });
  boxLixt.appendChild(ul);
  if (data.children) {
    console.log(data.dad);
    let dad = document.getElementById(data.dad);
    dad.appendChild(boxLixt);
  }
}

function windowBlurImg(bool = true, url = "") {
  const windowBlurImg = document.getElementById("windowBlurImg");
  const imgBlur = document.getElementById("imgBlur");
  let btnFullScreen = document.getElementById("btnFullScreen");

  if (bool) {
    windowBlurFullView(false, {});
    btnFullScreen.setAttribute("style", "display: none;");
    imgBlur.src = "" + url;
    imgBlur.setAttribute("style", "display:block");
    windowBlurImg.setAttribute("style", "display: flex;");
  } else {
    imgBlur.src = "";
    imgBlur.setAttribute("style", "display:none;");
    windowBlurImg.setAttribute("style", "display: none;");
  }
}

function windowfullScreen(bool = true) {
  let id_fullscreen = document.getElementById("fullView");
  let btnFullScreen = document.getElementById("btnFullScreen");
  let boxtextBoxPicture = document.getElementById("boxtextBoxPicture");

  if (bool) {
    boxtextBoxPicture.setAttribute("style", "display: grid;");
    btnFullScreen.setAttribute("style", "display: none;");
    id_fullscreen.setAttribute(
      "style",
      "display: flex; background:var(--fullScreen);width: 100%; height: 100%; border-radius:0px;"
    );
  } else {
    id_fullscreen.setAttribute(
      "style",
      "displat: none; width:80rem; height: 39rem; border-radius:15px;"
    );
  }
}

function windowBlurFullView(requireView, data) {
  const idFullView = {
    id_fullView: "fullView",
    id_fullview_title: "fullview_title",
    id_fullview_boxText_paragraph: "fullview_boxText_paragraph",
  };
  const windowBlur = document.getElementById("windowBlurImg");
  let id_fullView = document.getElementById(idFullView.id_fullView);
  let id_fullview_title = document.getElementById(idFullView.id_fullview_title);
  boxtextBoxPicture.setAttribute("style", "display:flex;");
  id_fullview_title.innerText = "";
  btnFullScreen.setAttribute("style", "display: grid;");
  if (requireView) {
    windowBlurImg(false, "");
    windowBlur.setAttribute("style", "display: flex;");
    id_fullView.setAttribute("style", "display: flex;");
    id_fullview_title.innerText = data.textTitle;
  } else {
    id_fullView.setAttribute("style", "display: none;");
  }
}

function sectionCreate(obejectSection) {
  let idTitle = document.getElementById(obejectSection.id_title);
  let id_boxText = document.getElementById(obejectSection.id_boxText);
  let id_paragraphBoxText = document.getElementById(
    obejectSection.id_paragraphBoxText
  );
  let id_boxList = document.getElementById(obejectSection.id_boxList);
  let id_boxPicture = document.getElementById(obejectSection.id_boxPicture);
  let id_imgBoxPicture = document.getElementById(
    obejectSection.id_imgBoxPicture
  );
  idTitle.innerText = obejectSection.textTitle;
  if (obejectSection.requireParagraph) {
    id_boxText.setAttribute("style", "display:block;");
    id_paragraphBoxText.innerText = obejectSection.paragraph;
    //TITLE: FULL VIEW
    id_paragraphBoxText.onclick = () =>
      windowBlurFullView(true, obejectSection);
  }
  if (obejectSection.requirelist) {
    createLi(obejectSection.id_ulBoxList, obejectSection.list);
    id_boxList.setAttribute("style", "display:block;");
    //TITLE: FULL VIEW
    id_boxList.onclick = () => windowBlurFullView(true, obejectSection);
  }
  if (obejectSection.requirePicture) {
    id_imgBoxPicture.src = obejectSection.urlPicture;
    id_imgBoxPicture.onclick = () =>
      windowBlurImg(true, obejectSection.urlPicture);
    id_boxPicture.setAttribute("style", "display: flex;");
  }
}
