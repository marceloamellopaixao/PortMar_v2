const themeChangeButton = document.querySelector(".theme-change");
const body = document.querySelectorAll("body")[0];
let linksHeader = document.querySelectorAll(".cabecalho-a");

themeChangeButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if ((onclick = true)) {
    for (let index = 0; index < linksHeader.length; index++) {
      linksHeader[index].style.color = "#fff";
    }
  } 

  // Salve o tema de preferencia do usuário no armazenamento local.
  const isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("dark-mode", isDarkMode);
});

// Cheque o tema de preferência do usuário do armazenamento local
const savedDarkMode = localStorage.getItem("dark-mode");

if (savedDarkMode === "true") {
  body.classList.add("dark-mode");
}
