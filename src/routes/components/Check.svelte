<script>
	import notes from "$lib/notes.png";
</script>

<div class="wrapper">
	<div class="check">
		<div class="back"><img alt="" src={notes} /></div>
		<div class="text">
			<p>Domain Expansion</p>
		</div>
	</div>
</div>

<style lang="scss">
	.check {
		position: absolute;
		transform: translate(-50%, -50%);

		img {
			height: 70vh;
			width: auto;
			object-fit: contain;
		}

		.text {
			position: absolute;
			top: -5vh;
			left: 20%;

			p {
				font-size: 5vh;
				font-family: "RipeApricots", "Courier New", Courier, monospace;
			}
		}
	}
</style>
