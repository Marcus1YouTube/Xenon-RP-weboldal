<script>
</script>

<svelte:head>
	<title>Rólunk - Xenon RP</title>
</svelte:head>

<main class="mx-10 flex flex-col justify-center gap-4 text-center text-2xl">
	<div class="">
		<h3 class="h3">Több, mint</h3>
		<h2 class="h2 text-blue-500">+1000</h2>
		<h3 class="h3">vagytok a Discord szerveren</h3>
	</div>
	<div class="">
		<h3 class="h3">Több, mint</h3>
		<h2 class="h2 text-blue-500">+75000</h2>
		<h3 class="h3">sor kód van a hátunk mögött</h3>
	</div>
	<div>
		<h3 class="h3">Egy nap egyszerre</h3>
		<h2 class="h2 text-blue-500">42-en</h2>
		<h3 class="h3">voltatok a szerveren</h3>
	</div>
	<br />
	<p>Ezért nem kétség, hogy mi vagyunk Magyarország egyik legnagyobb SAMP szervere.</p>
	<hr class="!border-t-8" />
	<div class="text-left">
		<h1 class="h1">Galéria</h1>
		<h3 class="h3">Tekints be a közösségünkhöz!</h3>
		<b><i>Jegyzet: A képek előnézetben rossz minőségűek, a teljes minőségű képért nyomj rá a fotóra! Ez azért kell, hogy gyorsabban tölthessen be a webodal.</i></b>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		{#each [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as i}
		<a href={"/gallery/uncompressed/v2kep_" + i + ".jpg"} target="_blank"><img src={"/gallery/v2kep_" + i + ".jpg"} alt="galéria kép"/></a>
		{/each}
	</div>
</main>
