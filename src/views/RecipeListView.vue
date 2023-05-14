<template>
    <h1>Receptlista</h1>
    <p>Här så har jag skapat en enkel lista med några recept och länkar till sidor med bra recept på olika rätter</p>
    <div class="image-slider">
        <img :src="currentImage">
    <button @click="nextImage">Nästa</button>
</div>
<div class="result"><h2>Resultatet</h2> 
<img src="@/assets/RecipeMVC/ReceptMVCresultat.jpg" alt="">
<h2>Och när man har tryckt på en av bilderna</h2>
<img src="@/assets/RecipeMVC/ReceptMVCresultat2.jpg" alt="">
</div>
</template>



<script>
import ReceptMVCC from '@/assets/RecipeMVC/ReceptMVCC.jpg';
import ReceptMVCStart from '@/assets/RecipeMVC/ReceptMVCStart.jpg';

export default {
    data() {
        
        return {
           
            images: [
                ReceptMVCC,
                ReceptMVCStart

                
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
.result{
    max-width: 100%;
    background-color: black;
    color:aliceblue;

}
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
    background: #c605d8;
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