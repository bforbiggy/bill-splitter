<script>
	import Plates from "./components/Plates.svelte";
	import Check from "./components/TableCheck.svelte";
	import PersonCheck from "./components/PersonCheck.svelte";
	import Item from "$lib/Item.js";
	import Person from "$lib/Person.js";

	let people = [];
	let items = [];

	let selectedPerson = new Person("Nobody");
</script>

<div class="main">
	<Plates bind:people bind:selectedPerson />
	<PersonCheck bind:selectedPerson />
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

		background-color: theme.$ash;
		justify-content: space-evenly;
		vertical-align: top;
	}
</style>
