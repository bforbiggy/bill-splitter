<script>
	import Plates from "./components/Plates.svelte";
	import Check from "./components/TableCheck.svelte";
	import PersonCheck from "./components/PersonCheck.svelte";
	import Person from "$lib/Person.js";
	import Item from "$lib/Item.js";

	let people = [new Person("kevin"), new Person("biggy")];
	let items = [new Item("Ajisen Ramen", 5.0), new Item("Coke", 1.0)];

	let target = Person.Nobody;
</script>

<div class="main">
	<Plates bind:people bind:target />
	<PersonCheck bind:target bind:items />
	<Check bind:items />
</div>

<style lang="scss">
	@use "../theme.scss" as theme;

	.main {
		display: flex;
		min-width: 100vw;
		max-width: 100vw;
		min-height: 100vh;
		max-height: 100vh;
		overflow: hidden;

		background-color: theme.$ecru;
		justify-content: space-evenly;
		vertical-align: top;
	}
</style>
