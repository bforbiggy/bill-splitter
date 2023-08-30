class Person {
	static Nobody = new Person("Nobody");

	constructor(name, items = []) {
		this.items = items;
		this.name = name.trim();
	}

	addItem(item) {
		if (this.items.includes(item))
			return;
		this.items.push(item);
	}

	getTotal() {
		let total = 0;
		for (let item of this.items)
			total += item.splitPrice();
		return total;
	}
}

export default Person;