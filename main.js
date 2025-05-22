// Dropdown menu for Categories: tap to open/close on mobile
document.addEventListener('DOMContentLoaded', function () {
  var dropdown = document.querySelector('.navbar ul li.dropdown');
  var link = document.getElementById('categories-link');

  // Only add click/tap handler for touch devices
  function isTouchDevice() {
    return (('ontouchstart' in window) ||
      (navigator.maxTouchPoints > 0) ||
      (navigator.msMaxTouchPoints > 0));
  }

  if (dropdown && link && isTouchDevice()) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      // Toggle open class
      dropdown.classList.toggle('open');
    });

    // Optional: close dropdown if clicking outside
    document.addEventListener('click', function (e) {
      if (!dropdown.contains(e.target) && dropdown.classList.contains('open')) {
        dropdown.classList.remove('open');
      }
    });
  }
});
// Offer popup close logic
const closeBtn = document.querySelector('.close-offer');
if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    const offer = document.querySelector('.offer-popup');
    if (offer) offer.style.display = 'none';
  });
}

// Demo cart increment
const cartBtn = document.querySelector('.cart-btn');
if (cartBtn) {
  cartBtn.addEventListener('click', e => {
    e.preventDefault();
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
      let n = parseInt(cartCount.textContent || '0', 10);
      cartCount.textContent = n + 1;
    }
  });
}

// Navbar dropdown for touch (mobile)
document.querySelectorAll('.navbar .dropdown > a').forEach(function (link) {
  link.addEventListener('touchstart', function (e) {
    e.preventDefault();
    const dropdown = link.parentElement;
    if (!dropdown.classList.contains('open')) {
      document.querySelectorAll('.navbar .dropdown').forEach(el => el.classList.remove('open'));
      dropdown.classList.add('open');
    } else {
      dropdown.classList.remove('open');
    }
  });
});

// Close dropdown on outside click (touch)
document.body.addEventListener('touchstart', function (e) {
  if (!e.target.closest('.navbar .dropdown')) {
    document.querySelectorAll('.navbar .dropdown').forEach(el => el.classList.remove('open'));
  }
}, { capture: true });



const menu = document.querySelector(".nav_menu");
const menuNavBtn = document.querySelector("#open-menu-btn");
const closeNavBtn = document.querySelector("#close-menu-btn");

menuNavBtn.addEventListener('click', () => {
  menu.style.display = "flex";
  closeNavBtn.style.display = "inline-block";
  menuNavBtn.style.display = "none";
});

const closeNav = () => {
  menu.style.display = "none";
  closeNavBtn.style.display = 'none';
  menuNavBtn.style.display = "inline-block";
};

menuNavBtn.addEventListener('click', () => {
  menu.style.display = "flex";
});

closeNavBtn.addEventListener('click', closeNav)
