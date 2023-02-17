// carousel and mouse drag

const carousel = document.querySelector(".carousel");

//targetting the query selector
let isDragStart = false,
  prevPageX,
  prevScollLeft;

const dragStart = (e) => {
  //updating global variables value on mouse down event
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carousel.scrollLeft;
  //default isdragging is false- only true if mouse btn is clicked
  //scrollLeft gives the num of px of element content that is scrolled horizontally
};

const dragging = (e) => {
  //scrolling imgs to left according to mouse pointer
  if (!isDragStart) return;
  e.preventDefault();
  let positionDiff = e.pageX - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
  //e.prevents default behaviour-img wont drag from position
  //pageX returns the horizontal co-ordinate of mouse pointer
};

const dragStop = () => {
  isDragStart = false;
};

carousel.addEventListener("mousedown", dragStart); //img move when mouse click down

carousel.addEventListener("mousemove", dragging); //img move when mouse is moved

carousel.addEventListener("mouseup", dragStop); //making isDrag to false once user released the mouse btn- img stop sliding until mouse down btn clicks again

//next allow the arrows to work.
