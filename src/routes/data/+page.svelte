<script>
    export let data;    
</script>

<h2>Testing postgres</h2>
<ul>
  {#each data.post as entry}
    <li>
        {entry}
    </li>
  {/each}
</ul>