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
    <TeamSelection excludedTeams = {Array.from(data.post.flat())}/> <br> <br>
    <Tally label = "Width" name = "robot_width"/> <br>

    <Tally label = "Length" name = "robot_length"/> <br>

    <Toggle label = "With Bumper" name = "with_bumper"/> <br> <br>
    
    <Radioboxs label = "Drive Train" name = "drivetrain" 
    selections = {{
                0 : "Swerve", 
                1 : "Tank", 
                2 : "Other",
                }}
    selection = "0"/> <br>
    <ShortText label = "If Other" name = "other_drivetrain"/> <br>
    
    <Toggle label = "Amp Capability:" name = "does_amp"/> <br> <br>

    <Toggle label = "Trap Capability:" name = "does_trap"/> <br> <br>

    <ShortText label = "Auton Paths:" name = "auton_paths"/> <br>

    <ShortText label = "Other Info:" name = "other"/> <br>

    <button class = "variant-filled-secondary h-35 btn btn-lg w-full" type="submit">Submit</button> <br> <br>
</form>

</div>


