class Bill {
	constructor(people = [], items = [], tax = 0, tip = 0) {
		this.people = people;
		this.items = items;
		this.tax = tax;
		this.tip = tip;
	}

	addPerson(name) {
		if (!name)
			return;
		const person = new Person(name = name);
		this.people.push(person);
	}
}

export { Bill };