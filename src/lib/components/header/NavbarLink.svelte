<script lang="ts">
	import { pathname } from '$lib/stores';
	export let headerLink: [string, string | string[]];
	let [name, href] = headerLink;
</script>

{#if typeof href === 'string'}
	<a class="link" {href} aria-current={href === $pathname ? 'page' : null}>
		<span class="link__span">{name}</span>
	</a>
{:else}
	<a class="link" href={href[0]} aria-current={href.includes($pathname) ? 'page' : null}>
		<span class="link__span">{name}</span>
	</a>
{/if}

<style lang="scss">
	.link {
		display: block;
		font-size: 1.5em;
		&[aria-current='page'] &__span:after {
			width: 100%;
			height: 0.15em;
		}
		&__span {
			position: relative;
			display: block;
			transition: transform 0.1s ease-out;
			&::after {
				content: '';
				position: absolute;
				left: 0em;
				bottom: -0.35em;
				width: 0em;
				height: 0.25em;
				@include var('background-color', 'secondary-0');
				border-radius: 0.25em;
				transition: all 0.1s ease-out;
				z-index: -1;
			}
		}
		&:hover {
			.link__span::after {
				width: 100%;
				height: 0.15em;
			}
			&:active {
				.link__span::after {
					height: 0.225em;
				}
			}
		}
		&:nth-of-type(n):hover {
			.link__span {
				transform: rotate(-0.75deg) scale(1.025) translateY(-0.1em);
			}
			&:active {
				.link__span {
					transform: rotate(0.25deg) scale(0.975) translateY(0em);
				}
			}
		}
		&:nth-of-type(2n):hover {
			.link__span {
				transform: rotate(0.75deg) scale(1.025) translateY(-0.1em);
				&::after {
					left: inherit;
					right: 0em;
				}
			}
			&:active {
				.link__span {
					transform: rotate(-0.25deg) scale(0.975) translateY(0em);
				}
			}
		}
	}
</style>
