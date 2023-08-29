<script>
	import "./Check.scss";

	export let selectedPerson;
</script>

<div class="check">
	<!-- Top row of bill -->
	<div class="header row">
		<div class="left" />
		<div class="right">
			<p>{selectedPerson.name}'s Bill</p>
		</div>
	</div>

	<!-- Bill's items -->
	{#each selectedPerson.items as item}
		<div class="row">
			<div class="left" />
			<div class="right">
				<p class="name">{item.name}</p>
				<p class="price">${item.price}</p>
			</div>
		</div>
	{/each}

	<!-- Empty rows if not enough items -->
	{#if selectedPerson.items.length < 13}
		{#each Array(13 - selectedPerson.items.length) as _}
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
