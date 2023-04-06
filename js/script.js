const body = document.body;

const playersContent = body.querySelector(".players-content");
const height = playersContent.getBoundingClientRect().width * 1.2;
playersContent.style.height = height + "px";