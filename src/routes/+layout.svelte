<script>
	import '$styles/app.scss';
	import Header from '$components/header/Header.svelte';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Comic+Neue&display=swap" rel="stylesheet" />
	<link
		rel="stylesheet"
		type="text/css"
		href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
	/>
</svelte:head>

<Header />
<slot />
