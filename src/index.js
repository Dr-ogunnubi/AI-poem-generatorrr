function displayPoem(response) {
  console.log(response);

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 20,
  });
}

function generatePoem(event) {
  event.preventDefault();
  console.log("generating poem....");

  let poemInputElement = document.querySelector("#poem-input");
  console.log(poemInputElement.value);
  let apikey = "ff69318boa02a4e62f1a9e845ad0e1t9";

  let context = `You are a  poem expert and love to write short poems about various topics. Write a 4 line poem in basic HTML and separate each line with a <br/>. do not wrap the text in html or talk about HTML in the poem. make sure to follow user instructions it should be signed by Zainab AI at the bottom in <strong></strong>`;
  let prompt = `user instructions: generate a poem about ${poemInputElement.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
