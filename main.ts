function generateEnemy () {
    Enemy = game.createSprite(randint(0, 4), 0)
    basic.pause(500)
}
function initialize () {
    generateEnemy()
    Player = game.createSprite(2, 4)
    game.setScore(0)
    game.setLife(3)
    startTime = input.runningTime()
    basic.pause(500)
}
function getGameSpeed () {
    currentTime = input.runningTime()
    elapsedTime = currentTime - startTime
    gameSpeed = 500
    if (elapsedTime >= 10000 && elapsedTime < 20000) {
        gameSpeed = 200
    }
    if (elapsedTime >= 20000) {
        gameSpeed = 100
    }
    return gameSpeed
}
function movePlayer () {
    if (input.acceleration(Dimension.X) > 50) {
        Player.change(LedSpriteProperty.X, 1)
    }
    if (input.acceleration(Dimension.X) < -50) {
        Player.change(LedSpriteProperty.X, -1)
    }
}
let gameSpeed = 0
let elapsedTime = 0
let currentTime = 0
let startTime = 0
let Player: game.LedSprite = null
let Enemy: game.LedSprite = null
initialize()
basic.forever(function () {
    while (game.isRunning()) {
        movePlayer()
        Enemy.change(LedSpriteProperty.Y, 1)
        basic.pause(getGameSpeed())
        if (Player.isTouching(Enemy)) {
            game.removeLife(1)
        }
        if (Enemy.get(LedSpriteProperty.Y) == 4) {
            Enemy.delete()
            game.addScore(1)
            generateEnemy()
        }
    }
})
