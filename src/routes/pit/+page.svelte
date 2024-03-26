<script>
	import Radioboxs from '../../components/Radioboxs.svelte';
	import ShortText from '../../components/ShortText.svelte';
	import Tally from '../../components/Tally.svelte';
	import TeamSelection from '../../components/TeamSelection.svelte';
	import Toggle from '../../components/Toggle.svelte';

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<div class = "page">
<form method = "POST" action = "?/create">
    <TeamSelection/> <br> <br>

    <Tally label = "Width" name = "widthB"/> <br>

    <Tally label = "Length" name = "lengthB"/> <br>

    <Toggle label = "With Bumper" name = "bumber"/> <br> <br>
    
    <Radioboxs label = "Drive Train" name = "drivetrain" 
    selections = {{
                0 : "Swerve", 
                1 : "Tank", 
                2 : "Other",
                }}
    selection = "0"/> <br>
    <ShortText label = "If Other" name = "otherDriveTrain"/> <br>
    
    <Toggle label = "Amp Capability:" name = "amp"/> <br> <br>

    <Toggle label = "Trap Capability:" name = "trap"/> <br> <br>

    <ShortText label = "Auton Paths:" name = "autons"/> <br>

    <ShortText label = "Other Info:" name = "other"/> <br>

    <button class = "variant-filled-secondary h-35 btn btn-lg w-full" type="submit">Submit</button> <br> <br>
</form>
</div>


