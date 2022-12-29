const starContainer = document.querySelector(".star-container");
const star = document.querySelectorAll(".star");

// filling the stars on hovering
// starContainer.addEventListener("mouseover", (e) => {
//   if (e.target.className === "star star-empty") {
//     const targetIndex = e.target.getAttribute("data-index");
//     // fill those whose data index <= hovered data-index
//     // means add star-filled class
//     [...star].map((el) => {
//       if (el.getAttribute("data-index") <= targetIndex) {
//         el.classList.add("star-filled");
//         el.classList.remove("start-empty");
//       }
//     });
//   }
// });

// filled them permanently if star is clicked
starContainer.addEventListener("click", (e) => {
  // find data index of star where it is clicked
  const clickedStarIndex = e.target.getAttribute("data-index");

  // jha tk hover kiya h wo star  filled krdo
  [...star].map((el) => {
    if (el.getAttribute("data-index") <= targetIndex) {
      el.classList.add("star-filled");
    } else {
      el.classList.remove("start-filled");
    }
  });
});

// // empty the stars on mouseout
// starContainer.addEventListener("mouseleave", () => {
//   [...star].map((el) => {
//     el.classList.remove("star-filled");
//   });
// });
