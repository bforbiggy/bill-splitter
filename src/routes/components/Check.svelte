<script>
</script>

<div class="check">
	<div class="bill">
		<div class="header row">
			<div class="left" />
			<div class="right" />
		</div>

		{#each Array(11) as obj}
			<div class="row">
				<div class="left" />
				<div class="right" />
			</div>
		{/each}

		<div class="header row">
			<div class="left" />
			<div class="right" />
		</div>
	</div>
</div>

<style lang="scss">
	.check {
		.row {
			display: flex;
			border-bottom: 2px cornflowerblue solid;

			.left {
				width: 5rem;
				height: 3rem;
				background-color: aliceblue;
				border-right: 2px red solid;
			}

			.right {
				width: 21rem;
				height: 3rem;
				background-color: aliceblue;
			}
		}

		.header {
			.left {
				width: 5rem;
				height: 3.5rem;
			}

			.right {
				width: 21rem;
				height: 3.5rem;
			}
		}

		/* img {
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
		} */
	}
</style>
