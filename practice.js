const generateMemeBtn = document.querySelector(
    ".meme-generator .generate-meme-btn"
  );
  const memeImage = document.querySelector(".meme-generator img");
  const memeTitle = document.querySelector(".meme-generator .meme-title");
  const memeAuthor = document.querySelector(".meme-generator .meme-author");

  const select = document.querySelector("select");
const html = document.querySelector("html");
document.body.style.padding = "10px";

function update(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
  }
  
  const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme by: ${author}`;
  };
  
  const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
      .then((response) => response.json())
      .then((data) => {
        updateDetails(data.url, data.title, data.author);
      });
  };
  
  generateMemeBtn.addEventListener("click", generateMeme);
  select.addEventListener("change", () =>
  select.value === "black" ? update("black", "white") : update("white", "black")
);
  
  generateMeme();