const switchThemeBtnRef = document.getElementById('theme-switch-toggle');
const bodyRef = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

bodyRef.classList.add(Theme.LIGHT);

const theme = localStorage.getItem('theme');

if (theme === Theme.DARK) {
  switchThemeBtnRef.checked = true;
  bodyRef.classList.remove(Theme.LIGHT);
  bodyRef.classList.add(Theme.DARK);
}

switchThemeBtnRef.addEventListener('change', onChangeTheme);

function onChangeTheme(evt) {
  if (evt.target.checked) {
    bodyRef.classList.remove(Theme.LIGHT);
    bodyRef.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    bodyRef.classList.remove(Theme.DARK);
    bodyRef.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}
export default onChangeTheme();
