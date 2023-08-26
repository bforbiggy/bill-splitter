<script>
	import "../theme.scss";
</script>

<slot />

<style lang="scss">
	@font-face {
		font-family: "RipeApricots";
		font-style: normal;
		font-weight: 400;
		src: url("/RipeApricots.ttf");
	}

	:global(body) {
		margin: 0px;
		padding: 0px;
		overflow-y: hidden; /* Hide vertical scrollbar */
		overflow-x: hidden; /* Hide horizontal scrollbar */
	}

	:global(*) {
		text-align: center;
		align-items: center;
		align-content: center;
		vertical-align: middle;
		justify-content: center;
	}
</style>
