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
      "display: flex; background:#000000c9;width: 100%; height: 100%; border-radius:0px;"
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
    id_fullview_boxPicture: "fullview_boxPicture",
    id_fullview_boxPicture_img: "fullview_boxPicture_img",
    id_fullview_title: "fullview_title",
    id_fullview_boxText: "fullview_boxText",
    id_fullview_boxText_paragraph: "fullview_boxText_paragraph",
    id_fullview_boxList: "fullview_boxList",
    id_fullview_boxList_ul: "fullview_boxList_ul",
  };
  const windowBlur = document.getElementById("windowBlurImg");

  let id_fullView = document.getElementById(idFullView.id_fullView);
  let id_fullview_title = document.getElementById(idFullView.id_fullview_title);

  let id_fullview_boxPicture = document.getElementById(
    idFullView.id_fullview_boxPicture
  );
  let id_fullview_boxPicture_img = document.getElementById(
    idFullView.id_fullview_boxPicture_img
  );

  let id_fullview_boxText = document.getElementById(
    idFullView.id_fullview_boxText
  );
  let id_fullview_boxText_paragraph = document.getElementById(
    idFullView.id_fullview_boxText_paragraph
  );

  let id_fullview_boxList = document.getElementById(
    idFullView.id_fullview_boxList
  );
  let id_fullview_boxList_ul = document.getElementById(
    idFullView.id_fullview_boxList_ul
  );

  id_fullview_boxPicture_img.src = "";
  id_fullview_boxList_ul.innerHTML = "";
  id_fullview_boxText_paragraph.innerText = "";
  id_fullview_title.innerText = "";
  btnFullScreen.setAttribute("style", "display: flex; opacity:1;");

  if (requireView) {
    windowBlurImg(false, "");
    windowBlur.setAttribute("style", "display: flex;");
    id_fullView.setAttribute("style", "display: flex;");
    id_fullview_boxPicture.setAttribute("style", "display: none;");
    id_fullview_title.innerText = data.textTitle;
    if (data.requirePicture) {
      //id_fullView.setAttribute("style", "display: grid;");
      id_fullview_boxPicture_img.src = data.urlPicture;
      id_fullview_boxPicture.setAttribute("style", "display: flex;");
    }
    if (data.requireParagraph) {
      id_fullview_boxText.setAttribute("style", "display:block;");
      id_fullview_boxText_paragraph.innerText = data.paragraph;
    }
    if (data.requirelist) {
      createLi(idFullView.id_fullview_boxList_ul, data.list);
      id_fullview_boxList.setAttribute("style", "display:block;");
    }
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
