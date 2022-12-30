const starContainer = document.querySelector(".star-container");
const star = document.querySelectorAll(".star");

// filling the stars on hovering
starContainer.addEventListener("mouseover", (e) => {
  console.log("mouseover", e.target);
  // if (e.target.className === "star star-empty") {
    const targetIndex = e.target.getAttribute("data-index");
    // fill those whose data index <= hovered data-index
    // means add star-filled class
    star.forEach((el) => {
      if (el.getAttribute("data-index") <= targetIndex) {
        el.classList.add("star-filled");
        el.classList.remove("start-empty");
      }else{
        el.classList.remove("star-filled")
      }
    });
  // }
});

// filled them permanently if star is clicked
starContainer.addEventListener("click", (e) => {
  // find data index of star where it is clicked
  const clickedStarIndex = e.target.getAttribute("data-index");
  console.log(clickedStarIndex);

  // jha tk hover kiya h wo star  filled krdo
  star.forEach((el) => {
    if (el.getAttribute("data-index") <= clickedStarIndex) {
      console.log("yes");
      el.classList.add("star-filled");
    } else {
      console.log("no");
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
