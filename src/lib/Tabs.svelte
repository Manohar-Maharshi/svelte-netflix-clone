
<script>
  import { onMount } from "svelte";

  export let items = [];
  export let activeTabValue;

  onMount(() => {
    // Set default tab value
    if (Array.isArray(items) && items.length && items[0].value) {
      activeTabValue = items[0].value;
    }
  });

  const handleClick = tabValue => () => (activeTabValue = tabValue);
</script>

<ul class="inline-flex items-center text-[1.5rem] space-x-3">
  {#if Array.isArray(items)}
    {#each items as item}
      <li class={activeTabValue === item.value ? 'text-red-600 ' : ''}>
        <span class="cursor-pointer hover:underline" on:click={handleClick(item.value)}>{item.label}</span>
      </li>
    {/each}
  {/if}
</ul>
