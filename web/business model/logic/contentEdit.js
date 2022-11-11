function createLi(idUl, list) {
  let countEmote = 0;

  let ulBoxList = document.getElementById(idUl);

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
  if (bool) {
    imgBlur.src = "" + url;
    windowBlurImg.style.display = "flex";
  } else {
    imgBlur.src = "";
    windowBlurImg.style.display = "none";
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
  }
  if (obejectSection.requirelist) {
    createLi(obejectSection.id_ulBoxList, obejectSection.list);
    id_boxList.setAttribute("style", "display:block;");
  }
  if (obejectSection.requirePicture) {
    id_imgBoxPicture.src = obejectSection.urlPicture;
    id_imgBoxPicture.onclick = () =>
      windowBlurImg(true, obejectSection.urlPicture);
    id_boxPicture.setAttribute("style", "display: flex;");
  }
}
