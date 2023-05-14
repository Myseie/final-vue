<template>
<h1>Recept api</h1>
<p>På dessa lektioner och uppgifter fick jag lära mig hur man skapade en api vilket som funkar som en backend med MongoDB som databas</p>
<div class="image-slider">
        <img :src="currentImage">
    <button @click="nextImage">Nästa</button>
</div>
<h2>Resultatet</h2>
<img src="@/assets/ReceptAPI/ReceptAPIRes.jpg" alt="">
</template>



<script>
import ReceptAPICon1 from '@/assets/ReceptAPI/ReceptAPICon1.jpg';
import ReceptAPICon2 from '@/assets/ReceptAPI/ReceptAPICon2.jpg';
import ReceptAPIDatabase1 from '@/assets/ReceptAPI/ReceptAPIDatabase1.jpg';
import ReceptAPIDatabase2 from '@/assets/ReceptAPI/ReceptAPIDatabase2.jpg';
import ReceptAPIModel from '@/assets/ReceptAPI/ReceptAPIModel.jpg';
export default {
    data() {
        
        return {
           
            images: [
                ReceptAPICon1,
                ReceptAPICon2,
                ReceptAPIDatabase1,
                ReceptAPIDatabase2,
                ReceptAPIModel
                
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