<script>
  import { sortByDate } from "../scripts/sort_by_date.svelte";
  export let items, filter;
</script>

<ul>
  {#each sortByDate(items) as item}
    {#if item.type == filter}
      <li>
        <a class="text-blue-500" href={item.path}>- {item.fields.title}</a>
      </li>
    {/if}
  {/each}
</ul>
