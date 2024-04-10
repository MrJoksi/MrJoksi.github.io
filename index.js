
let enterContent;
let pageCanged = false;
document.addEventListener("DOMContentLoaded", function()
{
  enterContent = document.getElementById("enterArea");
  body = this.getElementById("body")
})

document.addEventListener("keypress", function(event){
  if (pageCanged != true) {
  if(event.key == "Enter")
  {
    pageChange();
    pageCanged = true;
  }
  }
  });

  function pageChange() {
    
    enterContent.style.animation = "none";
    enterContent.innerHTML = "<p>Loading...</p>";
    setTimeout(function() {
  
      enterContent.remove();
      createBackground();

      createText();
      
    }, 3000);
  }
  