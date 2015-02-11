/// <reference path="lib/phaser.d.ts" />
module BulletHell {
    export class Game extends Phaser.Game {

        constructor() {
            super(800, 600, Phaser.AUTO, 'content', null);

            this.state.add('Boot', Boot, false);
            this.state.add('Preloader', Preloader, false);
            this.state.add('MainMenu', MainMenu, false);
            this.state.add('Level1', Level1, false);

            this.state.start('Boot');
        }
    }

    export var game: Phaser.Game;
}

window.onload = () => {

    BulletHell.game = new BulletHell.Game();

};