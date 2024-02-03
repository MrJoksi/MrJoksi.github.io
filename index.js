
let enterContent;
document.addEventListener("DOMContentLoaded", function()
{
  enterContent = document.getElementById("enterArea");
  body = this.getElementById("body")
})

document.addEventListener("keypress", function(event){
  if(event.key == "Enter")
  {
    pageChange();
    
  }
  });

  function pageChange() {
    
    enterContent.style.animation = "none";
    enterContent.innerHTML = "<p>Loading...</p>";
    setTimeout(function() {
      //document.body.style.backgroundColor = "white";
      enterContent.remove();
      createBackground();

      createText();
      
    }, 3000);
  }
  