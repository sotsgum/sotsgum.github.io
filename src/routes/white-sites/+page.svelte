<script lang="ts">
	import SearchBar from '$components/white-sites/SearchBar.svelte';
	import { fade } from 'svelte/transition';
</script>

<svelte:head>
	<title>Белые сайты</title>
	<meta property="og:title" content="Белые сайты" />
	<meta
		property="og:description"
		content="Поиск по доверенным источникам, рекомендуемым настоящим профессионалом в сфере русского языка и литературы."
	/>
	<meta property="og:image" content="http://sotsgum.ru/banner.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="627" />
	<meta property="og:url" content="http://sotsgum.ru/white-sites" />
</svelte:head>

<main in:fade={{ duration: 100 }} class="main">
	<h1 class="heading">
		Поиск по <span class="heading__white">белым</span> сайтам
	</h1>
	<p class="description">
		Поиск по доверенным источникам, рекомендуемым настоящим профессионалом в сфере русского языка и
		литературы.
	</p>
	<SearchBar />
</main>

<style lang="scss">
	.main {
		display: flex;
		flex: 1;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		align-self: center;
		max-width: 64em;
		width: calc(100% - min(5em, 12vw));
		padding: 0 min(2.5em, 6vw);
		padding-bottom: 16vh;
	}

	.heading {
		margin: 0;
		margin-bottom: min(0.2em, 2vw);
		font-size: min(4em, 12vw);
		text-align: center;
		&__white {
			display: inline-block;
			padding: min(0.1em, 2vw) min(0.25em, 4vw);
			@include var('color', background-0);
			@include var('background-color', primary-0);
			border-radius: min(0.25em, 4vw);
		}
		@include mobile {
			margin-bottom: min(0.6em, 6vw);
		}
	}

	.description {
		margin: 0;
		margin-bottom: min(1.2em, 10vw);
		@include var('color', 'primary-300');
		font-size: min(1.7em, 5.5vw);
		text-align: center;
		@include mobile {
			order: 1;
			margin-bottom: 0;
			margin-top: min(1.2em, 10vw);
		}
	}
</style>
