const images = ["background_2.jpeg", "background_3.jpeg", "background_6.jpeg"];

const todaysBackground = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${todaysBackground}`;

document.body.appendChild(bgImage);
