const target = document.getElementById("header__menu");
target.addEventListener('click', () => {
  target.classList.toggle('open');
  const headerNav = document.getElementById("header__nav");
  headerNav.classList.toggle('in');
});
