function createLi(idUl, list) {
  let countEmote = 0;
  let ulBoxList = document.getElementById(idUl);
  ulBoxList.innerHTML = "";
  list.map((item) => {
    const newLi = document.createElement("li");
    newLi.className += style.li.default;
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

function dadAppend(requiredId, dad, children) {
  if (requiredId) {
    let dadId = document.getElementById(id);
    dadId.appendChild(children);
    return dadId;
  } else {
    dad.appendChild(children);
    return dad;
  }
}

function createBox(classCss, newId, display) {
  let box = document.createElement("div");
  box.className += classCss;
  box.setAttribute("style", `display:${display}`);
  box.id = newId;
  return box;
}

function createParagraph(text) {
  let paragraph = document.createElement("p");
  paragraph.className += style.p.default;
  paragraph.innerText = text;
  return paragraph;
}

function createPicture(url) {
  let img = document.createElement("img");
  img.className += style.img.imgFv;
  img.src = url;
  return img;
}

function createList(list) {
  let countEmote = 0;
  let ul = document.createElement("ul");
  ul.className += style.ul.default;
  list.map((item) => {
    let newLi = document.createElement("li");
    countEmote++;
    newLi.className += style.li.default;
    if (countEmote === 1) {
      newLi.innerText = `${emote[0]} ${item}`;
      ul.appendChild(newLi);
    } else {
      newLi.innerText = `${emote[1]} ${item}`;
      ul.appendChild(newLi);
      countEmote = 0;
    }
  });
  return ul;
}

function createSubTitle(text) {
  let subtitle = document.createElement("h2");
  subtitle.className += style.h2.default;
  subtitle.innerText = text;
  return subtitle;
}

function createCard(dataCard) {
  let card = document.createElement("div");
  card.className += style.div.card;
  card.appendChild(createSubTitle(dataCard.title));
  card.appendChild(createParagraph(dataCard.text));
  return card;
}
