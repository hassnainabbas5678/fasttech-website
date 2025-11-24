const navbar = document.querySelector(".navbar")

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled")
  } else {
    navbar.classList.remove("navbar-scrolled")
  }
})

// Counter Animation
const counters = document.querySelectorAll(".counter")
const speed = 200

const animateCounters = () => {
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target")
      const count = +counter.innerText
      const increment = target / speed

      if (count < target) {
        counter.innerText = Math.ceil(count + increment)
        setTimeout(updateCount, 10)
      } else {
        counter.innerText = target
      }
    }

    updateCount()
  })
}

let started = false
window.addEventListener("scroll", () => {
  const section = document.querySelector("#counters")
  if (section) {
    const sectionTop = section.getBoundingClientRect().top
    if (sectionTop < window.innerHeight - 100 && !started) {
      animateCounters()
      started = true
    }
  }
})

gsap.from(".navbar-brand img", {
  opacity: 0,
  y: -20,
  duration: 0.8,
  ease: "power2.out"
});

gsap.from(".navbar-nav .nav-item,.navbar-toggler-icon", {
  opacity: 0,
  y: -30,
  duration: 1,
  stagger: 0.15,
  ease: "power2.out",
  delay: 0.5
});

gsap.from(".animate1", {
    opacity: 0,
    duration: 1.5,
    delay: 2,
    ease: "power1.out"
});

gsap.from(".animate2", {
    opacity: 0,
    duration: 1.5,
    delay: 2.3,
    ease: "power1.out"
});
