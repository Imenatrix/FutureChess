<script>
    export let boardState
</script>
<div class='container'>
    {#each [...Array(8).keys()] as i}
        {#each [...Array(8).keys()] as j}
            <div class='square white' class:black={((i + j) % 2 != 0)}>
                {#if boardState[i][j]}
                    <div class='piece'>{boardState[i][j]}</div>
                {/if}
            </div>
        {/each}
        <br>
    {/each}
</div>

<style>
    .piece {
        color : gray;
    }
    .container {
        display: inline-block;
        background-color: red;
        line-height: 0;
        box-shadow: 0px 0px 20px 5px black;
    }
    .square {
        display: inline-flex;
        width: 100px;
        height: 100px;
        justify-content: center;
        align-items: center;
    }
    .white {
        background-color: white;
    }
    .black {
        background-color: black;
    }
</style>