const the_animation = document.querySelectorAll(".animation");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("scroll-in-animation");
      } else {
        entry.target.classList.remove("scroll-in-animation");
      }
    });
  },
  { threshold: 0.5 }
);

for (let i = 0; i < the_animation.length; i++) {
  const elements = the_animation[i];

  observer.observe(elements);
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  const styles = window.getComputedStyle(element);
  const isPositioned = styles.position !== "static";
  const offsetTop = isPositioned ? parseInt(styles.top, 10) || 0 : 0;
  const offsetLeft = isPositioned ? parseInt(styles.left, 10) || 0 : 0;
  const elementTop = rect.top + offsetTop;
  const elementLeft = rect.left + offsetLeft;
  const viewportWidth =
    window.innerWidth || document.documentElement.clientWidth;
  const viewportHeight =
    window.innerHeight || document.documentElement.clientHeight;
  return (
    elementTop >= 0 &&
    elementLeft >= 0 &&
    elementTop <= viewportHeight &&
    elementLeft <= viewportWidth
  );
}

// Usage example:
window.onload = function () {
  const myElement = document.getElementById("tesla_main");
  const isElementInView = isInViewport(myElement);

  if (isElementInView) {
    // console.log("Element is inside the viewport");
    const element = document.getElementsByClassName("modu");

    element.style.color = "white";
  } else {
    console.log("Element is outside the viewport");
  }
};
