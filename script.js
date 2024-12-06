// const gondolaContainer = document.getElementById("gondolaContainer");


// const defaultDuration = 10;
// const slowDuration = 30; 

// function handleHover(slow) {
//   gondolaContainer.style.animationDuration = slow ? `${slowDuration}s` : `${defaultDuration}s`;
// }

// // Event listeners for hover
// gondolaContainer.addEventListener("mouseover", () => handleHover(true));
// gondolaContainer.addEventListener("mouseout", () => handleHover(false));

// // Dynamically load gondolas
// const imageUrls = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];

// function createGondola(imageUrl) {
//   const gondola = document.createElement("div");
//   gondola.className = "gondola";

//   const hook = document.createElement("div");
//   hook.className = "hook";

//   const img = document.createElement("img");
//   img.src = imageUrl;
//   img.alt = "Gondola Image";

//   gondola.appendChild(hook);
//   gondola.appendChild(img);

//   return gondola;
// }

// function loadGondolas() {
//   imageUrls.forEach((url) => {
//     const gondola = createGondola(url);
//     gondolaContainer.appendChild(gondola);
//   });
// }

// loadGondolas();
