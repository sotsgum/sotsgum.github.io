<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import SearchBar from '$components/white-sites/SearchBar.svelte';

	$: query = decodeURIComponent($page.url.toString().split('?q=')[1]);
	$: value = query;

	onMount(() => {
		if (!query) {
			goto('/white-sites');
		}
		const script = document.createElement('script');
		script.src = 'https://cse.google.com/cse.js?cx=669d6d1c683b44a37';
		script.async = true;
		document.body.append(script);
		return () => {
			document.body.removeChild(script);
			document.querySelectorAll('#___gcse_0').forEach((el) => el.remove());
		};
	});

	function onSubmit() {
		goto(`/white-sites/search?q=${value}`).then(() => window.location.reload());
	}
</script>

<svelte:head>
	<title>{`${query && `${query} - `}Белые сайты`}</title>
</svelte:head>

<main class="main">
	<SearchBar {value} on:submit={onSubmit} />
	<gcse:searchresults-only />
	<div class="loader">
		<div class="loader__spinner" />
	</div>
</main>

<style lang="scss">
	.main {
		display: block;
		flex: 1;
		max-width: 64em;
		width: calc(100% - min(5em, 12vw));
		padding: 0 min(2.5em, 6vw);
		padding-bottom: 16vh;
	}
	.loader {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 2em;
		:global([id='___gcse_0']) + & {
			display: none;
		}
		&__spinner {
			border: min(0.5em, 5vw) solid;
			// @include var('border-color', background-100);
			border-color: transparent;
			border-top: min(0.5em, 5vw) solid;
			@include var('border-top-color', secondary-0);
			border-radius: 50%;
			width: min(8em, 30vw);
			height: min(8em, 30vw);
			animation: spin 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
			@keyframes spin {
				0% {
					transform: rotate(0deg);
				}
				100% {
					transform: rotate(360deg);
				}
			}
		}
	}
	:global {
		.gsc-control-cse {
			padding: 0 !important;
			background: none !important;
			border: none !important;
			font-family: inherit !important;
			& * {
				font-family: inherit !important;
			}
		}

		.gsc-result-info {
			padding: 0 !important;
		}

		.gsc-selected-option-container {
			box-shadow: none !important;
		}

		.gsc-orderby-label {
			font-size: min(1em, 5vw) !important;
		}

		.gsc-selected-option {
			font-size: min(1em, 5vw) !important;
		}

		.gsc-webResult.gsc-result {
			padding: min(1.25em, 5vw) min(0.5em, 2vw) !important;
			background: none !important;
			border: none !important;
			border-bottom: min(0.15em, 1vw) solid !important;
			@include var-important('border-bottom-color', primary-900);
		}
		.gsc-control-cse .gs-spelling,
		.gsc-control-cse .gs-result .gs-title,
		.gsc-control-cse .gs-result .gs-title {
			position: relative !important;
			padding: min(0.225em, 1.5vw) 0 !important;
			padding-right: min(1em, 4vw) !important;
			@include var-important('color', secondary-100);
			font-size: min(5.5vw, 1.2em) !important;
			text-indent: 0 !important;
		}

		a.gs-title {
			display: inline-block !important;
		}

		.gs-title b {
			font-size: 1em !important;
			@include var-important('color', secondary-100);
		}

		a.gs-title:hover {
			text-decoration: underline;
			text-decoration-thickness: min(0.1em, 0.5vw);
			text-underline-offset: min(0.15em, 2vw);
		}

		.gs-webResult .gs-visibleUrl {
			font-size: min(4vw, 1.05em) !important;
			@include var-important('color', primary-200);
		}

		.gsc-table-result * {
			font-size: min(4vw, 1.05em) !important;
			padding: min(0.2em, 2vw) 0 !important;
			@include var-important('color', primary-400);
		}

		.gs-per-result-labels {
			display: none;
		}

		.gsc-results .gsc-cursor-box {
			& .gsc-cursor-page {
				border-color: transparent !important;
				background-color: transparent !important;
				@include var-important('color', primary-400);
			}
			& .gsc-cursor-current-page {
				border-color: transparent !important;
				background-color: transparent !important;
				@include var-important('color', secondary-100);
			}
		}

		.gcsc-find-more-on-google {
			&-magnifier {
				@include var-important('fill', secondary-100);
			}
			&-text,
			&-query {
				@include var-important('color', secondary-100);
			}
		}
	}
</style>
