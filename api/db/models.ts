export class User {
    id: number;
    username: string;

    // You can include methods in your class
    greet() {
        console.log(`Hello, ${this.username}!`);
    }
}

export class Character {
    userId: number;
    name: string;
    lore: string;
    brawn: number;
    intel: number;
    swift: number;
    charm: number;
    // skills: Array<Skill>;
    // inventory: Array<Item>;
}

export class Skill {
    userId: number;
    name: string;
    info: string;
    // stat_impacts: Array<number>; experimental
}

export class Item {
    name: string;
    info: string;
    // stats: Array<number> experimental
}
