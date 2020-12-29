function 敵生成 () {
    Enemy = game.createSprite(randint(0, 4), 0)
    basic.pause(500)
}
function Player移動 () {
    if (input.acceleration(Dimension.X) > 50) {
        Player.change(LedSpriteProperty.X, 1)
    }
    if (input.acceleration(Dimension.X) < -50) {
        Player.change(LedSpriteProperty.X, -1)
    }
}
function 初期化 () {
    敵生成()
    Player = game.createSprite(2, 4)
    game.setScore(0)
    game.setLife(3)
    basic.pause(500)
}
let Player: game.LedSprite = null
let Enemy: game.LedSprite = null
初期化()
basic.forever(function () {
    while (game.isRunning()) {
        Player移動()
        Enemy.change(LedSpriteProperty.Y, 1)
        basic.pause(200)
        if (Player.isTouching(Enemy)) {
            game.removeLife(1)
        }
        if (Enemy.get(LedSpriteProperty.Y) == 4) {
            Enemy.delete()
            game.addScore(1)
            敵生成()
        }
    }
})
