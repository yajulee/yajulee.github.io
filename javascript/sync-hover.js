document.addEventListener("DOMContentLoaded", function(){
  // WORK (nav_work + text_work)
  const navWork = document.querySelector('.nav_work');
  const textWork = document.querySelector('.text_work');
  [navWork, textWork].forEach(cell => {
    cell.addEventListener('mouseenter', () => {
      navWork.classList.add('sync-hover');
      textWork.classList.add('sync-hover');
    });
    cell.addEventListener('mouseleave', () => {
      navWork.classList.remove('sync-hover');
      textWork.classList.remove('sync-hover');
    });
    cell.addEventListener('focusin', () => {
      navWork.classList.add('sync-hover');
      textWork.classList.add('sync-hover');
    });
    cell.addEventListener('focusout', () => {
      navWork.classList.remove('sync-hover');
      textWork.classList.remove('sync-hover');
    });
  });

  // ABOUT (nav_about + name)
  const navAbout = document.querySelector('.nav_about');
  const name = document.querySelector('.name');
  [navAbout, name].forEach(cell => {
    cell.addEventListener('mouseenter', () => {
      navAbout.classList.add('sync-hover');
      name.classList.add('sync-hover');
    });
    cell.addEventListener('mouseleave', () => {
      navAbout.classList.remove('sync-hover');
      name.classList.remove('sync-hover');
    });
    cell.addEventListener('focusin', () => {
      navAbout.classList.add('sync-hover');
      name.classList.add('sync-hover');
    });
    cell.addEventListener('focusout', () => {
      navAbout.classList.remove('sync-hover');
      name.classList.remove('sync-hover');
    });
  });

  // LINES & LENS (nav_linesandlens + text_linesandlens)
  const navLL = document.querySelector('.nav_linesandlens');
  const textLL = document.querySelector('.text_linesandlens');
  [navLL, textLL].forEach(cell => {
    cell.addEventListener('mouseenter', () => {
      navLL.classList.add('sync-hover');
      textLL.classList.add('sync-hover');
    });
    cell.addEventListener('mouseleave', () => {
      navLL.classList.remove('sync-hover');
      textLL.classList.remove('sync-hover');
    });
    cell.addEventListener('focusin', () => {
      navLL.classList.add('sync-hover');
      textLL.classList.add('sync-hover');
    });
    cell.addEventListener('focusout', () => {
      navLL.classList.remove('sync-hover');
      textLL.classList.remove('sync-hover');
    });
  });
});