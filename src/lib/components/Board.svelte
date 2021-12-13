<script type="typescript">
	import Piece from '$lib/components/Piece.svelte'
	import Square from '$lib/components/Square.svelte'
	import Target from '$lib/components/Target.svelte'
	import type { default as VirtualPiece } from '$lib/engine/piece/Piece'

	export let boardState

	let selectedPiece : VirtualPiece

	function handleSquareSelection(event : CustomEvent) {
		const {i, j} = event.detail
		const moved = selectedPiece.move(i, j)
		if (moved) {
			selectedPiece = null
			boardState = boardState
		}
	}

	function handlePieceSelection(event : CustomEvent) {
		selectedPiece = event.detail
	}

</script>
<div class='container'>
	{#each [...Array(8).keys()] as i}
		{#each [...Array(8).keys()] as j}
			<Square {i} {j} color={(i + j) % 2 == 0 ? 'white' : 'black'} on:select={handleSquareSelection}>
				{#if selectedPiece?.availableMoves()[i][j]}
					<Target/>
				{/if}
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
