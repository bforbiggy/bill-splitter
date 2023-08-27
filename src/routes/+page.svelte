<script>
	import Plates from "./components/Plates.svelte";
	import Check from "./components/Check.svelte";

	let people = [];
	let items = [];
</script>

<div class="main">
	<Plates {people} />
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
