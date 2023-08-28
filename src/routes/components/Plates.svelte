<script>
	import Person from "$lib/Person.js";
	export let people;

	function addPerson() {
		const name = prompt("Enter new person's name:");
		if (!name) return;
		people.push(new Person(name));
		people = people;
	}
</script>

<div id="plates">
	{#each people as person, index}
		<button class="plate" id={`plate ${index}`}>
			{person.name.slice(0, 2)}
		</button>
	{/each}

	<button class="plate" id="ADD" on:click={addPerson}>+</button>
</div>

<style lang="scss">
	@use "../../theme.scss" as theme;

	#plates {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: flex-start;
		height: 90vh;
		max-height: 100vh;

		padding-top: 50px;
		padding-bottom: 50px;
	}

	.plate {
		$length: min(12vh, 12vw);
		min-width: $length;
		max-width: $length;
		min-height: $length;
		max-height: $length;
		border-radius: 50%;

		position: relative;
		margin: 30px;
		background-color: theme.$azure;
		font-size: 4em;
	}
</style>
