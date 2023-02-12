<script lang="ts">
	import Navbar from '$components/header/Navbar.svelte';
	import Button from '$components/header/Button.svelte';
	let show: boolean = false;
</script>

<header class="header">
	<a class="logo" href="/">
		<div class="icon">
			<img class="icon__thumb" src="logo_thumb.png" alt="сотсгум))" />
			<img class="icon__face" src="logo_face.png" alt="сотсгум))" />
		</div>
		<span class="logo__span">сотсгум))</span>
	</a>
	<Navbar />
	<Button bind:show />
</header>

<style lang="scss">
	.header {
		position: relative;
		display: flex;
		column-gap: 2em;
		padding: min(2.5em, 7.25vw);
		justify-content: space-between;
		align-items: center;
	}
	.logo {
		display: flex;
		align-items: center;
		column-gap: 1em;
		&__span {
			display: none;
			font-size: min(2.5em, 12.5vw);
			font-weight: bold;
			transition: transform 0.1s ease-out;
			@include desktop {
				display: block;
			}
		}
		&:hover &__span {
			transform: rotate(2deg) scale(1.01) translate(0.2em);
		}
		&:hover:active &__span {
			transform: rotate(0deg) scale(0.95) translate(0em);
		}
	}
	.icon {
		position: relative;
		& img {
			height: min(5em, 20vw);
		}
		&__thumb {
			position: absolute;
			transform: translateY(0.2em);
			transform-origin: 24.6% 45.7%;
			transition: transform 0.2s cubic-bezier(0.29, 1.54, 0.83, 1.06);
			z-index: 1;
			.logo:hover & {
				transform: translateY(-0.5em) rotate(-30deg) scale(1.15);
			}
			.logo:hover:active & {
				transform: translateY(-0.2em) rotate(-10deg) scale(1.1);
			}
		}
		&__face {
			transition: transform 0.25s cubic-bezier(0.32, 1.39, 0.83, 1.06);
			.logo:hover & {
				transform: translateY(-0.25em) rotate(-5deg) scale(1.075);
			}
			.logo:hover:active & {
				transform: translateY(0em) rotate(0deg) scale(1.025);
			}
		}
	}
</style>
