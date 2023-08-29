<script>
	import "./Check.scss";
	import Item from "$lib/Item.js";

	export let items;

	function addItem() {
		// Retrieve user input for item
		const name = prompt("Enter item name:");
		if (!name) return;
		const price = parseFloat(prompt("Enter item price:"));
		if (!price) return;

		// Create item and add
		const item = new Item(name, price);
		items.push(item);
		items = items;
	}
</script>

<div class="check">
	<!-- Top row of bill -->
	<div class="header row">
		<div class="left" />
		<div class="right">
			<p>Bill</p>
			<button class="row" on:click={addItem}>+</button>
		</div>
	</div>

	<!-- Bill's items -->
	{#each items as item}
		<div class="row">
			<div class="left" />
			<div class="right">
				<p class="name">{item.name}</p>
				<p class="price">${item.price}</p>
			</div>
		</div>
	{/each}

	<!-- Empty rows if not enough items -->
	{#if items.length < 13}
		{#each Array(13 - items.length) as _}
			<div class="row">
				<div class="left" />
				<div class="right" />
			</div>
		{/each}
	{/if}

	<!-- Bottom row of bill -->
	<div class="header row">
		<div class="left" />
		<div class="right" />
	</div>
</div>

<style lang="scss">
	button {
		position: absolute;
		right: 0px;
	}
</style>
