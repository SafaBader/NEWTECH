/******************************************************************
Wizard Duel Game
- Object-Oriented Design (OOP)
- Wizards fight until one is defeated or both run out of mana
- Health and mana are private and controlled by the wizard
******************************************************************/
class Wizards {
    // Private fields – cannot be accessed directly from outside
    #health;
    #mana;
    // Constructor initializes wizard and validates input
    constructor(name, startingHealth, startingMana) {
        // Validate name
        if (!name) {
            throw new Error("Invalid name, you must enter name");
        }
        // Health and mana must be integers
        if (!Number.isInteger(startingHealth) || !Number.isInteger(startingMana)) {
            throw new Error("You must enter an integer number");
        }
        // Health must be positive
        if (startingHealth <= 0) {
            throw new Error("Health must be greater than zero");
        }
        // Mana can be zero but not negative
        if (startingMana < 0) {
            throw new Error("Mana must be zero or greter than zero");

        }
        this.name = name;
        this.maxHealth = startingHealth;
        this.maxMana = startingMana;
        this.#health = startingHealth;
        this.#mana = startingMana;
    }

    // Returns true if the wizard is still alive
    isAlive() {
        return this.#health > 0;
    }
    // Returns a safe snapshot of the wizard's current state
    getStatus() {
        return { name: this.name, health: this.#health, mana: this.#mana };
    }
    //Applies damage to the wizard, health never goes below zero
    receiveDamage(amount) {
        if (!Number.isInteger(amount) || amount <= 0) {
            return;
        }

        this.#health = this.#health - amount;

        if (this.#health < 0) {
            this.#health = 0;
        }
        return this.#health;
    }
    // Tries to spend mana, returns true on success
    spendMana(cost) {
        if (!Number.isInteger(cost) || cost <= 0) {
            return false;
        }
        if (this.#mana < cost) {
            return false;
        }
        this.#mana -= cost;
        return true;
    }

    castSpell(opponent) {
        console.log(`${this.name} casts generic spell without any effect`);
    }
    canCast() {
        return this.#mana >= this.getManaCost();
    }

    getManaCost() {
        return Infinity;
    }

}

class FireWizard extends Wizards {
    getManaCost() {
        return 6;
    }
    //Override castSpell method 
    castSpell(opponent) {

        // Cannot act if defeated
        if (!this.isAlive()) {
            console.log(` 🔥 ${this.name} is defeated ,cannot act `);
            return;
        }
        const manaCost = this.getManaCost();
        const damage = 8;

        // Check mana quantity
        if (!this.spendMana(manaCost)) {
            console.log(`🔥 ${this.name} tried to cast, but there is not enough mana!`);
            return;
        }

        // Apply damage to opponent
        opponent.receiveDamage(damage);
        console.log(`🔥 ${this.name} casts ${opponent.name} for ${damage} damage!`);
    }
}
class IceWizard extends Wizards {

    getManaCost() {
        return 5;
    }
    //Override castSpell method 
    castSpell(opponent) {

        // Cannot act if defeated
        if (!this.isAlive()) {
            console.log(` ❄️${this.name} is defeated ,cannot act `);
            return;
        }

        const manaCost = this.getManaCost();
        const damage = 5;

        // Check mana quantity
        if (!this.spendMana(manaCost)) {
            console.log(`❄️${this.name} tried to cast, but there is no enough mana!`);
            return;
        }
        let total = damage;
        // Apply damage to opponent
        opponent.receiveDamage(damage);

        // Unique ice effect: extra damage if opponent has low mana
        const status = opponent.getStatus();
        if (status.mana < 4) {
            const extraDamage = 4;
            opponent.receiveDamage(extraDamage);
            total += extraDamage;
            console.log(
                `❄️ The ice senses weakness and strikes deeper for ${extraDamage} extra damage!`);
        }

        console.log(`❄️ ${this.name} casts ${opponent.name} for ${damage} damage!`);
    }

}


/* ===============================================================
DUEL ENGINE
Controls the flow of the duel without knowing spell details
=============================================================== */
class Duel {
    constructor(wizardA, wizardB) {
        this.wizardA = wizardA;
        this.wizardB = wizardB;
        this.roundNumber = 1;
    }

    // Prints the current status of both wizards
    printRoundStatus() {
        const wizard_A = this.wizardA.getStatus();
        const wizard_B = this.wizardB.getStatus();

        console.log(`Status: 🔥 ${wizard_A.name} (Health ${wizard_A.health}, Mana ${wizard_A.mana}) | ❄️ ${wizard_B.name} (Health ${wizard_B.health}, Mana ${wizard_B.mana})`);
    }

    // Runs the duel until a winner or a draw is reached
    run() {
        console.log("Duel begins!");
        this.printRoundStatus();
        //let flag = false;
        while (this.wizardA.isAlive() && this.wizardB.isAlive()) {
            console.log("Round " + this.roundNumber);


            // Check for draw: both wizards are out of mana
            if (!this.wizardA.canCast() && !this.wizardB.canCast()) {
                console.log("Neither wizard can cast anymore. The duel ends in a draw!");
                return;
            }

            // Wizard A attacks Wizard B
            this.wizardA.castSpell(this.wizardB);
            if (!this.wizardB.isAlive()) {
                break;
            }
            // Wizard B attacks Wizard A
            this.wizardB.castSpell(this.wizardA);
            // Print round results
            this.printRoundStatus();
            this.roundNumber++;
        }
        // Determine and announce winner
        const winner = this.wizardA.isAlive() ? this.wizardA : this.wizardB;
        console.log(`The Winner: ${winner.name}`);
        return winner;
    }
}
/* ===============================================================
MAIN FUNCTION
Creates wizards and starts the duel
=============================================================== */
function main() {

    // const wizard1 = new FireWizard("Flame", 70, 36);
    // const wizard2 = new IceWizard("Ice", 30, 25);
    // const wizard1 = new FireWizard("Flame", 40, 10);
    // const wizard2 = new IceWizard("Ice", 30, 20);
    const wizard1 = new FireWizard("Flame", 40, 19);
    const wizard2 = new IceWizard("Ice", 30, 16);
    const duel = new Duel(wizard1, wizard2);
    duel.run();
}
/* ===============================================================
Run Main
=============================================================== */
main();