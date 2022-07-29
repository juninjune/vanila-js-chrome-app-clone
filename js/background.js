const images = [
  "pexels-adrien-olichon-3709434.jpeg",
  "pexels-adrien-olichon-3709434.jpeg",
  "pexels-eberhard-grossgasteiger-1612559.jpeg",
  "pexels-eberhard-grossgasteiger-2310646.jpeg",
  "pexels-lisa-2072264.jpeg",
  "pexels-madison-inouye-2821757.jpeg",
  "pexels-matt-hardy-3560168.jpeg",
  "pexels-stephan-seeber-1054201.jpeg",
];

const todaysBackground = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.classList.add("wallpaper");

bgImage.src = `img/${todaysBackground}`;

document.body.appendChild(bgImage);
