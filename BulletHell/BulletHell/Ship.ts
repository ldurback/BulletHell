module BulletHell {

    export class Ship extends Phaser.Sprite {

        ID: number;

        acceleration: number = 1
        rotationSpeed: number = 0.1;

        constructor(game: Phaser.Game, x: number, y: number) {

            super(game, x, y, 'ship', 0);

            this.anchor.setTo(0.5, 0.5);

            game.add.existing(this);

        }

        update() {
        }

    }

}