const body = document.body;

let uiShown = 1;

const switchButtonCheckbox = body.querySelector(".some-info .switch-button-checkbox");
const listContent = body.querySelector(".list-content");
const continueButton = listContent.querySelector(".continue-button");
const playersContent = body.querySelector(".players-content");

const setHeightOfPlayerContent = () => {
  const height = playersContent.getBoundingClientRect().width * 1.2;
  playersContent.style.height = height + "px";
}

continueButton.addEventListener("click", () => {
  hideElement(listContent);
  showElement(playersContent);
  uiShown = 2;
  switchButtonCheckbox.checked = true;
  setHeightOfPlayerContent();
});

switchButtonCheckbox.addEventListener("click", () => {
  if (uiShown == 1) {
    hideElement(listContent);
    showElement(playersContent);
    uiShown = 2;
    setHeightOfPlayerContent();
  } else {
    hideElement(playersContent);
    showElement(listContent);
    uiShown = 1;
  }
});

const showElement = (element) => {
  if (element.classList.contains("hide")) {
    element.classList.remove("hide");
  }
  if (!element.classList.contains("show")) {
    element.classList.add("show");
  }
}

const hideElement = (element) => {
  if (element.classList.contains("show")) {
    element.classList.remove("show");
  }
  if (!element.classList.contains("hide")) {
    element.classList.add("hide");
  }
}