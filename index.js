const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

storyText =
  "Il faisait 34 degré° dehors, donc :insertx: est allé se promener. Quand il est arrivé à :inserty:, il est resté petrifié un moment, puis :insertz:. Bob a tout vu, mais n'était pas surpris — :insertx: pèse 300 pounds, et c'était une chaude journée.";
insertx = ["Cyril Hanouna", "Donald Trump", "Poutine"];
inserty = ["tchernobyl", "séoul", "la mare aux canards"];
insertz = [
  "a spontanément cramé",
  "a fondu en une flaque sur le bas-coté",
  "s'est transformé en limace et a crevé",
];

randomize.addEventListener('click', result);

function result() {

    let newStory = storyText
    let xItem = randomValueFromArray(insertx)
    let yItem = randomValueFromArray(inserty)
    let zItem = randomValueFromArray(insertz)
    newStory = newStory.replace(":insertx:", xItem)
    newStory = newStory.replace(":inserty:", yItem)
    newStory = newStory.replace(":insertz:", zItem)
    newStory = newStory.replace(":insertx:", xItem)
 


  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name)

  }

  if(document.getElementById("uk").checked) {
    const weight = (Math.round(300*0.14)).toString() + " stones";
    const temperature =  "centigrades";
    newStory = newStory.replace("degré°", temperature)
    newStory = newStory.replace("300 pounds", weight)

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
