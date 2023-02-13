<script lang="ts">
	import { headerLinks } from '$lib/data';
	import NavbarLink from '$components/header/NavbarLink.svelte';
</script>

<nav class="navbar">
	{#each Object.entries(headerLinks) as headerLink}
		<NavbarLink {headerLink} />
	{/each}
</nav>

<style lang="scss">
	.navbar {
		display: none;
		flex-wrap: wrap;
		justify-content: flex-end;
		align-items: center;
		column-gap: max(2em, 3vw);
		row-gap: 1em;
		@include desktop {
			display: flex;
		}
	}
</style>
