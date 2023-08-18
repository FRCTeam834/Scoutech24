<script>
    import Dropdown from "./Dropdown.svelte";
    /**
	 * @type {string[]}
	 */
    let itemsList = [];
    let text;
    /**
	 * @type {Object.<string, string>}
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
        itemsList.forEach(item => dictionary[item] = item);
    };
    
</script>

<Dropdown label = {"Team"} selections = {dictionary} name = {"team"}/>
