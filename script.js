// Array of attractive colors and corresponding videos
const attractiveColors = [
  { 
    background: "#", 
    text: "#ffffff", 
    button: "#16a085", 
    video: "https://cdn.glitch.global/d2a935df-87a4-4225-907d-e5879f983e2c/Merry%20Christmas%20From%20Waguri%20Chan%20%20%20%23anime%20%23animeedits%20%23wagurikaoruko%20%23waguri%20%23thefragrantflowerbloomswithdignity%20%23fyp%20%23edit%20%23merrychristmas%20%23happychristmas%20%23viral%20%23fyp%E3%82%B7%20c%20-%20kosmo9%20(tt).mp4?v=1740599877979" // Turquoise theme video
  },
  { 
    background: "#", 
    text: "#ffffff", 
    button: "#2980b9", 
    video: "https://cdn.glitch.global/d2a935df-87a4-4225-907d-e5879f983e2c/Mita%20%20%20%23miside%20%23mita%20%23steam%20%23game%20%23fyp%20%23muranumberone%20%23animetiktok%C2%A0%20%23%E3%82%A2%E3%83%8B%E3%83%A1.mp4?v=1740599280906" // Blue theme video
  },
  { 
    background: "#", 
    text: "#ffffff", 
    button: "#8e44ad", 
    video: "https://cdn.glitch.global/d2a935df-87a4-4225-907d-e5879f983e2c/The%20Porsche%20911%20GT3%20is%20a%20track-focused%20iteration%20of%20the%20legendary%20Porsche%20911%20sports%20car%2C%20meticulously%20cra...riving%20enthusiasts.%20Under%20the%20hood%20lies%20a%20potent%20naturally%20aspirated%20flat-six%20engine%2C%20delivering%20over%20500%20horsepower%20in%20mo.mp4?v=1740599282817" // Purple theme video
  },
  { 
    background: "#", 
    text: "#ffffff", 
    button: "#c0392b", 
    video: "https://cdn.glitch.global/d2a935df-87a4-4225-907d-e5879f983e2c/Shikimori%20%20%23shikimori%20%23shikimorisnotjustacutie%20%23kawaiidakejanaishikimorisan%20%23anime%20%23animeedit%20%23fyp%20%23fyp%E3%82%B7.mp4?v=1740600442741" // Red theme video
  },
  { 
    background: "#", 
    text: "#000000", 
    button: "#f39c12", 
    video: "https://cdn.glitch.global/d2a935df-87a4-4225-907d-e5879f983e2c/Bumble%20Bee%20%20%20.......%23car%20%23carculture%20%23cherovelt%20%23bumblee%20%23bumblebee%20%23transformers%20%23carlovers%20%23cargram%20%23greatcar%23carsofinstagram%20%23carstagram%20%23coolcars%20%23carporn%20%232jz%20%23trending.mp4?v=1740599262078" // Yellow theme video
  },
  { 
    background: "#", 
    text: "#ffffff", 
    button: "#27ae60", 
    video: "https://cdn.glitch.global/d2a935df-87a4-4225-907d-e5879f983e2c/I%20wonder%20how%20muchTag-%20%23chessballe%20%23owarinoseraph%20%23fyp%20%23anime%20%23animeedit.mp4?v=1740600433840" // Green theme video
  },
  { 
    background: "#", 
    text: "#ffffff", 
    button: "#d35400", 
    video: "https://cdn.glitch.global/d2a935df-87a4-4225-907d-e5879f983e2c/%23%E3%82%A2%E3%83%8B%E3%83%A1%20%23mimimiutsukushisugi%20%23%E5%90%9B%E3%81%AE%E3%81%93%E3%81%A8%E3%81%8C%E5%A4%A7%E5%A4%A7%E5%A4%A7%E5%A4%A7%E5%A4%A7%E5%A5%BD%E3%81%8D%E3%81%AA100%E4%BA%BA%E3%81%AE%E5%BD%BC%E5%A5%B3%20%23kiminokotogadaidaidaidaisuki%20%23hanasq.mp4?v=1740600810314" // Orange theme video
  },
  { 
    background: "#", 
    text: "#ffffff", 
    button: "#2c3e50", 
    video: "https://cdn.glitch.global/d2a935df-87a4-4225-907d-e5879f983e2c/Alpha%20%20Tag-%23TheEminenceInShadow%20%23KageNoJitsuryokushaNiNaritakute%20%23ShadowGarden%20%23cidkagenou%20%23Isekai%20%23animeedit%20%23Anime.mp4?v=1740600825117" // Dark Blue theme video
  },
  { 
    background: "#", 
    text: "#ffffff", 
    button: "#c0392b", 
    video: "https://cdn.glitch.global/d2a935df-87a4-4225-907d-e5879f983e2c/Mona%20kawaii%20in%20the%20new%20ep%20%20%23monakawaii%20%23medakakuroiwaisimpervioustomycharms%20%23anime%20%23animeedit%20%23fyp.mp4?v=1740599268183" // Pink theme video
  },
  { 
    background: "#", 
    text: "#00cec9", 
    button: "#00b894", 
    video: "https://cdn.glitch.global/d2a935df-87a4-4225-907d-e5879f983e2c/Merry%20Christmas%20From%20Waguri%20Chan%20%20%20%23anime%20%23animeedits%20%23wagurikaoruko%20%23waguri%20%23thefragrantflowerbloomswithdignity%20%23fyp%20%23edit%20%23merrychristmas%20%23happychristmas%20%23viral%20%23fyp%E3%82%B7%20c%20-%20kosmo9%20(tt).mp4?v=1740599877979" // Teal theme video
  }
];

