
const milestoneData = JSON.parse(data).data;
// console.log(milestoneData)


function loadMileStone() {

  const mileStones = document.querySelector(".milestones");
  // console.log(mileStones);
  
  mileStones.innerHTML = `${milestoneData.map(function(milestone) {
      return `<div class="milestone border-b" id="${milestone._id}">
      <div class="flex">
        <div class="checkbox"><input onclick="markMilestone(this, ${milestone._id})" type="checkbox" /></div>
        <div onclick="openMilestone(this, ${milestone._id})">
          <p>
            ${milestone.name}
            <span><i class="fas fa-chevron-down"></i></span>
          </p>
        </div>
      </div>
      <div class="hidden_panel">
        ${milestone.modules.map(function(module) {
          return `
          <div class="module border-b">
          <p>${module.name}</p>
        </div>`;
        }).join("")};
      </div>
    </div>`
  }).join("")}`;


}

function openMilestone(milestoneElement, id) {

    const currentPanel = milestoneElement.parentNode.nextElementSibling;
    const showPanel = document.querySelector(".show");
    const active = document.querySelector(".active");

    // first remove the active class without current clicked one
    if(!milestoneElement.classList.contains("active") && active){
      active.classList.remove("active");
    }

    // first remove the show class without current clicked one
   if(!currentPanel.classList.contains("show") && showPanel)
    showPanel.classList.remove("show");

    // display the current toggle element 
    currentPanel.classList.toggle("show");

    // make bold the current toggle element 
    milestoneElement.classList.toggle("active");

showElements(id)

}

function showElements(id) {
  const milestoneImage = document.querySelector(".milestoneImage");
  const title = document.querySelector(".title");
  const details = document.querySelector(".details");

  milestoneImage.style.opacity = "0";
  milestoneImage.src = milestoneData[id].image
  title.innerText = milestoneData[id].name;
  details.innerText = milestoneData[id].description;
}

// Image load event
const milestoneImage = document.querySelector(".milestoneImage");
milestoneImage.onload = function() {
  this.style.opacity = "1";
}


function markMilestone(checkbox,id) {
  const doneList = document.querySelector(".doneList");
  const milestoneList = document.querySelector(".milestones");
  const item = document.getElementById(id);

  if(checkbox.checked) {

    // added in done list
    milestoneList.removeChild(item);
    doneList.appendChild(item);


  } else{
    // move back to main list
    doneList.removeChild(item);
    milestoneList.appendChild(item)
  }

  // sorting methodList
	const divs = document.querySelectorAll(".milestones .milestone");

		 	listItems = [];

		divs.forEach( div => listItems.push(div));
		listItems.sort((a, b) => a.id - b.id);
		listItems.forEach( item => milestoneList.appendChild(item));

}


loadMileStone();