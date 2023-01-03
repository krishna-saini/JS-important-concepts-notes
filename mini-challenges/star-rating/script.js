const starContainer = document.querySelector(".star-container");
const stars = document.querySelectorAll(".stars");
let clickedStarIndex;
let hoveredIndex;

// filling the stars on hovering
starContainer.addEventListener("mouseover", (e) => {
  // console.log("mousehover");
  hoveredIndex = e.target.getAttribute("data-index");
  console.log(hoveredIndex);
  // fill those whose data index <= hovered data-index
  // means add star-filled class
  stars.forEach((el) => {
    if (el.getAttribute("data-index") <= hoveredIndex) {
      el.classList.add("star-filled");
      el.classList.remove("star-empty");
    } else {
      el.classList.remove("star-filled");
      el.classList.add("star-empty");
    }
  });
});

// filled them permanently if star is clicked
starContainer.addEventListener("click", (e) => {
  // find data index of star where it is clicked
  clickedStarIndex = e.target.getAttribute("data-index");
  console.log(clickedStarIndex);

  // jha tk hover kiya h wo star IS ALREADY FILLED
  stars.forEach((el) => {
    if (el.getAttribute("data-index") <= clickedStarIndex) {
      el.classList.add("star-filled");
      el.classList.remove("star-empty");
    } else {
      el.classList.remove("star-filled");
      el.classList.add("star-empty");
    }
  });
});

// / PREVENT DESELECTION OF STARS ONCE USER MOVES AWAY
starContainer.addEventListener("mouseleave", () => {
  stars.forEach((el) => {
    if (el.getAttribute("data-index") <= clickedStarIndex) {
      console.log("here2");
      el.classList.add("star-filled");
      el.classList.remove("star-empty");
    } else {
      el.classList.remove("star-filled");
      el.classList.add("star-empty");
    }
  });
});
