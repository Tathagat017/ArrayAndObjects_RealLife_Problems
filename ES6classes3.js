class Superhero {
  constructor(name, powers) {
    this.name = name;
    this.powers = powers;
  }
  displayPowers() {
    console.log(`${this.name} has ${this.powers.join(", ")}`);
  }
}

class Avenger extends Superhero {
  constructor(name, powers, role) {
    super(name, powers);
    this.role = role;
  }
  displayRole() {
    return `${this.name} is ${this.role}`;
  }
}

class SuperheroTeam {
  constructor(members) {
    this.members = members;
  }
  displayRoles() {
    return this.members.map((member) => {
      if (member instanceof Avenger) {
        return member.displayRole();
      }
    });
  }
}

const avengers = [
  new Avenger("Iron Man", ["flight", "laser beams"], "billionaire"),
  new Avenger("Captain America", ["super strength"], "leader"),
];

const team = new SuperheroTeam(avengers);
console.log(team.displayRoles().join(" and "));
