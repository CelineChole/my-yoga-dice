// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

class YogaPose {
    constructor(name, image, caption) {
        this.name = name;
        this.image = image;
        this.caption = caption;
    }
}

class MyYogaDice {
    constructor() {
        this.defaultImage = 'images/default.jpg';
        this.poses = [];
    }

    addPose(name, imageUri = this.defaultImage, caption = '') {
        this.poses.push(new YogaPose(name, imageUri, caption));
    }

    rollTheDice(numberOfPoses) {
        let posePictures = [];
        // Shuffle available poses into a new array
        let availablePoses = shuffle(this.poses.slice());

        // Pop items from the array until we have as many as we need
        for(let i = 0; i < numberOfPoses; i++) {
            if(availablePoses.length > 0) {
                posePictures.push(availablePoses.pop());
            } else {
                // If we run out of poses pop a default pose
                posePictures.push(new YogaPose('All out of poses!', this.defaultImage));
            }
        }
        return posePictures;
    }
}

var die = new MyYogaDice();
die.addPose('Pigeon', 'images/pigeon.jpg', 'Pigeon');
die.addPose('Triangle','images/triangle.jpg', 'Triangle');
die.addPose('Bow Pose', 'images/bow-pose.png', 'Bow Pose', 'Dhanurasana', 'Chest Opening', )
die.addPose('Fish','images/fish.png', 'Fish', 'Matsyasana', 'Chest Opening', 1);
die.addPose('Cobra','images/cobra.jpg', 'Cobra', 'Bhujangasana', 'Chest Opening', 1);
die.addPose('Crow','images/crow.png', 'Crow', 'Bakasana', 'Balance', 2);
die.addPose('Standing Forward Bend','images/standing-forward-bend.png', 'Standing Forward Bend', 1);
die.addPose('Wheel', 'images/wheel-chakarasana.jpg', 'Wheel', 'Urdhva Dhanurasana', 'Back', 1);
die.addPose('Half Lord of the Fishes', 'images/Half Lord of the Fishes.jpg', 'Half Lord of the Fishes', 'Ardha Matsyendrasana', 'Twist', 1);
die.addPose('Side Plank', 'images/side-plank.jpeg', 'Side Plank', 'Vasisthasana', 'Balance', 1);
die.addPose('Eagle Pose', 'images/eagle-pose.png', 'Eagle Pose', 'Garudasana', 'Balance', 1);

const rollButton = document.getElementById('roll');

// https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByClassName
// Get every element with the class name of poseImage
const poseElements = document.getElementsByClassName("poseImage");
let poseImages = [];

// Add each element to the array of poses
for(let element of poseElements) {
    poseImages.push(element);
}

const captionsElements = document.getElementsByTagName("figcaption");
let figCaptions = [];

for(let element of captionsElements) {
    figCaptions.push(element);
}

rollButton.addEventListener('click', function() {
    const poses = die.rollTheDice(poseImages.length);
    for(let i = 0; i < poses.length; i++) {
        poseImages[i].src = poses[i].image;
        poseImages[i].title = poses[i].name;
        figCaptions[i].innerText = poses[i].caption;
    }
});