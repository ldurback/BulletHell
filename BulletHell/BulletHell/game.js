var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BulletHell;
(function (BulletHell) {
    var Boot = (function (_super) {
        __extends(Boot, _super);
        function Boot() {
            _super.apply(this, arguments);
        }
        Boot.prototype.preload = function () {
            this.load.image('preloadBar', 'assets/loader.png');
        };
        Boot.prototype.create = function () {
            // no multitouch
            this.input.maxPointers = 1;
            // pause when browser loses focus
            this.stage.disableVisibilityChange = true;
            if (this.game.device.desktop) {
            }
            else {
            }
            this.game.state.start('Preloader', true, false);
        };
        return Boot;
    })(Phaser.State);
    BulletHell.Boot = Boot;
})(BulletHell || (BulletHell = {}));
/// <reference path="lib/phaser.d.ts" />
var BulletHell;
(function (BulletHell) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            _super.call(this, 800, 600, Phaser.AUTO, 'content', null);
            this.state.add('Boot', BulletHell.Boot, false);
            this.state.add('Preloader', BulletHell.Preloader, false);
            this.state.add('MainMenu', BulletHell.MainMenu, false);
            this.state.add('Level1', BulletHell.Level1, false);
            this.state.start('Boot');
        }
        return Game;
    })(Phaser.Game);
    BulletHell.Game = Game;
    BulletHell.game;
})(BulletHell || (BulletHell = {}));
window.onload = function () {
    BulletHell.game = new BulletHell.Game();
};
var BulletHell;
(function (BulletHell) {
    var Level1 = (function (_super) {
        __extends(Level1, _super);
        function Level1() {
            _super.apply(this, arguments);
        }
        Level1.prototype.create = function () {
            this.background = this.add.sprite(0, 0, 'level1');
            this.player = new BulletHell.Player(this.game, 400, 300);
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            BulletHell.game.physics.arcade.enable(this.player);
        };
        return Level1;
    })(Phaser.State);
    BulletHell.Level1 = Level1;
})(BulletHell || (BulletHell = {}));
var BulletHell;
(function (BulletHell) {
    var MainMenu = (function (_super) {
        __extends(MainMenu, _super);
        function MainMenu() {
            _super.apply(this, arguments);
        }
        MainMenu.prototype.create = function () {
            this.background = this.add.sprite(0, 0, 'titlepage');
            this.background.alpha = 0;
            this.logo = this.add.sprite(this.world.centerX, -300, 'logo');
            this.logo.anchor.setTo(0.5, 0.5);
            this.add.tween(this.background).to({ alpha: 1 }, 2000, Phaser.Easing.Bounce.InOut, true);
            this.add.tween(this.logo).to({ y: 220 }, 2000, Phaser.Easing.Elastic.Out, true, 2000);
            this.input.onDown.addOnce(this.fadeOut, this);
        };
        MainMenu.prototype.fadeOut = function () {
            this.add.tween(this.background).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
            var tween = this.add.tween(this.logo).to({ y: 800 }, 2000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startGame, this);
        };
        MainMenu.prototype.startGame = function () {
            this.game.state.start('Level1', true, false);
        };
        return MainMenu;
    })(Phaser.State);
    BulletHell.MainMenu = MainMenu;
})(BulletHell || (BulletHell = {}));
var BulletHell;
(function (BulletHell) {
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player(game, x, y) {
            _super.call(this, game, x, y, 'ship', 0);
            this.anchor.setTo(0.5, 0.5);
            //this.animations.add('walk', [0, 1, 2, 3, 4], 10, true);
            game.add.existing(this);
        }
        Player.prototype.update = function () {
            this.body.velocity.x = 0;
            this.body.velocity.y = 0;
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                this.body.velocity.x += -100;
            }
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                this.body.velocity.x += 100;
            }
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
                this.body.velocity.y += -100;
            }
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
                this.body.velocity.y += 100;
            }
            if (!this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT) && !this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) && !this.game.input.keyboard.isDown(Phaser.Keyboard.UP) && !this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
                this.animations.frame = 0;
            }
        };
        return Player;
    })(Phaser.Sprite);
    BulletHell.Player = Player;
})(BulletHell || (BulletHell = {}));
var BulletHell;
(function (BulletHell) {
    var Preloader = (function (_super) {
        __extends(Preloader, _super);
        function Preloader() {
            _super.apply(this, arguments);
        }
        Preloader.prototype.preload = function () {
            // setup preload sprite
            this.preloadBar = this.add.sprite(200, 250, 'preloadBar');
            this.load.setPreloadSprite(this.preloadBar);
            // load game assets
            this.load.image('titlepage', 'assets/titlepage.jpg');
            this.load.image('logo', 'assets/logo.png');
            this.load.spritesheet('simon', 'assets/simon.png', 58, 96, 5);
            this.load.image('level1', 'assets/level1.png');
        };
        Preloader.prototype.create = function () {
            var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startMainMenu, this);
        };
        Preloader.prototype.startMainMenu = function () {
            this.game.state.start('MainMenu', true, false);
        };
        return Preloader;
    })(Phaser.State);
    BulletHell.Preloader = Preloader;
})(BulletHell || (BulletHell = {}));
//# sourceMappingURL=game.js.map