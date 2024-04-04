<script>
	import { RadioGroup, RadioItem } from "@skeletonlabs/skeleton";

    let autonPaths = ["Joe", "Ver"];

    $: selected = 0;
</script>

<button type = "button">+</button>

<RadioGroup 
active="variant-filled-primary" 
rounded="rounded-container-token" 
display="flex-col"
background = "bg-tertiary-50-token"
padding = "py-2"

>


    {#each autonPaths as auton, i}
        <div class = "grid grid-cols-5" id = {i.toString() + "A"}>
            <RadioItem name = {i.toString() + "a"} value = {i} bind:group = {selected} class = "col-span-1 h-fit">:</RadioItem>
            <input type="text" 
                class="input rounded-[1em] bg-[#fefefe] border-transparent col-span-4" bind:value={auton}/>
        </div>
    {/each}
    {selected}


</RadioGroup>



<button type="button" class="bg-[white]">Amigo</button>
