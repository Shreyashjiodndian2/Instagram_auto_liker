var i = 0;
document.scrollingElement.scroll
function repeater(){
  document.querySelectorAll('[aria-label="Like"]')[i].parentElement.parentElement.parentElement.click();
  window.scrollByPages(1);
  i++;
}
while(true){
  setInterval(repeater(), 1000);
  console.log(i);
}
