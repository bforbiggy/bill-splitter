class Person {
	static Nobody = new Person("Nobody");

	constructor(name, items = []) {
		this.items = items;
		this.name = name.trim();
	}
}

export default Person;