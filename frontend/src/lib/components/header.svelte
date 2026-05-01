<script lang="ts">
	import { Button } from './ui/button';
	import { SidebarTrigger } from './ui/sidebar';
	import Bell from '@lucide/svelte/icons/bell';
	import Moon from '@lucide/svelte/icons/moon';
	import Search from '@lucide/svelte/icons/search';
	import Sun from '@lucide/svelte/icons/sun';
	import { Input } from './ui/input';

	import { mode, setMode } from 'mode-watcher';

	function toggleTheme() {
		setMode(mode.current == 'dark' ? 'light' : 'dark');
	}
</script>

<header class="sticky top-0 z-50 border-b bg-background">
	<div class="flex h-16 items-center justify-between px-6">
		<!-- esquerda -->
		<div class="flex items-center gap-4">
			<SidebarTrigger />

			<div>
				<h1 class="text-lg font-semibold">GuiSports</h1>
				<p class="text-sm text-muted-foreground">Compre sem se arrepender!</p>
			</div>
		</div>

		<!-- direita -->
		<div class="flex items-center gap-3">
			<div class="relative hidden md:block">
				<form class="relative">
					<Button
						type="submit"
						variant="ghost"
						size="icon"
						class="absolute top-0 left-1 z-10"
					>
						<Search class="size-4 text-muted-foreground" />
					</Button>

					<Input class="w-72 pl-10" placeholder="Pesquisar..." />
				</form>
			</div>

			<Button variant="ghost" size="icon">
				<Bell />
			</Button>

			<Button variant="ghost" size="icon" onclick={toggleTheme}>
				{#if mode.current === 'dark'}
					<Sun class="size-5" />
				{:else}
					<Moon class="size-5" />
				{/if}
			</Button>
		</div>
	</div>
</header>
