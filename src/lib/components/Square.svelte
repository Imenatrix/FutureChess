<script type="typescript">
import { createEventDispatcher } from "svelte";



    export let color : 'white' | 'black' = 'white'
    export let i : number
    export let j : number

    const dispatch = createEventDispatcher()

    function handleMouseUp() {
        dispatch('select', {i : i, j : j})
    }

</script>

<div class='square {color}' on:mouseup={handleMouseUp}>
    <slot/>
</div>

<style>
    .square {
        position : relative;
        display: inline-block;
        width: 100px;
        height: 100px;
    }
    .white {
        background-color: white;
    }
    .black {
        background-color: black;
    }
</style>