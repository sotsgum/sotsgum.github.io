<script lang="ts">
	import Dropdown from '$components/header/Dropdown.svelte';
	let button: HTMLElement;
	const handleClick = (event: MouseEvent) => {
		show = !show && button.contains(event.target as Node);
	};
	const handleKeyDown = (event: KeyboardEvent) => {
		show = show && event.key !== 'Escape';
	};
	export let show: boolean = false;
</script>

<svelte:window on:click={handleClick} on:keydown={handleKeyDown} />

<button bind:this={button} class="button">
	<svg
		class="svg"
		class:svg_active={show}
		viewBox="0 0 48 48"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect class="svg__rect svg__rect_1" width="48" height="8" rx="4" />
		<rect class="svg__rect svg__rect_2" y="20" width="48" height="8" rx="4" />
		<rect class="svg__rect svg__rect_3" y="40" width="48" height="8" rx="4" />
	</svg>
	<Dropdown {show} />
</button>

<style lang="scss">
	.button {
		display: flex;
		align-items: center;
		@include desktop {
			display: none;
		}
	}
	.svg {
		@include svg-rects((0px, 1deg, 0.95), (0px, -2deg, 0.95), (0px, 1.5deg, 0.95));
		width: min(2.5em, 10vw);
		transition: transform 0.1s ease-out;
		&__rect {
			@include var('fill', 'primary-0');
			transform-origin: center;
			transition: transform 0.1s ease-out;
		}
		&_active {
			@include svg-rects((20px, 45deg, 1), (0px, 45deg, 1), (-20px, -45deg, 1));
		}
		&:hover {
			transform: scale(1.075);
			&:not(.svg_active) {
				@include svg-rects((0px, 4deg, 0.95), (0px, -4deg, 0.95), (0px, 5deg, 0.95));
			}
			&:active {
				transform: scale(0.925);
				&:not(.svg_active) {
					@include svg-rects((0px, 2deg, 0.95), (0px, -2deg, 0.95), (0px, 2deg, 0.95));
				}
			}
		}
	}
</style>
