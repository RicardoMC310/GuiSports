<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { SidebarProvider } from '$lib/components/ui/sidebar';
	import { ModeWatcher } from 'mode-watcher';
	import Sidebar from '$lib/components/sidebar.svelte';
	import Header from '$lib/components/header.svelte';
	let { children } = $props();
</script>

<ModeWatcher />
<SidebarProvider class="flex justify-start gap-1.5">
	<Sidebar />

	<main class="w-full">
		<Header />
		<section class="p-1">
			{@render children()}
		</section>
	</main>
</SidebarProvider>

<svelte:head>
	<title>GuiSports</title>
	<link rel="icon" href={favicon} />
</svelte:head>
