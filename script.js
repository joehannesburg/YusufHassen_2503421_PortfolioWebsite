// blog post functions 

const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item, index) => {
  let header = item.querySelector("header");
  header.addEventListener("click", () => {
    item.classList.toggle("open");

    let description = item.querySelector(".description");
    if (item.classList.contains("open")) {
      description.style.height = `${description.scrollHeight / 16}em`;
      item.querySelector("i").classList.replace("fa-arrow-down", "fa-arrow-up");
    } else {
      description.style.height = "0px";
      item.querySelector("i").classList.replace("fa-arrow-up", "fa-arrow-down");
    }
    removeOpen(index);
  });
});

function removeOpen(index1) {
  accordionContent.forEach((item2, index2) => {
    if (index1 != index2) {
      item2.classList.remove("open");

      let des = item2.querySelector(".description");
      des.style.height = "0px";
      item2.querySelector("i").classList.replace("fa-arrow-up", "fa-arrow-down");
    }
  });
}

// nav bar functions

window.addEventListener('scroll', function() {
    let navbar = document.querySelector('nav');
    if (window.pageYOffset > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  