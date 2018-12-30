class MyYogaDice {
    constructor() {
        this.defaultImage = 'images/default.jpg';
    }

    rollTheDice() {
        const poses = 6;
        let posePictures = [];
        for(let i = 0; i < poses; i++) {
            posePictures.push(this.defaultImage);
        }
        return posePictures;
    }
}

var die = new MyYogaDice();

const rollButton = document.getElementById('roll');

// https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByClassName
// Get every element with the class name of poseImage
const poseElements = document.getElementsByClassName("poseImage");
let poseImages = [];

// Add each element to the array of poses
for(let element of poseElements) {
    poseImages.push(element);
}

rollButton.addEventListener('click', function() {
    const poses = die.rollTheDice();
    for(let i = 0; i < poses.length; i++) {
        debugger;
        poseImages[i].src = poses[i];
    }
});