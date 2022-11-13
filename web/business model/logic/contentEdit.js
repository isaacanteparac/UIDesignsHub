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

  if (bool) {
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

function windowBlurFullView(requireView, idFullScreenSect) {
  const idFullView = {
    id_fullView: "fullView",
  };
  const windowBlur = document.getElementById("windowBlurImg");
  let id_fullView = document.getElementById(idFullView.id_fullView);
  let fullScreenSect = document.getElementById(idFullScreenSect);
  let classMainFullScreen = document.querySelectorAll(".fullView-boxtText");

  classMainFullScreen.forEach((display) => {
    display.setAttribute("style", "display:none;");
  });

  btnFullScreen.setAttribute("style", "display: grid;");
  if (requireView) {
    windowBlurImg(false, "");
    fullScreenSect.setAttribute("style", "display:block;");

    windowBlur.setAttribute("style", "display: flex;");
    id_fullView.setAttribute("style", "display: flex;");
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
      windowBlurFullView(true, obejectSection.idFullScreen);
  }
  if (obejectSection.requirelist) {
    createLi(obejectSection.id_ulBoxList, obejectSection.list);
    id_boxList.setAttribute("style", "display:block;");
    //TITLE: FULL VIEW
    id_boxList.onclick = () =>
      windowBlurFullView(true, obejectSection.idFullScreen);
  }
  if (obejectSection.requirePicture) {
    id_imgBoxPicture.src = obejectSection.urlPicture;
    id_imgBoxPicture.onclick = () =>
      windowBlurImg(true, obejectSection.urlPicture);
    id_boxPicture.setAttribute("style", "display: flex;");
  }
}

function fullScreenSectionDefault(fullscreenSection) {
  let fullView = document.getElementById("fullView");
  let mainBox = createBox(
    style.div.mainFullScreen,
    fullscreenSection.idMain,
    style.visible.none
  );
  let mainBoxContent = createBox(
    style.div.contentFullSection,
    fullscreenSection.idContent,
    style.visible.flex
  );
  let boxTitleMain = dadAppend(
    false,
    createBox(
      style.div.subTitle,
      fullscreenSection.idMainTitle,
      style.visible.block.flex
    ),
    createSubTitle(fullscreenSection.textTitle)
  );

  let boxText1 = dadAppend(
    false,
    createBox(
      style.div.boxText,
      fullscreenSection.boxiD.text1,
      style.visible.block
    ),
    createParagraph(fullscreenSection.paragraph.p1)
  );

  let boxPicture1 = dadAppend(
    false,
    createBox(
      style.div.boxPicture,
      fullscreenSection.boxiD.picture1,
      style.visible.flex
    ),
    createPicture(fullscreenSection.picture.img1)
  );

  let boxPicture1_boxText1 = createBox(
    style.div.boxGrid2,
    fullscreenSection.boxiD.picture_text1,
    style.visible.flex
  );

  let boxList = dadAppend(
    false,
    createBox(
      style.div.boxList,
      fullscreenSection.boxiD.list1,
      style.visible.block
    ),
    createList(fullscreenSection.list.l1)
  );

  let card1_1 = createCard(fullscreenSection.card.c1[0]);
  let card1_2 = createCard(fullscreenSection.card.c1[1]);
  let card1_3 = createCard(fullscreenSection.card.c1[2]);
  let boxcard1 = createBox(
    style.div.boxGrid3,
    fullscreenSection.boxiD.card1,
    style.visible.grid
  );

  dadAppend(false, boxcard1, card1_1);
  dadAppend(false, boxcard1, card1_2);
  dadAppend(false, boxcard1, card1_3);
  dadAppend(false, boxPicture1_boxText1, boxText1);
  dadAppend(false, boxPicture1_boxText1, boxPicture1);
  mainBoxContent.appendChild(boxPicture1_boxText1);
  mainBoxContent.appendChild(boxList);
  mainBoxContent.appendChild(boxcard1);
  mainBox.append(boxTitleMain);
  mainBox.appendChild(mainBoxContent);
  fullView.appendChild(mainBox);
}
