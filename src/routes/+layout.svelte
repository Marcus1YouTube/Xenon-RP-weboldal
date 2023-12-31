<script>
	import '../app.pcss';
	import { AppShell } from '@skeletonlabs/skeleton';

	let navElements = [
		{ url: '/', name: 'Főoldal', iconName: 'home', newTab: false },
		{ url: '/rolunk', name: 'Rólunk', iconName: 'about', newTab: false },
		{ url: '/', name: 'RP Fogalmak', iconName: 'rpdefinitions', newTab: false },
		{
			url: 'https://discord.com/channels/957551233407795210/967582583183523860',
			name: 'Szabályzat',
			iconName: 'rules',
			newTab: true
		},
		{ url: '/elerhetosegek', name: 'Elérhetőségek', iconName: 'contact', newTab: false }
	];
</script>

<AppShell>
	<svelte:fragment slot="header">
		<nav>
			<div class="m-3 flex flex-wrap justify-center gap-2 rounded-3xl bg-surface-300 py-2">
				<img src="/xenon_nobg.png" alt="XenonRP Logó" width="50">
				<!-- <a href="./" class="btn variant-filled">Példa</a> -->
				{#each navElements as item}
					<a href={item.url} target={item.newTab ? '_blank' : '_self'} class="variant-filled btn">
						{#if item.iconName}
							<img src={'/icons/' + item.iconName + '.svg'} alt={item.iconName + ' ikon'} />
						{/if}
						<span>{item.name}</span>
					</a>
				{/each}
			</div>
		</nav>
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="footer">
		<footer>
			<div class="grid justify-items-center place-content-center bg-surface-300 p-10 mt-3">
				<p>© 2023 XenonRP. Összes jog fenntartva.</p>
			</div>
		</footer>
	</svelte:fragment>
</AppShell>
