<script type="typescript">
    export let color : 'white' | 'black' = 'white'
</script>

<div class='square {color}' on:mouseup>
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