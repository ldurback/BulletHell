module BulletHell {

    export class Level1 extends Phaser.State {

        private background: Phaser.Sprite;
        private player: BulletHell.Ship;

        private aliveEnemies: collections.BSTree<BulletHell.Ship>;
        private deadEnemies: collections.BSTree<BulletHell.Ship>;

        private enemyCount: number = 0;

        preload(): void {
            this.aliveEnemies = new collections.BSTree<BulletHell.Ship>((ship1: Ship, ship2: Ship) =>
                { return collections.defaultCompare(ship1.ID, ship2.ID); });
            this.deadEnemies = new collections.BSTree<BulletHell.Ship>((ship1: Ship, ship2: Ship) =>
                { return collections.defaultCompare(ship1.ID, ship2.ID); });
        }

        create(): void {
            //this.background = this.add.sprite(0, 0, 'level1');

            this.player = new Ship(this.game, 400, 300);

            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            game.physics.arcade.enable(this.player);

            for (var i: number = 0; i < 100; i++) {
                this.createEnemy();
            }
        }

        update(): void {
            this.movePlayer();
        }

        private movePlayer(): void {
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                this.player.rotation += -this.player.rotationSpeed;
            }

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                this.player.rotation += this.player.rotationSpeed;
            }

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
                this.player.body.velocity.x += this.player.acceleration * Math.sin(this.player.rotation);
                this.player.body.velocity.y -= this.player.acceleration * Math.cos(this.player.rotation);
            }

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
                this.player.body.velocity.x -= this.player.acceleration * Math.sin(this.player.rotation);
                this.player.body.velocity.y += this.player.acceleration * Math.cos(this.player.rotation);
            }
        }

        private createEnemy(): void {
            var ENEMY_SPEED = 100;

            var enemy: Ship = new Ship(this.game, Math.random() * 800, Math.random() * 600);
            game.physics.enable(enemy);

            enemy.rotation = Math.random() * 2*Math.PI;
            enemy.body.velocity.x = ENEMY_SPEED * Math.sin(enemy.rotation);
            enemy.body.velocity.y = -ENEMY_SPEED * Math.cos(enemy.rotation);

            enemy.ID = this.enemyCount++;
            this.aliveEnemies.add(enemy);
        }
    }
} 