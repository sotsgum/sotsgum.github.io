<script>
	import '$styles/app.scss';
	import Header from '$components/header/Header.svelte';
</script>

<svelte:head>
	<link
		rel="stylesheet"
		type="text/css"
		href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
	/>
	<meta property="og:locale" content="ru_RU" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="сотсгум))" />
</svelte:head>

<Header />
<slot />
