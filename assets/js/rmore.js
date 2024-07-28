let btn = document.querySelectorAll('.readmore');
let mainText = document.querySelectorAll('.main-p');
let container = document.querySelectorAll('.main-container');
// console.log(btn);
// console.log(mainText);
// console.log(container);

btn.forEach((i) => {
   i.addEventListener('click', (evt) => {
      // console.log(evt.target.previousElementSibling);
      let moreContent = evt.target.previousElementSibling;
      let button = evt.target;
      // console.log(button);
      // console.log(moreContent);
      if (moreContent.style.visibility != 'visible') {
         console.log("Style not present. Running code block below");
         moreContent.style.visibility = 'visible';
         evt.target.innerHTML = 'Read less';
      } else {
         console.log('Style present. Removing and replacing with default style  with code block below');
         moreContent.style.visibility = 'hidden';
         evt.target.innerHTML = 'Read more';
      }
   })
});