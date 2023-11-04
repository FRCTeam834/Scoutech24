<script>
    import Tally from "../components/Tally.svelte";
    import ShortText from "../components/ShortText.svelte";
    import Dropdown from "../components/Dropdown.svelte";
	import TeamSelection from "../components/TeamSelection.svelte";
	import Toggle from "../components/Toggle.svelte";
	import Radioboxs from "../components/Radioboxs.svelte";
	import Tabel from "./Tabel.svelte";
	import Hamburger from "../components/Hamburger.svelte";
	import Header from "../components/Header.svelte";

    export let data;
</script>

<!-- <Hamburger/> -->

<div id = "page">
<form method = "POST" action = "?/create">
    <ShortText label = "Name:" name = "name"/> <br>
    <TeamSelection/> <br> <br>
    <Tally label = "Match Number" name = "match_number"/> <br>
    <Header title = "Auton Phase" color = "#fefefe"/> <br>
    <Tally label = "High" name = "auton_high"/> <br>
    <Tally label = "Mid" name = "auton_mid"/> <br>
    <Tally label = "Low" name = "auton_low"/> <br>
    <Tally label = "Drops" name = "auton_drops"/><br>
    <Toggle label = "Grabbed Piece at End" name = "grab_piece"/> <br> <br>
    <Toggle label = "Left Community" name = "left_community"/> <br> <br>
    <Radioboxs label = "Did they balance?" name = "auton_balance" 
    selections = {{
                0 : "Docked (Not Engaged)", 
                1 : "Engaged (Balanced)", 
                2 : " Attempted But Failed",
                3 : "Did Not Attempt To Balance",
                }}
    selection = "3"/> <br>

    <Header title = "Teleop Phase" color = "#fefefe"/> <br>
    <Tally label = "High" name = "teleop_high"/> <br>
    <Tally label = "Mid" name = "teleop_mid"/> <br>
    <Tally label = "Low" name = "teleop_low"/> <br>
    <Tally label = "Drops" name = "teleop_drops"/> <br>

    <Dropdown label = "Game Piece Used" name = "piece" 
        selections = {{
                    0 : "None", 
                    1 : "Cube",
                    2 : "Cone",
                    3 : "Both"
                    }}/>
    <Toggle label = "Were they defended?" name = "defended"/> <br> <br>
    <Header title = "Endgame" color = "#fefefe"/> <br>
    <Radioboxs label = "Final Balance Positon?" name = "final_balance" 
    selections = {{
                0 : "Docked (Not Engaged)", 
                1 : "Engaged (Balanced)", 
                2 : "Attempted But Failed",
                3 : "Parked (In Community Area)", 
                4 : "Did Not Attempt To Balance"
                }}
    selection = "4"/> <br> 
    <Toggle label = "Made Room on Charging Station?" name = "made_room"/> <br> <br>
    <Toggle label = "Did they play defense" name = "attacked"/> <br> <br>
    <ShortText label = "Were They Good at Defense" name = "good_defense"/> <br>
    <ShortText label = "Other" name = "other"/> <br>
    <Toggle label = "Did they break?" name = "broken"/> <br> <br>


    <button class = "variant-filled-secondary h-35 btn btn-lg w-full" type="submit">Submit</button> <br>
</form>
</div>



<!-- <ul>
    {#each data.post as entry}
        <li>
        <Tabel match = {entry[3]} team = {entry[2]} />
        </li>
    {/each}
</ul> -->