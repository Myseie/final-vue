<template>
    <h1>Böcker och lån</h1>
    <p>Fick skapa en API för Böcker och Lån i denna uppgiften. Dessa använder SQL som databas.</p>
    <div class="image-slider">
        <img :src="currentImage">
    <button @click="nextImage">Nästa</button>
</div>
<h2>Resultatet</h2>
<img src="@/assets/BooksAndLoansAPI/BALResult.jpg" alt="">

</template>



<script>
import BALBookContSQL from '@/assets/BooksAndLoansAPI/BALBookContSQL.jpg';
import BALBookModelSQL from '@/assets/BooksAndLoansAPI/BALBookModelSQL.jpg';
import BALConn1SQL from '@/assets/BooksAndLoansAPI/BALConn1SQL.jpg';
import BALConn2SQL from '@/assets/BooksAndLoansAPI/BALConn2SQL.jpg';
import BALConn3SQL from '@/assets/BooksAndLoansAPI/BALConn3SQL.jpg';
import BALConn4SQL from '@/assets/BooksAndLoansAPI/BALConn4SQL.jpg';
import BALConn5SQL from '@/assets/BooksAndLoansAPI/BALConn5SQL.jpg';
import BALConn6SQL from '@/assets/BooksAndLoansAPI/BALConn6SQL.jpg';
import BALConn7SQL from '@/assets/BooksAndLoansAPI/BALConn7SQL.jpg';
import BALLoanContr1SQL from '@/assets/BooksAndLoansAPI/BALLoanContr1SQL.jpg';
import BALLoanContr2SQL from '@/assets/BooksAndLoansAPI/BALLoanContr2SQL.jpg';
import BALLoanModelSQL from '@/assets/BooksAndLoansAPI/BALLoanModelSQL.jpg';
export default {
    data() {
        
        return {
           
            images: [
                BALBookContSQL,
                BALBookModelSQL,
                BALConn1SQL,
                BALConn2SQL,
                BALConn3SQL,
                BALConn4SQL,
                BALConn5SQL,
                BALConn6SQL,
                BALConn7SQL,
                BALLoanContr1SQL,
                BALLoanContr2SQL,
                BALBookModelSQL
                
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