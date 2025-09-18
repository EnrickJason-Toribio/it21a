class Hero {
    #health;

    constructor(name, health, attack) {
        this.name = name;
        this.#health = health;
        this.attack = attack;

    }
    getHealth() {
        return this.#health;
    }
    getStats() {
        console.log("Name: " + this.name);
        console.log("Health: " + this.#health);
        console.log("Attack: " + this.attack);
    }
}

class Warrior extends Hero {
    useAbility() {
        console.log(`${this.name} uses Pawer Strayk`);
    }
}

class Mage extends Hero {
    constructor(name, health, attack, mana) {
        super(name, health, attack);
        this.mana = mana;
    }
    useAbility() {
        console.log(`${this.name} casts Payirbol`);
    }
}

const Thorin = new Warrior("Thorin", 100, 10);
// Thorin.useAbility();
Thorin.getStats();

const Gandalf = new Mage("Gandalf", 80, 8, 50);
// Gandalf.useAbility();
Gandalf.getStats();

function performAbility(hero) {
    console.log("\n");
    hero.useAbility();
}
performAbility(Thorin);
performAbility(Gandalf);