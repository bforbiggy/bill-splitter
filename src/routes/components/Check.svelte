<script>
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
	{#if items.length < 12}
		{#each Array(12 - items.length) as _}
			<div class="row">
				<div class="left" />
				<div class="right" />
			</div>
		{/each}
	{/if}

	<button class="row" on:click={addItem}>
		<div class="left" />
		<div class="right">
			<p>ADD ITEM</p>
		</div>
	</button>

	<!-- Bottom row of bill -->
	<div class="header row">
		<div class="left" />
		<div class="right" />
	</div>
</div>

<style lang="scss">
	.check {
		.row {
			display: flex;
			font-size: 2em;
			text-align: left;
			border-bottom: 2px cornflowerblue solid;

			.left {
				width: 5rem;
				height: 3rem;
				background-color: aliceblue;
				border-right: 2px red solid;
			}

			.right {
				width: 28rem;
				height: 3rem;
				background-color: aliceblue;
				display: flex;

				p {
					margin: 0;
					display: flex;
					align-content: center;
					justify-content: space-between;
					height: 100%;
				}

				.name {
					width: 100%;
				}
			}
		}

		// Custom sizes for header
		.header {
			.left {
				height: 3.5rem;
			}

			.right {
				height: 3.5rem;
			}
		}

		button {
			all: unset;
		}
	}
</style>
