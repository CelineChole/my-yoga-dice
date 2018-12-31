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

    rollTheDice(numberOfPoses, maxLevel = 3) {
        let posePictures = [];
        // Shuffle available poses into a new array
        let availablePoses = shuffle(this.poses.slice());

        availablePoses = availablePoses.filter(pose => {
            return pose.level <= maxLevel;
        });

        // Pop items from the array until we have as many as we need
        for (let i = 0; i < numberOfPoses; i++) {
            if (availablePoses.length > 0) {
                posePictures.push(availablePoses.pop());
            } else {
                // If we run out of poses pop a default pose
                posePictures.push(new YogaPose('All out of poses!', this.defaultImage));
            }
        }
        return posePictures;
    }
}

function buildDiceWithPoses() {
    var dice = new MyYogaDice();
    // Standing Poses
    dice.addPose('Triangle', 'images/triangle.jpg', 'Triangle', 'Utthita Trikonasana', 'Standing', 1);
    dice.addPose('Garland', 'images/garland.jpg', 'Garland', 'Malasana', 'Standing', 1);
    dice.addPose('Standing Forward Bend', 'images/standing-forward-bend.png', 'Standing Forward Bend', 'Uttanasana', 'Standing', 1);
    dice.addPose('Half Moon Pose', 'images/half-moon-pose.jpg', 'Half Moon Pose', 'Ardha Chandrasana', 'Standing', 2);
    dice.addPose('Lord of the Dance Pose', 'images/lord-of-the-dance.png', 'Lord of the Dance Pose', 'Natarajasana', 'Standing', 3);

    // Chest Opening
    dice.addPose('Fish', 'images/fish.jpeg', 'Fish', 'Matsyasana', 'Chest Opening', 1);
    dice.addPose('Cobra', 'images/cobra.jpg', 'Cobra', 'Bhujangasana', 'Chest Opening', 1);
    dice.addPose('Pigeon', 'images/pigeon.jpg', 'Pigeon', 'Ardha Kapotasana', 'Chest Opening', 1);
    dice.addPose('Locust', 'images/locust.png', 'Locust', 'Salabhasana', 'Chest Opening', 1);
    dice.addPose('Bow', 'images/bow-pose.png', 'Bow Pose', 'Dhanurasana', 'Chest Opening', 2)
    dice.addPose('Camel', 'images/camel-pose.png', 'Camel', 'Ustrasana', 'Chest Opening', 3);

    // Balance
    dice.addPose('Eagle', 'images/eagle-pose.png', 'Eagle Pose', 'Garudasana', 'Balance', 1);
    dice.addPose('Tree', 'images/tree.png', 'Tree', 'Vrksasana', 'Balance', 1);
    dice.addPose('Crow', 'images/crow.png', 'Crow', 'Bakasana', 'Balance', 2);
    dice.addPose('Side Plank', 'images/side-plank.jpeg', 'Side Plank', 'Vasisthasana', 'Balance', 2);

    // Back
    dice.addPose('Bridge', 'images/bridge.jpg', 'Bridge', 'Setu Bandha Sarvangasana', 'Back', 1);
    dice.addPose('Wheel', 'images/wheel-chakarasana.jpg', 'Wheel', 'Urdhva Dhanurasana', 'Back', 2);
    dice.addPose('Wheel one leg up', 'images/wheel-one-leg-up.png', 'Wheel One Leg Up', 'Eka Pada Urdvha Dhanurasana', 'Back', 3);

    // Twist
    dice.addPose('Half Lord of the Fishes', 'images/Half Lord of the Fishes.jpg', 'Half Lord of the Fishes', 'Ardha Matsyendrasana', 'Twist', 1);
    dice.addPose('Side Crane', 'images/revolved-chair-pose.jpeg', 'Side Crane', 'Parivrtta Utkatasana', 'twist', 2);
    dice.addPose('Noose', 'images/noose.jpg', 'Noose', 'Pasasana', 'Twist', 2);

    // Inversion
    dice.addPose('Dolphin', 'images/dolphin.jpg', 'Dolphin', 'Ardha Pincha Mayurasana', 'Inversion', 1);
    dice.addPose('Plow', 'images/plow.jpg', 'Plow', 'Halasana', 'Inversion', 2);
    dice.addPose('Shoulderstand', 'images/shoulderstand.jpg', 'Shoulderstand', 'Salamba Sarvangasana', 'Inversion', 2);
    dice.addPose('Headstand', 'images/headstand.jpg', 'Headstand', 'Salamba Sirsasana', 'Inversion', 3);

    // Core
    dice.addPose('Boat', 'images/boat.jpg', 'Boat', 'Paripurna Navasana ', 'Core', 1);
    dice.addPose('Chair', 'images/chair.png', 'Chair', 'Utkatasana', 'Core', 1);

// Restorative
// dice.addPose('Reclining Bound Angle', 'images/reclining-bound-angle.jpg', 'Reclining Bound Angle', 'Supta Baddha Konasana', 'Restorative', 1);
// dice.addPose('Happy Baby', 'images/happy-baby.jpg', 'Happy Baby', 'Ananda Balasana', 'Restorative', 1);

    return dice;
}
