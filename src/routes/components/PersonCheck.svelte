<script>
	import "./Check.scss";
	import Person from "$lib/Person.js";

	function drop(event) {
		event.preventDefault();
		if (target === Person.Nobody) return;

		const data = event.dataTransfer.getData("text/plain");
		const item = items[parseInt(data)];

		if (!target.items.includes(item)) {
			target.items.push(item);
			item.people.push(target);
		}
		target = target;
	}

	export let target;
	export let items;
</script>

<div
	class="check"
	on:dragenter={() => {}}
	on:dragleave={() => {}}
	on:drop={drop}
	ondragover="return false"
	role="group"
>
	<!-- Top row of bill -->
	<div class="header row">
		<div class="left" />
		<div class="right">
			<p>{target.name}'s Bill</p>
		</div>
	</div>

	<!-- Bill's items -->
	{#each target.items as item}
		<div class="row">
			<div class="left" />
			<div class="right">
				<p class="name">{item.name}</p>
				<p class="price">${item.price}</p>
			</div>
		</div>
	{/each}

	<!-- Empty rows if not enough items -->
	{#if target.items.length < 13}
		{#each Array(13 - target.items.length) as _}
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
