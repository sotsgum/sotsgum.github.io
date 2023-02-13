<script lang="ts">
	import { headerLinks } from '$lib/data';
	import { pathname } from '$lib/stores';
	export let show: boolean = false;
</script>

<nav class="dropdown" aria-expanded={show}>
	{#each Object.entries(headerLinks) as [href, name]}
		<a class="dropdown__link" {href} aria-current={$pathname === href ? 'page' : null}>
			<span>{name}</span>
		</a>
	{/each}
</nav>

<style lang="scss">
	.dropdown {
		position: absolute;
		left: min(1em, 5vw);
		top: 90%;
		width: calc(100% - min(2em, 10vw));
		@include var('background-color', 'background-100');
		border-radius: min(0.5em, 2.5vw);
		opacity: 0%;
		visibility: hidden;
		overflow: hidden;
		transition: all 0.1s ease-out;
		&__link {
			display: block;
			padding: min(0.75em, 4vw);
			font-size: min(1.5em, 7vw);
			text-align: left;
			transition: background-color 0.1s ease-out;
			& span {
				display: block;
				transform: translateY(min(-0.75em, -3.75vw));
				transition: transform 0.1s ease-out;
			}
			&[aria-current='page'] {
				font-weight: bold;
			}
			&:hover {
				@include var('background-color', 'background-200');
				& span {
					transform: translateY(min(-0.1em, -0.5vw));
				}
			}
		}
		&[aria-expanded='true'] {
			top: 100%;
			opacity: 95%;
			visibility: visible;
			& span {
				transform: translateY(0);
			}
		}
	}
</style>
