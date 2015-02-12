module BulletHell {
    export class Preloader extends Phaser.State {
        preloadBar: Phaser.Sprite;

        preload() {
            // setup preload sprite
            this.preloadBar = this.add.sprite(200, 250, 'preloadBar');
            this.load.setPreloadSprite(this.preloadBar);

            // load game assets
            //this.load.image('titlepage', 'assets/titlepage.jpg');
            //this.load.image('logo', 'assets/logo.png');
            this.load.spritesheet('ship', 'assets/ship.png', 64, 50, 0);
            //this.load.image('level1', 'assets/level1.png');
        }

        create() {
            //var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            //tween.onComplete.add(this.startMainMenu, this);
            this.startMainMenu();
        }

        startMainMenu() {
            this.game.state.start('MainMenu', true, false);
        }
    }
} 