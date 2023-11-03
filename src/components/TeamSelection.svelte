<script>
    import Dropdown from "./Dropdown.svelte";
    /**
	 * @type {string[]}
	 */
    let itemsList = [];
    let text;
    /**
	 * @type {{ [x: string]: string; }}
	 */
    var dictionary = {};

    import {onMount} from 'svelte';
		onMount(() => {
        loadItems();
    });

    const loadItems = async () => {
         const response = await fetch('/teams.txt');
        text = await response.text();
        itemsList = text.split('\n');
        
        itemsList.forEach(item => {
            let turncItem = item.replace(/(\r\n|\n|\r)/gm, "");
            dictionary[turncItem.split(" ")[0]] = turncItem.replace("	", " | ");
            })
    };
    
</script>

<Dropdown label = {"Team"} selections = {dictionary} name = {"team"}/>
