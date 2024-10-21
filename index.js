


const intervalClass = setInterval(() => {
  const nameUL = document.querySelector(`#name`);
  const nameLI = document.createElement(`li`);
  nameLI.innerText =  100
  nameLI.classList.add(`className`)
  nameUL.append(nameLI);

  const allclassNames = document.querySelectorAll(`.className`)
  if(allclassNames.length >= 5) {
    clearInterval(intervalClass)
  }
}, 3000);


// Add freelancers name, occupation, and starting price in an object
// const freeLancers = [
//   {name: `Alice`, occupation: `Writer`, price: 30},
//   {name: `Bob`, occupation: `Teacher`, price: 50}
// ]
// const newFreelancer = document.querySelector(`#freelancer`);
// console.log(newFreelancer)








// Grab the average starting price
// Update the average starting price
// 