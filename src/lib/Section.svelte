<script lang="ts">
    export let link:string = ''
    export let aside:boolean = false
    export let color:string = ''
    export let photo:string = ''
    export let title:string = ''
</script>

<div class="app-section" class:side={aside}  data-aos="fade-up" data-aos-duration="1000">
    <div class="photo" style:backgroundColor={color}>
        <!-- <a href={link} target="_blank">
            <img src={photo} alt="">
        </a> -->
        <img src={photo} alt="">
    </div>
    <div class="info">
        <div class="tito">
            <a href={link} target="_blank">
                {title}
            </a>
        </div>
        <!-- <div class="tito">{{title}}</div> -->
        <hr>
        <div class="desc">
            <slot/>
        </div>
    </div>
</div>

<style>
    .app-section {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0px 0px;
    }
    .app-section.side {
        text-align: right;
    }
    .app-section.side .photo {
        order: 2;
        margin: 0;
        margin-left: 60px;
    }
    .photo {
        height: 400px;
        width: 400px;
        margin-right: 60px;
    }
    .photo img {
        object-fit: cover;
        height: 100%;
        width: 100%;
    }
    .info {
        flex: 1;
    }
    .info .tito {
        font-size: 24px;
        font-weight: bold;
    }
    .info .tito a {
        color: black;
        text-decoration: none;
    }
    hr {
        opacity: 0.2;
    }
    @media (max-width: 800px) {
        .app-section{
            flex-direction: column;
        }
        .photo {
            width: 100%;
            height: 200px;
            margin: 0 !important;
            margin-bottom: 50px !important;
            order: 2;
        }
        .info {
            text-align: left;
            margin-bottom: 20px;
        }
    }
</style>