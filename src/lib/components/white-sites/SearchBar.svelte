<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	function onSubmit() {
		dispatch('submit');
	}
	export let value: string | null = null;
</script>

<form class="form" action="/white-sites/search" role="search" on:submit={onSubmit}>
	<input bind:value class="form__search-box" type="seach" name="q" />
	<button class="form__search-button">
		<svg class="search-icon" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M2 56.5C8.69874 52.6549 11.2836 49.2313 13.5 45C15.7164 40.7687 20.0225 37.9367 27 34"
				stroke-width="8"
			/>
			<path
				d="M55.9924 21.4836C56.2735 33.6095 48.6852 38.4032 38.5676 38.9673C28.4499 39.5314 22.5479 32.7635 21.1427 21.4836C19.7374 10.2037 28.9441 4 38.5676 4C48.1911 4 55.7114 9.35775 55.9924 21.4836Z"
				stroke-width="8"
			/>
		</svg>
	</button>
</form>

<style lang="scss">
	.form {
		display: flex;
		width: 100%;
		&__search {
			&-box {
				flex: 1;
				min-width: 0;
				padding: min(0.4em, 2.5vw) min(0.8em, 5vw);
				@include var('color', 'primary-0');
				@include var('background-color', 'background-0');
				border: 2px solid;
				@include var('border-color', 'secondary-0');
				border-radius: min(0.5em, 4vw);
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;
				font-size: min(1.5em, 6.5vw);
				line-height: normal;
			}
			&-button {
				display: flex;
				align-items: center;
				padding: min(0.75em, 2.5vw) min(0.75em, 2.5vw);
				@include var('background-color', 'secondary-0');
				border: none;
				border-radius: min(0.5em, 4vw);
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				cursor: pointer;
				&:hover .search-icon {
					transform: scale(1.2);
				}
			}
		}
	}

	.search-icon {
		width: min(1.5em, 6vw);
		height: min(1.5em, 6vw);
		transition: transform 0.25s cubic-bezier(0.165, 0.84, 0.44, 1);
		& path {
			@include var('stroke', 'background-0');
		}
	}
</style>
