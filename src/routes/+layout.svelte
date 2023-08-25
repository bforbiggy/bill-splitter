<script>
	import "../theme.scss";
</script>

<slot />

<style lang="scss">
	:global(body) {
		margin: 0px;
		padding: 0px;
	}

	:global(*) {
		text-align: center;
		align-items: center;
		align-content: center;
		vertical-align: middle;
		justify-content: center;
	}
</style>
