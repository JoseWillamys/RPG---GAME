// criando as variáveis 
let xp = 0;
let health = 100;
let gold = 50;
let currentWeaponIndex = 0;
let fighting;
let monsterHealth;

// array para o inventário, contém a arma inicial
let inventory = ["stick"];

// capturando elementos DOM
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("text");
const xpText = document.querySelector("#xp-text");
const healthText = document.querySelector("#health-text");
const goldText = document.querySelector("#gold-text");
const monsterStats = document.querySelector("#monster-stats");
const monsterName = document.querySelector("#monster-name");
const monsterHealthText = document.querySelector("#monster-health");
