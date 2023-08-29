<script>
	import Person from "$lib/Person.js";
	export let people;
	export let target;

	function addPerson() {
		const name = prompt("Enter new person's name:");
		if (!name) return;
		people.push(new Person(name));
		people = people;
	}

	function selectPerson(id) {
		target = people[id];
	}
</script>

<div id="plates">
	{#each people as person, index}
		<button class="plate" on:click={() => selectPerson(index)}>
			<p>{person.name}</p>
		</button>
	{/each}

	<button class="plate" id="ADD" on:click={addPerson}>
		<p>+</p>
	</button>
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
		position: relative;
		margin: 30px;

		$length: 12rem;
		min-width: $length;
		max-width: $length;
		min-height: $length;
		max-height: $length;
		border-radius: 50%;
		background-color: theme.$beige;

		p {
			position: absolute;
			left: 0;
			top: 25%;
			width: 100%;
			height: 100%;
			font-size: 2rem;

			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
	}
</style>
