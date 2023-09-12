<script>
    export let data;
</script>

<h2>Testing postgres</h2>
<ul>
  {#each data.post as post}
    <li>
        {post.content}
    </li>
  {/each}
</ul>