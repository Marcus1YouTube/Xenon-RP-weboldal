<script>
	import '../app.pcss';
	import { AppShell } from '@skeletonlabs/skeleton';

	let navElements = [
		{ url: '/', name: 'Főoldal', iconName: '', newTab: false },
		{ url: '/', name: 'Rólunk', iconName: '', newTab: false },
		{ url: '/', name: 'RP Fogalmak', iconName: '', newTab: false },
		{
			url: 'https://discord.com/channels/957551233407795210/967582583183523860',
			name: 'Szabályzat',
			iconName: '',
			newTab: true
		},
		{ url: '/', name: 'Elérhetőségek', iconName: '', newTab: false }
	];
</script>

<AppShell>
	<svelte:fragment slot="header">
		<div class="m-3 flex flex-wrap justify-center gap-2 rounded-3xl bg-surface-300 py-2">
			<!-- <a href="./" class="btn variant-filled">Példa</a> -->
			{#each navElements as item}
				<a href={item.url} target={item.newTab ? '_blank' : '_self'} class="variant-filled btn">
					{#if item.iconName}
					<img src={"/icons/" + item.iconName + ".svg"} alt={item.iconName + " ikon"}/>
					{/if}
					<span>{item.name}</span>
				</a>
			{/each}
		</div>
	</svelte:fragment>

	<slot />
</AppShell>
