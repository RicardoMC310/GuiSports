<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { type PageData } from "$lib/types";

	const { data }: {data: PageData} = $props();
</script>

{#if data.user}
	<Button>{data.user.name}</Button>
{/if}