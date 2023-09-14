<script lang="ts">
  export let description = "We're a digital marketing agency for the businesses we care about. We specialize in custom web app design, development, and promotion."; // prop but use lib/info as default
  export let title = "webboot.io";
  export let url = "https://webboot.io"
  export let img = "";
  export let domain = "webboot.io";
</script>

<svelte:head>
  <!-- HTML Meta Tags -->
  <title>{title}</title>
  <meta name="description" content={description} />

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content={url} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  {#if img}
    <meta property="og:image" content={img} />
  {/if}

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content={domain} />
  <meta property="twitter:url" content={url} />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  {#if img}
    <meta name="twitter:image" content={img} />
  {/if}

  <link rel="“canonical”" href={url} />
</svelte:head>
