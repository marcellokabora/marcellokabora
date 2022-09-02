<script lang="ts">
    export let cover: string = '/styling.jpg'
    export let title: string = 'Title'
    export let slogan: string = 'Slogan'
</script>

<div class="banner" >
    <img class="cover" src={cover} alt="cover">
    <div class="header">
        <div class="flexone">
            <div class="title">{title}</div>
            <hr>
            <div class="slogan">{slogan}</div>
        </div>
    </div>
    <img class="arcbot" src="/shape/arc_bot.png" alt="arcbot">
</div>

<style>

    .banner {
        height: 400px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        overflow: hidden;
        position: relative;
        text-align: center;
    }
    .cover {
        position: absolute;
        object-fit: cover;
        height: 105%;
        width: 105%;
        z-index: -1;
        filter: saturate(1) brightness(0.8) blur(8px);
    }
    .arcbot {
        position: absolute;
        bottom: -1px;
        width: 100%;
        z-index: 1;
    }

    .header {
        text-align: center;
        display: flex;
        justify-content: center;
    }

    .flexone {
        flex: 1;
        max-width: 50vw;
        min-width: 50vw;
    }
    .link {
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