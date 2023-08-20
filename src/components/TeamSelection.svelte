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
        itemsList.forEach(item => dictionary[item.replace(/(\r\n|\n|\r)/gm, "")] = item.replace(/(\r\n|\n|\r)/gm, ""));
    };
    
</script>

<Dropdown label = {"Team"} selections = {dictionary} name = {"team"}/>