// Function to change colors and background video
function changeColors() {
  const randomColor = attractiveColors[Math.floor(Math.random() * attractiveColors.length)];

  // Apply colors to the body
  document.body.style.backgroundColor = randomColor.background;
  document.body.style.color = randomColor.text;

  // Apply colors to buttons
  const buttons = document.querySelectorAll(".popup-btn, .sound-btn, .hamburger-menu");
  buttons.forEach(button => {
    button.style.backgroundColor = randomColor.button;
    button.style.color = randomColor.text;
  });

  // Apply colors to sections
  const sections = document.querySelectorAll(".section");
  sections.forEach(section => {
    section.style.backgroundColor = randomColor.background;
    section.style.color = randomColor.text;
  });

  // Change background video
  const bgVideo = document.getElementById("bg-video");
  bgVideo.src = randomColor.video; // Update the video source
  bgVideo.load(); // Reload the video
  bgVideo.play(); // Play the new video
}

// Add event listeners to popup buttons
const popupButtons = document.querySelectorAll(".popup-btn");
popupButtons.forEach(button => {
  button.addEventListener("click", changeColors);
});

// Toggle sections
function toggleSection(sectionId) {
  const sections = document.querySelectorAll(".section");
  sections.forEach(section => {
    if (section.id === sectionId) {
      section.classList.toggle("active");
    } else {
      section.classList.remove("active");
    }
  });
}

// Make popup buttons draggable
popupButtons.forEach(button => {
  let isDragging = false;
  let offsetX, offsetY;

  button.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - button.getBoundingClientRect().left;
    offsetY = e.clientY - button.getBoundingClientRect().top;
  });

  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      button.style.left = `${e.clientX - offsetX}px`;
      button.style.top = `${e.clientY - offsetY}px`;
    }
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });
});

// Toggle sound on/off
const soundBtn = document.getElementById("sound-btn");
const bgVideo = document.getElementById("bg-video");

soundBtn.addEventListener("click", () => {
  if (bgVideo.muted) {
    bgVideo.muted = false;
    soundBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
  } else {
    bgVideo.muted = true;
    soundBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
  }
});

// Toggle hamburger menu
const hamburgerMenu = document.getElementById("hamburger-menu");
const popupButtonsContainer = document.getElementById("popup-buttons");

hamburgerMenu.addEventListener("click", () => {
  popupButtonsContainer.classList.toggle("active");
});