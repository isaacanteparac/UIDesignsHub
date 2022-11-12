const emote = ["🍁", "🍀"];

function app() {
  const idTitleMain = document.getElementById("titleMain");
  idTitleMain.innerText = "hola mundo 😂🤣🤣🤣";

  const section1 = {
    id_title: "section1_title",
    id_boxText: "section1_boxText",
    id_paragraphBoxText: "section1_boxText_paragraph",
    id_boxPicture: "section1_boxPicture",
    id_imgBoxPicture: "section1_boxPicture_img",
    id_boxList: "section1_boxList",
    id_ulBoxList: "section1_boxList_ul",
    textTitle: "Key Partners",
    requireParagraph: true,
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti numquam dolorum eos qui consequatur nam. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti numquam dolorum eos qui consequatur nam. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti numquam dolorum eos qui consequatur nam. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti numquam dolorum eos qui consequatur nam. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti numquam dolorum eos qui consequatur nam. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti numquam dolorum eos qui consequatur nam. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti numquam dolorum eos qui consequatur nam. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti numquam dolorum eos qui consequatur nam. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti numquam dolorum eos qui consequatur nam. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti numquam dolorum eos qui consequatur nam. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti numquam dolorum eos qui consequatur nam. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti numquam dolorum eos qui consequatur nam. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti numquam dolorum eos qui consequatur nam. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti numquam dolorum eos qui consequatur nam. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti numquam dolorum eos qui consequatur nam. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti numquam dolorum eos qui consequatur nam. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti numquam dolorum eos qui consequatur nam. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti numquam dolorum eos qui consequatur nam. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti numquam dolorum eos qui consequatur nam. Lorem ipsum dolor sit amet consectetur",
    requirelist: true,
    list: [
      "item 1 de como comer",
      "item dos de como masticas",
      "item 3 de como correr",
      "item 5 de como saltar",
    ],
    requirePicture: true,
    urlPicture:
      "https://pxb.cdn.ciudadano.news/ciudadano/072022/1657726170496/dua-lipa-lipa-jpg..jpg?",
  };

  const section2 = {
    id_title: "section2_title",
    id_boxText: "section2_boxText",
    id_paragraphBoxText: "section2_boxText_paragraph",
    id_boxPicture: "section2_boxPicture",
    id_imgBoxPicture: "section2_boxPicture_img",
    id_boxList: "section2_boxList",
    id_ulBoxList: "section2_boxList_ul",
    textTitle: "value propositions",
    requireParagraph: false,
    paragraph:"",
    requirelist: true,
    list: [
      "item 1 de como comer",
      "item dos de como masticas",
      "item 3 de como correr",
      "item 5 de como saltar",
    ],
    requirePicture: true,
    urlPicture:
      "https://aws-modapedia.vogue.es/prod/designs/v1/assets/640x960/1355.jpg",
  };

  const section3 = {
    id_title: "section3_title",
    id_boxText: "section3_boxText",
    id_paragraphBoxText: "section3_boxText_paragraph",
    id_boxPicture: "section3_boxPicture",
    id_imgBoxPicture: "section3_boxPicture_img",
    id_boxList: "section3_boxList",
    id_ulBoxList: "section3_boxList_ul",
    textTitle: "value propositions",
    requireParagraph: true,
    paragraph:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa ducimus cupiditate amet temporibus laboriosam inventore, omnis corporis aperiam! Deleniti ratione incidunt voluptas odit alias saepe pariatur atque iusto tempore quis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa ducimus cupiditate amet temporibus laboriosam inventore, omnis corporis aperiam! Deleniti ratione incidunt voluptas odit alias saepe pariatur atque iusto tempore quis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa ducimus cupiditate amet temporibus laboriosam inventore",
    requirelist: true,
    list: [
      "item 1 de como comer",
      "item dos de como masticas",
      "item 3 de como correr",
      "item 5 de como saltar",
    ],
    requirePicture: true,
    urlPicture: "../../../img/logo-IA-pc.png",
  };

  const section4 = {
    id_title: "section4_title",
    id_boxText: "section4_boxText",
    id_paragraphBoxText: "section4_boxText_paragraph",
    id_boxPicture: "section4_boxPicture",
    id_imgBoxPicture: "section4_boxPicture_img",
    id_boxList: "section4_boxList",
    id_ulBoxList: "section4_boxList_ul",
    textTitle: "customer relationships",
    requireParagraph: false,
    paragraph: "",
    requirelist: true,
    list: [
      "item 1 de como comer",
      "item dos de como masticas",
      "item 3 de como correr",
      "item 5 de como saltar",
    ],
    requirePicture: false,
    urlPicture: "",
  };

  const section5 = {
    id_title: "section5_title",
    id_boxText: "section5_boxText",
    id_paragraphBoxText: "section5_boxText_paragraph",
    id_boxPicture: "section5_boxPicture",
    id_imgBoxPicture: "section5_boxPicture_img",
    id_boxList: "section5_boxList",
    id_ulBoxList: "section5_boxList_ul",
    textTitle: "Customer Segments",
    requireParagraph: true,
    paragraph:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa ducimus cupiditate amet temporibus laboriosam inventore, omnis corporis aperiam! Deleniti ratione incidunt voluptas odit alias saepe pariatur atque iusto tempore quis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa ducimus cupiditate amet temporibus laboriosam inventore, omnis corporis aperiam! Deleniti ratione incidunt voluptas odit alias saepe pariatur atque iusto tempore quis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa ducimus cupiditate amet temporibus laboriosam inventore",
    requirelist: true,
    list: [
      "item 1 de como comer",
      "item dos de como masticas",
      "item 3 de como correr",
      "item 5 de como saltar",
    ],
    requirePicture: false,
    urlPicture: "",
  };

  const section6 = {
    id_title: "section6_title",
    id_boxText: "section6_boxText",
    id_paragraphBoxText: "section6_boxText_paragraph",
    id_boxPicture: "section6_boxPicture",
    id_imgBoxPicture: "section6_boxPicture_img",
    id_boxList: "section6_boxList",
    id_ulBoxList: "section6_boxList_ul",
    textTitle: "key resources",
    requireParagraph: true,
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti numquam dolorum eos qui consequatur nam. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti numquam dolorum eos qui consequatur nam. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti numquam dolorum eos qui consequatur nam. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti numquam dolorum eos qui consequatur nam. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti numquam dolorum eos qui consequatur nam. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti numquam dolorum eos qui consequatur nam. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti numquam dolorum eos qui consequatur nam. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti numquam dolorum eos qui consequatur nam. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti numquam dolorum eos qui consequatur nam. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti numquam dolorum eos qui consequatur nam. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti numquam dolorum eos qui consequatur nam. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti numquam dolorum eos qui consequatur nam. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti numquam dolorum eos qui consequatur nam. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti numquam dolorum eos qui consequatur nam. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti numquam dolorum eos qui consequatur nam. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti numquam dolorum eos qui consequatur nam. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti numquam dolorum eos qui consequatur nam. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti numquam dolorum eos qui consequatur nam. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti numquam dolorum eos qui consequatur nam. Lorem ipsum dolor sit amet consectetur",
    requirelist: false,
    list: [],
    requirePicture: true,
    urlPicture: "../../../img/logo-IA-pc.png",
  };

  const section7 = {
    id_title: "section7_title",
    id_boxText: "section7_boxText",
    id_paragraphBoxText: "section7_boxText_paragraph",
    id_boxPicture: "section7_boxPicture",
    id_imgBoxPicture: "section7_boxPicture_img",
    id_boxList: "section7_boxList",
    id_ulBoxList: "section7_boxList_ul",
    textTitle: "channels",
    requireParagraph: true,
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti numquam dolorum eos qui consequatur nam, ad tempore mollitia ut dolore! Ab quo eaque nihil necessitatibus cum debitis atque quisquam architecto.",
    requirelist: false,
    list: [],
    requirePicture: false,
    urlPicture: "",
  };

  sectionCreate(section1);
  sectionCreate(section2);
  sectionCreate(section3);
  sectionCreate(section4);
  sectionCreate(section5);
  sectionCreate(section6);
  sectionCreate(section7);
}

//Customer Segments
//value propositions
