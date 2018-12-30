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

