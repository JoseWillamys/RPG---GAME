// criando as variáveis 
let xp = 0;
let health = 100;
let gold = 200;
let currentWeaponIndex = 0;
let fighting;
let monsterHealth;

// array para o inventário, contém a arma inicial
let inventory = ["stick"];

// capturando elementos DOM
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xp-text");
const healthText = document.querySelector("#health-text");
const goldText = document.querySelector("#gold-text");
const monsterStats = document.querySelector("#monster-stats");
const monsterName = document.querySelector("#monster-name");
const monsterHealthText = document.querySelector("#monster-health");

//arrays para as armas, monstros e os locais
const weapons = [
    { name: "stick", power: 5 },
    { name: "dagger", power: 30 },
    { name: "claw hammer", power: 50 },
    { name: "sword", power: 100 }
];

const monsters = [
    { name: "slime", level: 2, health: 15 },
    { name: "fanged beast", level: 8, health: 60 },
    { name: "dragon", level: 20, health: 300 },
];

const locations = [
    {
        name: "town square",
        "button text": ["Go to store", "Go to cave", "Fight dragon"],
        "button functions": [goStore, goCave, fightDragon],
        text: 'You are in the town square. You see a sing that says "store".'
    },
    {
        name: "store",
        "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
        "button functions": [buyHealth, buyWeapon, goTown],
        text: "You enter the store."
    }
];

// atribuindo evento aos botões
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

/*Funções*/

// função para atualizar textos e eventos
function update(locations) {
    button1.innerText = locations["button text"][0];
    button2.innerText = locations["button text"][1];
    button3.innerText = locations["button text"][2];
    button1.onclick = locations["button functions"][0];
    button2.onclick = locations["button functions"][1];
    button3.onclick = locations["button functions"][2];
    text.innerText = locations.text;
}

function goTown() {
    update(locations[0]);
}

// fuções para a loja

// chama a função upadate
function goStore() {
    update(locations[1]);
}

function buyHealth() {
    if (gold >= 10) {
        health += 10;
        gold -= 10;
        healthText.innerText = health;
        goldText.innerText = gold;
    } else {
        text.innerText = "You do not have enough gold to buy health.";
    }
}

function buyWeapon() {
    if (inventory.length < weapons.length ) {
        if (gold >= 30) {
            currentWeaponIndex++
            gold -= 30;
            inventory.push(weapons[currentWeaponIndex].name);
            goldText.innerText = gold;
            text.innerText = `You bought a ${weapons[currentWeaponIndex].name}.`;
            text.innerText += `Items in your inventory: ${inventory}`;
        } else {
            text.innerText = "You don't have enough gold."
        }
    } else {
        text.innerText = "You already have the strongest weapon.";
        button2.innerText = "Sell weapon for 15 gold";
        button2.onclick = sellWeapon;
    }
}

function sellWeapon () {
    if (inventory.length > 1) {
        gold += 15;
        let weapon = inventory.shift();
        goldText.innerText = gold;
        text.innerText = `You sold ${weapon}`;
    } else {
        text.innerText = "You can't sell your only weapon.";
    }
}

// funções para a caverna 
function goCave() {
    // update(locations[2]);
}

function fightDragon() {

}