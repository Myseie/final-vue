<template>
    <h1>Träningsdagbok</h1>

    <h2>Hur de fungerar</h2>
    <p>I denna uppgift så fick jag göra en simpel sida som låter en spara träningspass. Med hjälp av en databas som sparar träningspasset och hämtar dom till sidan.</p>
    <h2>
        Hur Koden ser ut 
    </h2>
   <div class="image-slider">
    <img :src="currentImage">
    <button @click="nextImage">Nästa</button>
   </div>
<h2>Resultatet</h2><div class="result">
<img src="@/assets/trainingjournal/TJResultat.jpg" alt=""></div>
</template>



<script>
import tjcontroller from '@/assets/trainingjournal/tjcontroller.jpg';
import tjdatabase from '@/assets/trainingjournal/tjdatabase.jpg';
import tjmodel from '@/assets/trainingjournal/tjmodel.jpg';
export default {
    data() {
        
        return {
           
            images: [
                tjcontroller,
                tjdatabase,
                tjmodel
                
                
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
.result{
    border: 3px solid black;
    
}
</style>