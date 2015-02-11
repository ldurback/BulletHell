module BulletHell {

    export class Player extends Phaser.Sprite {

        constructor(game: Phaser.Game, x: number, y: number) {

            super(game, x, y, 'ship', 0);

            this.anchor.setTo(0.5, 0.5);

            //this.animations.add('walk', [0, 1, 2, 3, 4], 10, true);

            game.add.existing(this);

        }

        update() {

            this.body.velocity.x = 0;
            this.body.velocity.y = 0;

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {

                this.body.velocity.x += -100;
                //this.animations.play('walk');

                //if (this.scale.x == 1) {
                //    this.scale.x = -1;
                //}
            }
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {

                this.body.velocity.x += 100;
                //this.animations.play('walk');

                //if (this.scale.x == -1) {
                //    this.scale.x = 1;
                //}
            }
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {

                this.body.velocity.y += -100;
                //this.animations.play('walk');

                //if (this.scale.x == -1) {
                //    this.scale.x = 1;
                //}
            }
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {

                this.body.velocity.y += 100;
                //this.animations.play('walk');

                //if (this.scale.x == -1) {
                //    this.scale.x = 1;
                //}
            }
            
            if (!this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)
                && !this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)
                && !this.game.input.keyboard.isDown(Phaser.Keyboard.UP)
                && !this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
                this.animations.frame = 0;
            }

        }

    }

}