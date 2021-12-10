<script type="typescript">
    import Piece from '$lib/components/Piece.svelte'
    import Square from '$lib/components/Square.svelte';
    import type { default as VirtualPiece } from '$lib/engine/piece/Piece'

    export let boardState

    let selectedPiece : VirtualPiece

    function handleMouseUp(event : MouseEvent) {
        console.log(event.currentTarget)
    }

    function handlePieceSelection(event : CustomEvent) {
        selectedPiece = event.detail
        console.log(selectedPiece)
    }

</script>
<div class='container'>
    {#each [...Array(8).keys()] as i}
        {#each [...Array(8).keys()] as j}
            <Square color={(i + j) % 2 == 0 ? 'white' : 'black'} on:mouseup={handleMouseUp}>
                {#if boardState[i][j]}
                    <Piece on:select={handlePieceSelection} piece={boardState[i][j]}/>
                {/if}
            </Square>
        {/each}
        <br>
    {/each}
</div>

<style>
    .container {
        display: inline-block;
        background-color: red;
        line-height: 0;
        box-shadow: 0px 0px 20px 5px black;
    }
</style>