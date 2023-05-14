<template>
<h1>Recept lista med SQL</h1>
<p>I denna uppgiften fick jag skapa en recept lista med hjälp av en SQL databas</p>
<p>Så man skriver in recepten i databasen så de kan visas på en sida</p>
<div class="image-slider">
        <img :src="currentImage">
    <button @click="nextImage">Nästa</button>
</div>

<h2>Resultatet</h2>
<div class="result">
<p>Och så här blev slut resultatet</p>
<img src="@/assets/RecipeSQL/RecipeResSQL.jpg" alt="">
</div>
</template>

<script>
import RecipeDatabaseSQL from '@/assets/RecipeSQL/RecipeDatabaseSQL.jpg';
import RecipeModelSQL from '@/assets/RecipeSQL/RecipeModelSQL.jpg';
import RecipeSQL from '@/assets/RecipeSQL/RecipeSQL.jpg';
import RecipeStartSQL from '@/assets/RecipeSQL/RecipeStartSQL.jpg';
export default {
    data() {
        
        return {
           
            images: [
                RecipeStartSQL,
                RecipeDatabaseSQL,
                RecipeModelSQL,
                RecipeSQL
                
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
    padding: 5px 15px;
    border-radius: 3px;
    border: 3px solid black;
}
</style>