<script>
    import { userId } from "../../store";
</script>

<h2>QR Testing</h2>
<h1>{$userId}</h1>
<input type="text" bind:value={$userId}>
  <!-- <textarea bind:value={$formData} placeholder="Content"></textarea> -->
