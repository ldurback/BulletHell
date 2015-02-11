module BulletHell {

    export class Level1 extends Phaser.State {

        background: Phaser.Sprite;
        player: BulletHell.Player;

        create() {

            this.background = this.add.sprite(0, 0, 'level1');

            this.player = new Player(this.game, 400, 300);

            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            game.physics.arcade.enable(this.player);
        }

    }

} 