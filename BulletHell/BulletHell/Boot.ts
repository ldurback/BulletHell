module BulletHell {
    export class Boot extends Phaser.State {
        preload() {
            this.load.image('preloadBar', 'assets/loader.png');
        }

        create() {
            // no multitouch
            this.input.maxPointers = 1;

            // pause when browser loses focus
            this.stage.disableVisibilityChange = true;

            if (this.game.device.desktop) {

            }
            else {
                // mobile settings go here

            }

            this.game.state.start('Preloader', true, false);
        }
    }
}