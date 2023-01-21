<script>
	import Board from '$lib/components/Board.svelte'
	import Engine from '$lib/engine/Engine'

	const engine = new Engine()
	let boardState = engine.board

	function handleMoved() {
		boardState = boardState
	}

</script>

<div class="container">
	<Board on:moved={handleMoved} {boardState}/>
	<div class="spacer"></div>
	<Board on:moved={handleMoved} {boardState}/>
</div>

<style>
	.container {
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.spacer {
		width: 100px;
	}
</style>
