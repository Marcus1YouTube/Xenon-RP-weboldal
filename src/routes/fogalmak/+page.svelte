<script>
	import { Autocomplete, getDrawerStore } from '@skeletonlabs/skeleton';

	let searchInputText = '';
	let drawerStore = getDrawerStore();

	export let data;

	function onRPDefSelected(event) {
		searchInputText = '';
		drawerStore.open({
			id: 'autocomplete',
            position: "bottom",
			meta: event.detail
		});
	}
</script>

<svelte:head>
	<title>RP Fogalmak - Xenon RP</title>
</svelte:head>

<main class="mx-10 flex flex-col justify-center gap-4 text-center text-2xl">
	<div>
		<input
			type="text"
			class="input"
			placeholder="Keress egy rövdítésre!"
			bind:value={searchInputText}
		/>
		<div class="card mt-2 max-h-48 w-full overflow-y-auto p-4" tabindex="-1">
			<Autocomplete
				bind:input={searchInputText}
				options={data.rpDefinitions}
				on:selection={onRPDefSelected}
			/>
		</div>
	</div>
</main>
