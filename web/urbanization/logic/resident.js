function resident(bool = true) {
  let residentMain = document.getElementById("residentMain");
  let itemResident = document.getElementById("itemResident");
  if (bool) {
    itemResident.style.cssText = "color:#0051ff; background-color:#0051ff36;";
    residentMain.style.visibility = "visible";
  } else {
    residentMain.style.visibility = "hidden";
  }
}

function boxResident(bool = true) {
  let contentResident = document.getElementById("contentResident");
  if (bool) {
    contentResident.style.display = "flex";
  } else {
    contentResident.style.display = "none";
  }
}
function residenceRateTable(bool = true) {
  let tableInfoPaidHouse = document.getElementById("tableInfoPaidHouse");
  if (bool) {
    tableInfoPaidHouse.style.display = "block";
  } else {
    tableInfoPaidHouse.style.display = "none";
  }
}

function closeBoxResident() {
  boxResident(false);
  residenceRateTable(false);
  visibilityInfoResident(false);
  registerResident(false);
}


function infoResident(bool = true) {
  let informationResident = document.getElementById("informationResident");
  if (bool) {
    boxResident();
    registerResident(false);
    informationResident.style.display = "block";
  } else {
    informationResident.style.display = "none";
  }
}

function registerResident(bool = true) {
  let registerResident = document.getElementById("registerResident");
  if (bool) {
    boxResident();
    infoResident(false);
    residenceRateTable(false);
    registerResident.style.cssText = "display: block;";
  } else {
    registerResident.style.display = "none";
  }
}