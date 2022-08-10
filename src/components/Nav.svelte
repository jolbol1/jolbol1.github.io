<script lang="ts">
	export let disable: boolean = false;
	const toggleAnimations = () => {
		disable = !disable;
	};
</script>

<nav class="absolute top-0 left-0 w-full flex flex-row justify-end">
	<button class="z-10 font-mono p-4 text-gray-600" on:click={toggleAnimations}
		>{disable ? 'ENABLE' : 'DISABLE'}</button
	>
</nav>
