<script>
  export let title, description;
  // import Uses from "../components/template.svelte";
</script>

<div class="text-xl font-semibold text-gray-700 p-5">
  <h1>{title}</h1>
</div>

<div class="text-base font-normal p-5">
  {#each description as paragraph}
    <p>{@html paragraph}</p>
  {/each}
</div>

<!-- <Uses type="pages" /> -->

<p><a href="/">Back home</a></p>