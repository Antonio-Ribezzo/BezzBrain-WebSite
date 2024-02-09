<script>
    import { store } from '../store';

    export default {
        name: 'ContactsPage',
        data(){
            return{
                store,
                name:'',
                email:'',
                message:'',
                success: false,
                errors: {}
            }
        }
    }
</script>

<template>
   <div class="container mb-5 d-flex flex-column justify-content-start align-items-between">
        <!-- <h1 class="text-center m-0">get in touch</h1> -->
        <img src="/img/mail-animation-copy.gif" alt="mail-animated">
        <form  class="d-flex flex-column align-items-between"
            name="contact"
            action="/"
            method="POST"
            data-netlify="true"
            @submit.prevent="handleSubmit"
        >   
            <input type="hidden" name="form-name" value="contact">
            <div class="mb-3">
                <label for="" class="form-label">Name</label>
                <input v-model="name" name="name" type="text" class="form-control" id="user-name" placeholder="...name..." required>
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Email</label>
                <input v-model="email" name="email" type="email" class="form-control" id="user-email" placeholder="...email..." required>
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Message</label>
                <textarea v-model="message" name="message" class="form-control" id="user-message" rows="5" placeholder="...message..." required></textarea>
            </div>
            <button class="btn btn-outline-dark mt-1 mb-4 align-self-center" type="submit">Send</button>
        </form>
   </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Reenie+Beanie&display=swap');

.form-control:focus {
  border-color: rgb(221, 107, 0);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgb(221, 107, 0);
}
.container{
    h1, button{
        font-family: 'Amatic SC', cursive;
        color: black;
    }
    img{
        margin: 0 auto;
        width: 200px;
        height: 200px;
    }
    form{
        div{
            label{
                font-family: 'Amatic SC', cursive;
                font-size: 1.5rem;
                color: black;
            }
            input, textarea{
                background-color: #ecedee;
                border: 0.5px solid black;
                font-family: 'Reenie Beanie', cursive;
                font-size: 1.5rem;
                color: rgb(221, 107, 0);
            }
        }
        button{
            &:hover{
                color: white;
            }
        }
    }
}

@media screen and (max-width: 570px) {
 .container{
    h1{
        font-size: 3rem;
    }
    img{
        width: 150px;
        height: 150px;
    }
 }
}

@media screen and (min-width: 571px) and (max-width: 767px) {
 .container{
    h1{
        font-size: 3rem;
    }
    img{
        width: 200px;
        height: 200px;
    }
 }    
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
 .container{
    h1{
        font-size: 3rem;
    }
    img{
        width: 250px;
        height: 250px;
    }
 }    
}

@media screen and (min-width: 1024px) {
 .container{
    h1{
        font-size: 4rem;
    }
    img{
        width: 300px;
        height: 300px;
    }
 }    
}
    
</style>