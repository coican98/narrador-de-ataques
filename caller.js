class Player{
    constructor(name,age,type){
        this.name = name;
        this.age = age;
        this.type = type;
    }

    attack(type){
        var attackType;
        switch(type){
            case "mago": attackType = "magia";
                break;
            case "guerreiro": attackType = "espada";
                break;
            case "monge": attackType = "artes marciais";
                break;
            case "ninja": attackType = "shuriken";
                break;
        }
        return attackType;
    }
}
var player = new Player();

player.name = prompt("Informe o nome do herói:");
player.age = prompt("Informe a idade do herói:");
var playerType = prompt("Informe o tipo do herói (mago, guerreiro, monge ou ninja):");
player.type = playerType;

var playerAttackType = player.attack(playerType);

alert(`O ${playerType} atacou usando ${playerAttackType}`)