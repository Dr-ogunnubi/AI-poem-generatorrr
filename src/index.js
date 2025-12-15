function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "O my Luve is like a red, red rose",
    autoStart: true,
    cursor: null,
    delay: 20,
  });
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
