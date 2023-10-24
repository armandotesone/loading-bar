 document.addEventListener ("DOMContentlLoaded", function(){
const progressBar =  document.querySelector("progressBar");
  const percentText = document.querySelector("percenText");
  let percent = 0;

   function updateprogressBat(){
     if ( percent < 100 ){
       percent += 1;
       progressBar.style.width percent + "%";
       percentText.textContent = percent + "%";
setTimeout (updateprogressBar,20);
     }
   }
updateprogressBar();
 });
