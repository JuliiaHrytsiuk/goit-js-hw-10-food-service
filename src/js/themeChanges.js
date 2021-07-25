const themeEl = document.getElementById('theme-switch-toggle');
const bodyEl = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeChanges = function () {
  if (localStorage.getItem('Theme') === Theme.LIGHT || localStorage.getItem('Theme') === false) {
    themeEl.checked = false;
    bodyEl.classList.add('light-theme');
  } else if (localStorage.getItem('Theme') === Theme.DARK) {
    themeEl.checked = true;
    bodyEl.classList.add('dark-theme');
  }

  const onToggle = () => {
    if (themeEl.checked) {
      bodyEl.classList.replace('light-theme', 'dark-theme');
      localStorage.setItem('Theme', Theme.DARK);
    } else {
      bodyEl.classList.replace('dark-theme', 'light-theme');
      localStorage.setItem('Theme', Theme.LIGHT);
    }
  };

  themeEl.addEventListener('change', onToggle);
};

export default themeChanges();
