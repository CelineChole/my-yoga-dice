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
    constructor(name, image, caption, sanskritName, type, level) {
        this.name = name;
        this.image = image;
        this.caption = caption;
        this.sanskritName = sanskritName;
        this.type = type;
        this.level = level;
    }
}

class MyYogaDice {
    constructor() {
        this.defaultImage = 'images/default.jpg';
        this.poses = [];
    }

    addPose(name, imageUri = this.defaultImage, caption = '', sanskritName = '', type, level = 0) {
        this.poses.push(new YogaPose(name, imageUri, caption, sanskritName, type, level));
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
die.addPose('Triangle', 'images/triangle.jpg', 'Triangle', 'Utthita Trikonasana', 'Standing', 1);
die.addPose('Garland', 'images/garland.jpg', 'Garland', 'Malasana', 'Standing', 1);
die.addPose('Standing Forward Bend', 'images/standing-forward-bend.png', 'Standing Forward Bend', 'Uttanasana', 'Standing', 1);
die.addPose('Lord of the Dance Pose', 'images/lord-of-the-dance.png', 'Lord of the Dance Pose', 'Natarajasana', 'Standing', 3);

die.addPose('Pigeon', 'images/pigeon.jpg', 'Pigeon', 'Ardha Kapotasana', 'Chest Opening', 1);
die.addPose('Bow', 'images/bow-pose.png', 'Bow Pose', 'Dhanurasana', 'Chest Opening', 2)
die.addPose('Fish', 'images/fish.png', 'Fish', 'Matsyasana', 'Chest Opening', 1);
die.addPose('Cobra', 'images/cobra.jpg', 'Cobra', 'Bhujangasana', 'Chest Opening', 1);

die.addPose('Crow', 'images/crow.png', 'Crow', 'Bakasana', 'Balance', 2);
die.addPose('Side Plank', 'images/side-plank.jpeg', 'Side Plank', 'Vasisthasana', 'Balance', 2);
die.addPose('Eagle', 'images/eagle-pose.png', 'Eagle Pose', 'Garudasana', 'Balance', 1);

die.addPose('Bridge', 'images/bridge.jpg', 'Bridge', 'Setu Bandha Sarvangasana', 'Back', 1);
die.addPose('Wheel', 'images/wheel-chakarasana.jpg', 'Wheel', 'Urdhva Dhanurasana', 'Back', 2);
die.addPose('Wheel one leg up', 'images/wheel-one-leg-up.png', 'Wheel One Leg Up', 'Eka Pada Urdvha Dhanurasana' , 'Back', 3);

die.addPose('Half Lord of the Fishes', 'images/Half Lord of the Fishes.jpg', 'Half Lord of the Fishes', 'Ardha Matsyendrasana', 'Twist', 1);
die.addPose('Side Crane', 'images/revolved-chair-pose.jpeg', 'Side Crane', 'Parivrtta Utkatasana', 'twist', 2);

die.addPose('Dolphin', 'images/dolphin.jpg', 'Dolphin', 'Ardha Pincha Mayurasana', 'Inversion', 1);
die.addPose('Plow', 'images/plow.jpg', 'Plow', 'Halasana', 'Inversion', 2);
die.addPose('Shoulderstand', 'images/shoulderstand.jpg', 'Shoulderstand', 'Salamba Sarvangasana', 'Inversion', 3);