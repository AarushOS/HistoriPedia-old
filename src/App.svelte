<script>
import SearchBar from "./searchBar.svelte";


</script>

<main>
	<txt class="txt">HistoriPedia</txt>
	<SearchBar />
</main>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap");
	*{
		margin: 0%;
		padding: 0%;
	}

	main {
		height: 100%;
		width: 100%;
		background: #f4f3ef;
		background-image: radial-gradient(#faebca 10%, transparent 11%), radial-gradient(#faebca 10%, transparent 11%);
		background-size: 60px 60px;
		background-position: 0 0, 30px 30px;
		background-repeat: repeat;
		position: fixed;
	}

	.txt {
		box-sizing: border-box;
		font-family: "Josefin Sans", sans-serif;
		color: #394a64;
		font-size: 100px;
		position: fixed;
		transform: translate(-50%, 50%);
		left: 50%;
        top: 15%;
		user-select: none;
	}
	@media only screen and (max-width: 650px) {
		.txt {
			font-size: 70px;
			color: #394a64;
			font-family: "Josefin Sans", sans-serif;
			position: absolute;
			transform: translate(-50%, 50%);
			left: 50%;
			top: 10%;
			user-select: none;
		}
	}
</style>