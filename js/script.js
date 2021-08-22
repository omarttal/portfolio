"use strict";

const myskills = document.querySelector(".my-skills");
const myprojects = document.querySelector(".my-projects");
const contactme = document.querySelector(".contact-me");
const myexp = document.querySelector(".my-exp");
myskills.addEventListener(
  "mouseover",
  function () {
    myskills.style.fontSize = "3.2rem";
    myskills.style.borderBottom = "2px solid white";
    myprojects.style.fontSize = "1.8rem";
    contactme.style.fontSize = "1rem";
    myskills.style.color = "white";
    setTimeout(function () {
      myprojects.style.fontSize = "";
      myskills.style.fontSize = "";
      myskills.style.borderBottom = "";
      contactme.style.fontSize = "";
      myskills.style.color = "";
    }, 1000);
  },
  false
);
myprojects.addEventListener(
  "mouseover",
  function () {
    myprojects.style.fontSize = "3.5rem";
    myprojects.style.borderBottom = "2px solid white";
    myskills.style.fontSize = "1.3rem";
    contactme.style.fontSize = "1.3rem";
    myprojects.style.color = "white";
    setTimeout(function () {
      myprojects.style.fontSize = "";
      myskills.style.fontSize = "";
      myprojects.style.borderBottom = "";
      contactme.style.fontSize = "";
      myprojects.style.color = "";
    }, 1000);
  },
  false
);
contactme.addEventListener(
  "mouseover",
  function () {
    contactme.style.fontSize = "3.2rem";
    contactme.style.borderBottom = "2px solid white";
    myskills.style.fontSize = "1.3rem";
    myprojects.style.fontSize = "1.8rem";
    contactme.style.color = "white";

    setTimeout(function () {
      contactme.style.fontSize = "";
      myskills.style.fontSize = "";
      contactme.style.borderBottom = "";
      myprojects.style.fontSize = "";
      contactme.style.color = "";
    }, 1000);
  },
  false
);
//////////////////////
const animation1 = document.querySelectorAll(".section-skills");
const revealsection1 = function (entries1, observer1) {
  const [entry1] = entries1;
  console.log(entry1);
  if (!entry1.isIntersecting) return;
  console.log("reached");
  document
    .querySelector(".myskills")
    .classList.add("animate__lightSpeedInLeft");
};
const sectionobserver1 = new IntersectionObserver(revealsection1, {
  root: null,
  threshold: 0.15,
});
animation1.forEach(function (animation1) {
  sectionobserver1.observe(animation1);
  //   section.classList.add("animation");
});
const animation2 = document.querySelectorAll(".section-skills");
const revealsection2 = function (entries2, observer2) {
  const [entry2] = entries2;
  console.log(entry2);
  if (!entry2.isIntersecting) return;
  console.log("reached");
  document.querySelector(".my-exp").classList.add("animate__lightSpeedInLeft");
};
const sectionobserver2 = new IntersectionObserver(revealsection2, {
  root: null,
  threshold: 0.15,
});
animation2.forEach(function (animation2) {
  sectionobserver2.observe(animation2);
  //   section.classList.add("animation");
});

const sections3 = document.querySelectorAll(".section-skills");
const revealsection3 = function (entries3, observer3) {
  const [entry3] = entries3;
  console.log(entry3);
  if (!entry3.isIntersecting) return;
  console.log("reached");
  setTimeout(function () {
    document.querySelector(".html-img").classList.add("html-animate");
    document.querySelector(".css-img").classList.add("css-animate");
    document.querySelector(".sass-img").classList.add("sass-animate");
    document.querySelector(".js-img").classList.add("js-animate");
  }, 500);
};
const sectionobserver3 = new IntersectionObserver(revealsection3, {
  root: null,
  threshold: 0.15,
});
sections3.forEach(function (sections3) {
  sectionobserver3.observe(sections3);
  //   section.classList.add("animation");
});
