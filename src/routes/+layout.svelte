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
</svelte:head>

<Header />
<slot />
<h1>test</h1>
