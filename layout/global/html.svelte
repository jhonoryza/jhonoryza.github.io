<script>
  import Head from './head.svelte';
  import Nav from './nav.svelte';
  import Footer from './footer.svelte';
  import { makeTitle } from '../scripts/make_title.svelte';

  export let route, content, allContent;
</script>

<html lang="en">
<Head title={makeTitle(content.filename)} />
<body class="flex flex-col min-h-screen ">
  <Nav />
    <main class="flex-grow">
      <div class="container">
        <svelte:component this={route} {...content.fields} {allContent} />
        <br />
      </div>
    </main>
    <Footer {allContent} />
</body>
</html>

<style>
  body {
    font-size: large;
    font-family: 'Dosis', sans-serif;
    display: flex;
    flex-direction: column;
    margin: 0;
  }
  main {
    flex-grow: 1;
  }
  :global(.container) {
    max-width: 1024px;
    margin: 0 auto;
    flex-grow: 1;
    padding: 0 20px;
  }
  :global(:root) {
    --primary: rgb(34, 166, 237);
    --primary-dark: rgb(16, 92, 133);
    --accent: rgb(254, 211, 48);
    --base: rgb(245, 245, 245);
    --base-dark: rgb(17, 17, 17);
  }
  :global(main a) {
    position: relative;
    text-decoration: none;
    color: var(--primary);
    padding-bottom: 5px;
  }
</style>
