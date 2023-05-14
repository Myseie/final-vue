<template>
    <h1>Blogg api med SQL</h1>
    <p>Här fick jag göra en api som jag har gjort för fast med datum också.</p>
    <div class="image-slider">
        <img :src="currentImage">
    <button @click="nextImage">Nästa</button>
</div>
<h2>Resultatet</h2>
<img src="@/assets/BloggAPISQL/BloggAPISQLRes.jpg" alt="">
</template>

<script>
import BloggAPIConnectionSQL from '@/assets/BloggAPISQL/BloggAPIConnectionSQL.jpg';
import BloggAPIConnectionSQL2 from '@/assets/BloggAPISQL/BloggAPIConnectionSQL2.jpg';
import BloggAPIConnectionSQL3 from '@/assets/BloggAPISQL/BloggAPIConnectionSQL3.jpg';
import BloggAPIConnectionSQL4 from '@/assets/BloggAPISQL/BloggAPIConnectionSQL4.jpg';
import BloggApiContSQL1 from '@/assets/BloggAPISQL/BloggAPIContSQL1.jpg';
import BloggAPIContSQL2 from '@/assets/BloggAPISQL/BloggAPIContSQL2.jpg';
import BloggAPIModelSQL from '@/assets/BloggAPISQL/BloggAPIModelSQL.jpg';

export default {
    data() {
        
        return {
           
            images: [
                BloggAPIConnectionSQL,
                BloggAPIConnectionSQL2,
                BloggAPIConnectionSQL3,
                BloggAPIConnectionSQL4,
                BloggApiContSQL1,
                BloggAPIContSQL2,
                BloggAPIModelSQL
                
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