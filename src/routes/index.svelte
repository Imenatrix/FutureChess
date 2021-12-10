<script>
    import Board from '$lib/components/Board.svelte'
    import Engine from '$lib/engine/Engine'

    const engine = new Engine()
    const boardState = engine.board
</script>

<div class="container">
    <Board {boardState}/>
</div>

<style>
    .container {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>