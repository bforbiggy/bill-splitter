<div class="plate">I AM A PLATE</div>

<style lang="scss">
	@use "../../theme.scss" as theme;

	.plate {
		$length: min(12vh, 12vw);
		min-width: $length;
		max-width: $length;
		min-height: $length;
		max-height: $length;
		border-radius: 50%;

		position: absolute;
		left: calc(0px - #{$length}/ 2);
		background-color: theme.$azure;
	}
</style>
