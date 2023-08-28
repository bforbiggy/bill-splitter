<script>
	import Plates from "./components/Plates.svelte";
	import Check from "./components/Check.svelte";
	import Item from "$lib/Item.js";

	let people = [];
	let items = [];
	let tax = 0.0;
	let tip = 0.0;
</script>

<div class="main">
	<Plates {people} />
	<Check bind:items />
</div>

<style lang="scss">
	@use "../theme.scss" as theme;

	.main {
		display: flex;
		min-width: 100vw;
		min-height: 100vh;
		overflow: hidden;

		background-color: theme.$ash;
		justify-content: space-around;
		vertical-align: top;
	}
</style>
