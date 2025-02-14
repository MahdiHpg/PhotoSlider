let $ = document;

const imgElem = $.getElementById("imgElem");
const rightArrowBtn = $.getElementById("rightArrowBtn");
const leftArrowBtn = $.getElementById("leftArrowBtn");
let imgIndex = 0;

let imgs = [
  {
    id: 1,
    img: "/imgs/1.jpg",
    alt: "1.jpg",
  },
  {
    id: 2,
    img: "/imgs/3.jpg",
    alt: "3.jpg",
  },
  {
    id: 3,
    img: "/imgs/bg.jpg",
    alt: "bg.jpg",
  },
  {
    id: 4,
    img: "/imgs/city.jpg",
    alt: "city.jpg",
  },
  {
    id: 5,
    img: "/imgs/free.jpg",
    alt: "free.jpg",
  },
  {
    id: 6,
    img: "/imgs/Header_Background.jpg",
    alt: "Header_Background.jpg",
  },
  {
    id: 7,
    img: "/imgs/image1.jpg",
    alt: "image1.jpg",
  },
  {
    id: 8,
    img: "/imgs/image2.jpg",
    alt: "image2.jpg",
  },
  {
    id: 9,
    img: "/imgs/image3.jpg",
    alt: "image3.jpg",
  },
  {
    id: 10,
    img: "/imgs/modal-background.png",
    alt: "modal-background.png",
  },
  {
    id: 11,
    img: "/imgs/page-bg.jpg",
    alt: "page-bg.jpg",
  },
  {
    id: 12,
    img: "/imgs/peakpx.jpg",
    alt: "peakpx.jpg",
  },
  {
    id: 13,
    img: "/imgs/sky.jpg",
    alt: "sky.jpg",
  },
  {
    id: 14,
    img: "/imgs/slides-1.jpg",
    alt: "slides-1.jpg",
  },
];

(function defaultImg() {
  imgElem.setAttribute("src", imgs[0].img);
  imgElem.setAttribute("alt", imgs[0].alt);
})();

function setImg(index) {
  imgElem.setAttribute("id", `img-${imgs[index].id}`);
  imgElem.setAttribute("src", imgs[index].img);
  imgElem.setAttribute("alt", imgs[index].alt);
}

function nextImgHandler() {
  imgIndex++;
  if (imgIndex > imgs.length - 1) {
    imgIndex = 0;
  }
  setImg(imgIndex);
}
function prevImgHandler() {
  imgIndex--;
  if (imgIndex < 0) {
    imgIndex = imgs.length - 1;
  }
  setImg(imgIndex);
}

setInterval(() => {
  nextImgHandler();
}, 3000);

rightArrowBtn.addEventListener("click", nextImgHandler);
leftArrowBtn.addEventListener("click", prevImgHandler);
