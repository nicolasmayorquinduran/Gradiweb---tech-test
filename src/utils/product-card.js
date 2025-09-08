export function addCardAnimation(entries){
  entries.forEach(entry => {
    entry.target.classList.add('is-visible');
  });
}