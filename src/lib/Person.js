class Person {
	constructor(name, items = []) {
		this.items = items;
		this.name = name.trim();
	}
}

export default Person;