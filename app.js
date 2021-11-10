const cardTwo = document.querySelector(".card-2");
const cardTwoPointer = document.getElementById("icon-2");
const cardTwoLeftContent = document.querySelector(".card-2 .card-content-left");
const cardTwoRightContent = document.querySelector(
  ".card-2 .card-content-right"
);

const cards = document.querySelector(".cards");
const cardExpandTwo = document.querySelector(".card-expand-2");

cardTwoPointer.addEventListener("click", () => {
  if (!cardTwo.classList.contains('card-expand-2')) {
    cardTwo.classList.add("card-expand-2");
    cardTwo.classList.add("grid");
    cardTwoRightContent.classList.remove("none");
    cards.classList.add("card-flex");
    cardTwoPointer.style.WebkitTransform = "rotate(" + 180 + "deg)";
    cardOne.classList.add("opacity")
    cardThree.classList.add("opacity")
    cardFour.classList.add("opacity")
  } else {
    cardTwo.classList.remove("card-expand-2");
    cardTwo.classList.remove("grid");
    cardTwoRightContent.classList.add("none");
    cards.classList.remove("card-flex");
    cardTwoPointer.style.WebkitTransform = "rotate(" + 360 + "deg)";
    cardOne.classList.remove("opacity")
    cardThree.classList.remove("opacity")
    cardFour.classList.remove("opacity")
  }
});

// Card 1
const cardOne = document.querySelector(".card-1");
const cardOnePointer = document.getElementById("icon-1")
const cardOneRightContent = document.querySelector(
  ".card-1 .card-content-right"
);

cardOnePointer.addEventListener("click", () => {
  if (!cardOne.classList.contains('card-expand-1')) {
    cardOne.classList.add("card-expand-1");
    cardOne.classList.add("grid");
    cardOneRightContent.classList.remove("none");
    cards.classList.add("card-flex");
    cardOnePointer.style.WebkitTransform = "rotate(" + 180 + "deg)";
    cardTwo.classList.add("opacity")
    cardThree.classList.add("opacity")
    cardFour.classList.add("opacity")
  } else {
    cardOne.classList.remove("card-expand-1");
    cardOne.classList.remove("grid");
    cardOneRightContent.classList.add("none");
    cards.classList.remove("card-flex");
    cardOnePointer.style.WebkitTransform = "rotate(" + 360 + "deg)";
    cardTwo.classList.remove("opacity")
    cardThree.classList.remove("opacity")
    cardFour.classList.remove("opacity")
  }
})

// Card 3
const cardThree = document.querySelector(".card-3");
const cardThreePointer = document.getElementById("icon-3")
const cardThreeRightContent = document.querySelector(
  ".card-3 .card-content-right"
);

cardThreePointer.addEventListener("click", () => {
  if (!cardThree.classList.contains('card-expand-3')) {
    cardThree.classList.add("card-expand-3");
    cardThree.classList.add("grid");
    cardThreeRightContent.classList.remove("none");
    cards.classList.add("card-flex");
    cardThreePointer.style.WebkitTransform = "rotate(" + 180 + "deg)";
    cardTwo.classList.add("opacity")
    cardOne.classList.add("opacity")
    cardFour.classList.add("opacity")
  } else {
    cardThree.classList.remove("card-expand-3");
    cardThree.classList.remove("grid");
    cardThreeRightContent.classList.add("none");
    cards.classList.remove("card-flex");
    cardThreePointer.style.WebkitTransform = "rotate(" + 360 + "deg)";
    cardTwo.classList.remove("opacity")
    cardOne.classList.remove("opacity")
    cardFour.classList.remove("opacity")
  }
})

// Card 4
const cardFour = document.querySelector(".card-4");
const cardFourPointer = document.getElementById("icon-4")
const cardFourRightContent = document.querySelector(
  ".card-4 .card-content-right"
);

cardFourPointer.addEventListener("click", () => {
  if (!cardFour.classList.contains('card-expand-3')) {
    cardFour.classList.add("card-expand-3");
    cardFour.classList.add("grid");
    cardFourRightContent.classList.remove("none");
    cards.classList.add("card-flex");
    cardFourPointer.style.WebkitTransform = "rotate(" + 180 + "deg)";
    cardTwo.classList.add("opacity")
    cardOne.classList.add("opacity")
    cardThree.classList.add("opacity")
  } else {
    cardFour.classList.remove("card-expand-3");
    cardFour.classList.remove("grid");
    cardFourRightContent.classList.add("none");
    cards.classList.remove("card-flex");
    cardFourPointer.style.WebkitTransform = "rotate(" + 360 + "deg)";
    cardTwo.classList.remove("opacity")
    cardOne.classList.remove("opacity")
    cardThree.classList.remove("opacity")
  }
})
