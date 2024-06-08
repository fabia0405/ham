let imageUrls = [
  "https://example.com/image1.jpg",
  "https://example.com/image2.jpg",
  // Add more image URLs here...
];

let images = []; // 이미지를 저장할 배열
let currentIndex = 0; // 현재 이미지 인덱스

function preload() {
  // 이미지를 preload() 함수 내에서 미리 로드합니다.
  for (let i = 0; i < imageUrls.length; i++) {
    images[i] = loadImage(imageUrls[i]);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(30);
  textAlign(CENTER, CENTER);
  background(255);
  text("경이", width / 2, height / 2);
}

function draw() {
  // 이미지를 보여줄지 텍스트를 보여줄지 결정합니다.
  if (mouseIsPressed) {
    showNextImage();
  } else {
    background(255);
    text("경이", width / 2, height / 2);
  }
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  background(255);
  image(images[currentIndex], 0, 0, width, height);
}
