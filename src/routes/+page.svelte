<script>
	import { Bill } from "$lib/bill.js";
	import Plate from "./components/plate.svelte";

	let bill = new Bill();
</script>

<div class="main">
	<div id="plates">
		<Plate />
	</div>
</div>

<style lang="scss">
	@use "../theme.scss" as theme;

	.main {
		display: flex;
		min-width: 100vw;
		min-height: 100vh;
		overflow: hidden;

		background-color: theme.$ash;

		#plates {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			height: 100vh;
			margin: 50px;
		}
	}
</style>
