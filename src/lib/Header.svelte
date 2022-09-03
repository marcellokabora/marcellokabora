<script type="ts">
    export let title:string = 'Title'
    export let slogan:string = 'Slogan'
    export let zoom:number = 1
</script>
<header>
    <div class="flexone" style:zoom={zoom}>
        <div class="title">{title}</div>
        <hr>
        <div class="slogan">{slogan}</div>
    </div>
</header>


<style>
    header {
    text-align: center;
    display: flex;
    justify-content: center;
    }

    .flexone {
        flex: 1;
        max-width: 50vw;
        min-width: 50vw;
    }
        .flexone.link {
            cursor: pointer;
        }
        .title {
            font-size: 30px;
            font-weight: bold;
        }
        hr {
            opacity: 0.2;
            margin: 10px -50px;
        }
        .slogan {
            font-size: 20px;
            opacity: 0.6;
        }

    @media (max-width: 1200px) {
            hr {
                margin: 10px 0px;
            }
    }
    @media (max-width: 800px) {
        .flexone {
            max-width: none;
            min-width: none;
            padding-top: 40px;
        }
    }

</style>