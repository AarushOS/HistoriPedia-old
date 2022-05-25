<script lang="ts">

</script>
<main>
    <form action="">
        <input class="input" placeholder = "Search an article..." id="input" type="search">
        <i id="search" class="fa fa-search"></i>
    </form>
</main>
<style>
    input {
        position: absolute;
        top: 0;
        left: 0;
        border: 0;
        width: 100%;
        height: 52px;
        line-height: 75px;
        outline: 0;
        display: block;
        font-size: 16px;
        border-radius: 10px;
        padding: 0 20px;
        z-index: 9;
    }
    form {
        position: absolute;
        width: 450px;
        height: 60px;
        left: 50%;
        top: 35%;
        padding: 5px;
        transform: translate(-50%, 50%);
        border-radius: 10px;
        border: 4px solid #f4f3ef;
        box-sizing: border-box;
        background: #f4f3ef;
        transition: 0.04s;
        z-index: 9;
    }
    @media only screen and (max-width: 650px) {
        form {
            position: absolute;
            width: 300px;
            height: 60px;
            left: 50%;
            top: 27%;
            padding: 5px;
            transform: translate(-50%, 50%);
            border-radius: 10px;
            border: 4px solid #f4f3ef;
            box-sizing: border-box;
            background: #f4f3ef;
            transition: 0.03s;
        }
    }
</style>