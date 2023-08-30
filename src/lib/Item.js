class Item {
	constructor(name, price = 0, people = []) {
		this.name = name;
		this.price = price;
		this.people = people;
	}

	addPerson(person) {
		if (this.people.includes(person))
			return;
		this.people.push(person);
	}

	splitPrice() {
		return this.price / this.people.length;
	}
}

export default Item;