<template>
    <h1>Tictactoe</h1>
    <p>På denna uppgiften fick jag göra spelet 3 i rad så man kan spela de i terminalen.</p>
    <h2>Hur koden ser ut</h2>
    <div class="image-slider">
        <img :src="currentImage">
    <button @click="nextImage">Nästa</button>
</div>

    <h2>Hur de ser ut när man är färdig</h2>
    <p>När spelar så skriver man in numret man vill kryssa i och sen turas man om att skriva in ett nummer</p>
    <img src="@/assets/TicTacToe/Tictactoeresultat.jpg" alt="">

    
</template>



<script>
import tictactoe1 from '@/assets/TicTacToe/tictactoe1.jpg';
import tictactoe2 from '@/assets/TicTacToe/tictactoe2.jpg';
import tictactoe3 from '@/assets/TicTacToe/tictactoe3.jpg';
export default {
    data() {
        
        return {
           
            images: [
                tictactoe1,
                tictactoe2,
                tictactoe3
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