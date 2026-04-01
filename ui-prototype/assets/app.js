const enterBtn = document.getElementById('enterBtn');
const loginScreen = document.getElementById('loginScreen');
const mainShell = document.getElementById('mainShell');
const menuItems = document.querySelectorAll('.side-menu li');
const pages = {
  dashboard: document.getElementById('page-dashboard'),
  energy: document.getElementById('page-energy'),
  alarm: document.getElementById('page-alarm'),
  entry: document.getElementById('page-entry'),
  report: document.getElementById('page-report'),
};
const tabName = document.getElementById('tabName');

enterBtn.addEventListener('click', () => {
  loginScreen.classList.add('hidden');
  mainShell.classList.remove('hidden');
});

function switchPage(key, label) {
  Object.values(pages).forEach(p => p.classList.remove('active'));
  pages[key].classList.add('active');
  tabName.textContent = label;
}

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menuItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
    switchPage(item.dataset.page, item.textContent.trim());
  });
});
