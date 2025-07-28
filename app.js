const url = "https://cyberpunk-edgerunners-api.vercel.app/char";

const test = document.querySelector("#test");
let CyberPunkChars = [];

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Could not fetch data");
    }
    return response.json();
  })
  .then((chars) => {
    if ((chars = "")) {
      throw new Error("array was empty");
    }
    CyberPunkChars = chars;
  });
