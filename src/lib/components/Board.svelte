<script type="typescript">
    import Piece from '$lib/components/Piece.svelte'

    export let boardState

    function handleMouseUp(event : MouseEvent) {
        console.log(event.currentTarget)
    }
</script>
<div class='container'>
    {#each [...Array(8).keys()] as i}
        {#each [...Array(8).keys()] as j}
            <div class='square white' class:black={((i + j) % 2 != 0)} on:mouseup={handleMouseUp}>
                {#if boardState[i][j]}
                    <Piece piece={boardState[i][j]}/>
                {/if}
            </div>
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