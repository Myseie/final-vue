<template>
    <h1>Blogg API</h1>
    <p>Här fick jag lära mig att göra en enkel API för att skapa blogginlägg med hjälp av en MongoDB databas.</p>
    <div class="image-slider">
        <img :src="currentImage">
    <button @click="nextImage">Nästa</button>
    <h2>Resultatet</h2>
    <img src="@/assets/BloggAPIMongo/BloggAPMongoRes.jpg" alt="">
</div>

</template>
<script>
import BloggAPICont1Mongo from '@/assets/BloggAPIMongo/BloggAPICont1Mongo.jpg';
import BloggAPICont2Mongo from '@/assets/BloggAPIMongo/BloggAPICont2Mongo.jpg';
import BloggAPIDatabaseMongo from '@/assets/BloggAPIMongo/BloggAPIDatabaseMongo.jpg';
import BloggAPIDatabaseMongo2 from '@/assets/BloggAPIMongo/BloggAPIDatabaseMongo2.jpg';
import BloggAPIModelMongo from '@/assets/BloggAPIMongo/BloggAPIModelMongo.jpg';
export default {
    data() {
        
        return {
           
            images: [
                BloggAPICont1Mongo,
                BloggAPICont2Mongo,
                BloggAPIDatabaseMongo,
                BloggAPIDatabaseMongo2,
                BloggAPIModelMongo
               
            ],
           
            currentIndex: 0,
        };
    },
    computed: {
       
        currentImage() {
           
            return this.images[this.currentIndex];
        },
    },
    methods: {
        
        nextImage() {
            
            if (this.currentIndex === this.images.length - 1) {
              
                this.currentIndex = 0;
            } else {
                
                this.currentIndex += 1;
            }
        },
    },
};
</script>

<style scoped>
img{
    max-width: 65%;
}
</style>
<style scoped>
img{
    max-width: 80%;
}
.image-slider {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.image-slider img {
    max-width: 100%;
    max-height: 700px;
}

.image-slider button {
    margin-top: 1rem;
    border: 2px solid green;
    border-radius: 3px;
    background: #009f00;
    color: white;
    font-weight: 700;
    font-size: 1.4em;
    padding: 5px 15px;
    cursor: pointer;
}

.image-slider button:hover{
    opacity: 0.7;
}
</style>