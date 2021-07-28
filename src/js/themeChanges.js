const themeEl = document.getElementById('theme-switch-toggle');
const bodyEl = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

if (localStorage.getItem('theme') === Theme.DARK) {
  const currentTheme = localStorage.getItem('theme');
  themeEl.setAttribute('checked', 'checked');
  bodyEl.classList.add(Theme.DARK);
} else {
  bodyEl.classList.add(Theme.LIGHT);
}

themeEl.addEventListener('input', onThemeEl);

function onThemeEl(event) {
  if (!event.target.checked) {
    localStorage.setItem('theme', Theme.LIGHT);
    bodyEl.classList.add(Theme.LIGHT);
    bodyEl.classList.remove(Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.DARK);
    bodyEl.classList.add(Theme.DARK);
    bodyEl.classList.remove(Theme.LIGHT);
  }
}
