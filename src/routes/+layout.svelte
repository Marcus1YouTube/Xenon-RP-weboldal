<script>
	import '../app.pcss';
	import { AppShell, Drawer } from '@skeletonlabs/skeleton';
	import { initializeStores, getDrawerStore } from '@skeletonlabs/skeleton';

	let navElements = [
		{ url: '/', name: 'Főoldal', iconName: 'home', newTab: false },
		{ url: '/rolunk', name: 'Rólunk', iconName: 'about', newTab: false },
		{ url: '/fogalmak', name: 'RP Fogalmak', iconName: 'rpdefinitions', newTab: false },
		{
			url: 'https://discord.com/channels/957551233407795210/967582583183523860',
			name: 'Szabályzat',
			iconName: 'rules',
			newTab: true
		},
		{ url: '/elerhetosegek', name: 'Elérhetőségek', iconName: 'contact', newTab: false }
	];

	initializeStores();

	let drawerStore = getDrawerStore();
</script>

<Drawer>
	{#if ($drawerStore.id = 'autocomplete')}
		<div class="m-2 flex flex-col gap-2 text-xl">
			<section>
				<h1 class="h1">{$drawerStore.meta.label} fogalma</h1>
				<i>*Angolul: <b>{$drawerStore.meta.meta.english}</b></i>
			</section>
			<hr class="!border-t-8" />
			<section>
				<h2 class="h2">Leírás</h2>
				<p>{$drawerStore.meta.value}</p>
			</section>
			{#if $drawerStore.meta.meta.example != ''}
				<hr class="!border-t-8" />
				<section>
					<h2 class="h2">Példa</h2>
					<p>{$drawerStore.meta.meta.example}</p>
				</section>
			{/if}
		</div>
	{:else}
		<h1>Nem tudom hogy hogyan követted el ezt a hibát, de nagyon balul sült el valami...</h1>
	{/if}
</Drawer>

<AppShell>
	<svelte:fragment slot="header">
		<nav>
			<div class="m-3 flex flex-wrap justify-center gap-2 rounded-3xl bg-surface-300 py-2">
				<img src="/xenon_nobg.png" alt="XenonRP Logó" width="50" />
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
			<div class="mt-3 grid place-content-center justify-items-center bg-surface-300 p-10">
				<p>© 2023 XenonRP. Minden jog fenntartva.</p>
			</div>
		</footer>
	</svelte:fragment>
</AppShell>
