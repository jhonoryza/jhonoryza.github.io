<nav>
  <div class="container">
    <span id="brand"><a href="/"><img alt="planarian" src="/assets/logo.svg" />Home</a></span>
    <a class="p-2" href="/about">About</a>
    <a class="p-2" href="/contact">Contact</a>
  </div>
</nav>

<style>
  nav, .container, #brand, #brand a {
    display: flex;
  }
  nav {
    min-height: 60px;
    box-shadow: 0px 2px 3px var(--base);
  }
  #brand {
    flex: 1;
  }
  a {
    align-self: center;
    align-items: center;
    color: var(--base-dark);
    text-decoration: none;
  }
  img {
    margin-right: 10px;
  }
</style>
