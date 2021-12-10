<script type="typescript">

    import type Piece from '$lib/engine/piece/Piece';
    import { onMount } from 'svelte';

    export let piece : Piece

    let container : HTMLElement
 
    onMount(() => {
        document.addEventListener('mousemove', (event : MouseEvent) => {
            if (container.style.position == 'fixed') {
                container.style.top = event.pageY - 25 + 'px'
                container.style.left = event.pageX - 25 + 'px'
            }
        })
        document.addEventListener('mouseup', () => {
            container.style.position = 'absolute'
            container.style.top = '25%'
            container.style.left = '25%'
            container.style.zIndex = '0'
        })
    })

    function handleMouseDown(event : MouseEvent) {
        const target = event.target as HTMLElement
        target.style.position = 'fixed'
        target.style.zIndex = '1'
        target.style.top = event.pageY - 25 + 'px'
        target.style.left = event.pageX - 25 + 'px'
    }

</script>

<div bind:this={container} class='container' on:mousedown={handleMouseDown}>
    {piece}
</div>

<style>
    .container {
        position: absolute;
        top : 25%;
        left: 25%;
        display : flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        background-color: lightgray;
        color : black;
    }
</style>