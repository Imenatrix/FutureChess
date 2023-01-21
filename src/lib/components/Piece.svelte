<script lang='ts'>

	import type Piece from '$lib/engine/piece/Piece';
	import { createEventDispatcher, onMount } from 'svelte';

	export let piece : Piece

	const dispatch = createEventDispatcher()

	let container : HTMLElement
 
	onMount(() => {
		const mousemove = (event : MouseEvent) => {
			if (container.style.position == 'fixed') {
				container.style.top = event.pageY - 50 + 'px'
				container.style.left = event.pageX - 50 + 'px'
				window.getSelection().removeAllRanges()
			}
		}
		const mouseup = () => {
			container.style.pointerEvents = 'auto'
			container.style.position = 'absolute'
			container.style.top = '0'
			container.style.left = '0'
			container.style.zIndex = '0'
		}
		document.addEventListener('mousemove', mousemove)
		document.addEventListener('mouseup', mouseup)

		return () => {
			document.removeEventListener('mousemove', mousemove)
			document.removeEventListener('mouseup', mouseup)
		}
	})

	function handleMouseDown(event : MouseEvent) {
		dispatch('select', piece)
		container.style.pointerEvents = 'none'
		container.style.position = 'fixed'
		container.style.zIndex = '1'
		container.style.top = event.pageY - 50 + 'px'
		container.style.left = event.pageX - 50 + 'px'
	}

</script>

<div bind:this={container} class='container' on:mousedown={handleMouseDown}>
	<img src="/imgs/{piece.char}-{piece.color}.svg" width="100%" alt="">
</div>

<style>
	.container {
		position: absolute;
		display : flex;
		justify-content: center;
		align-items: center;
		width: 100px;
		height: 100px;
	}
</style>
