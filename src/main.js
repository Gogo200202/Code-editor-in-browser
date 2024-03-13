const files=document.addEventListener("change",getData);
const sidePanelButton=document.getElementById("sidePanelButton");
const sidePanel=document.getElementById("sidePanel");
const sidePanelFiles=document.getElementById("sidePanel").querySelector("#files");
const codeText=document.getElementById("codeText");
console.log(sidePanelFiles);
const sidePanelClass=sidePanel.className;
sidePanelButton.addEventListener("click",closeSidePanel);

function closeSidePanel(){
  sidePanel.className="hidden";

}



function getData(e){

  e.target.className="hidden";
  let files =e.target.files;

  for (let i = 0; i < files.length; i++) {

    let newDivElemForFilePath=document.createElement("div");
    
    newDivElemForFilePath.innerText=files[i].name;
    //add support for other formats other then text
    let blob1 = new Blob([files[i]], { type: "text/plain" });
    let elem=URL.createObjectURL(blob1);
    newDivElemForFilePath.dataset.url=elem;
    newDivElemForFilePath.addEventListener("click",addTexCodeSpace)
    
  
    sidePanelFiles.appendChild(newDivElemForFilePath);
  }
  
  async function addTexCodeSpace(e){
   
    let div=e.target;

    codeText.innerText="";
     let codeTextFetch= await fetch(div.dataset.url);
     let response=await codeTextFetch.blob();
     let text=await response.text();
     codeText.innerText=text;
  

  }
 

}