const files=document.addEventListener("change",getData);
const sidePanelButton=document.getElementById("sidePanelButton");
const sidePanel=document.getElementById("sidePanel");
const sidePanelClass=sidePanel.className;
sidePanelButton.addEventListener("click",closeSidePanel);

function closeSidePanel(){
  sidePanel.className="hidden";
console.log(sidePanelClass);
}



function getData(e){

  let files =e.target.files;
  let elem=URL.createObjectURL(
    files[0]
  );
  
  console.log(elem);

}