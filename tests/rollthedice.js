describe('roll the dice function', () => {
    let die = buildDiceWithPoses();

    it('returns the correct number of poses asked for', () => {
        let poses = die.rollTheDice(1);
        expect(poses.length).toBe(1);

        poses = die.rollTheDice(7);
        expect(poses.length).toBe(7);
    });

    it('only returns standing poses when filtered', () => {
        let poseFilter = ['standing'];

        let poses = die.rollTheDice(100, 3, poseFilter);

        let nonStandingPoses = poses.filter(pose => {
            return pose.type !== 'standing' && pose.type !== 'Unknown';
        });

        expect(nonStandingPoses.length).toBe(0);
    });
});