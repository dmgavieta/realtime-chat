<template lang="">
    <div>
        <button v-if="isLoggedIn" @click="toggleSignOut"> Sign Out </button>
    </div>
</template>
<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
export default {    
    name: "ChatPage",
    data(){
        return {
            isLoggedIn: false,
            user: null
        }
    },
    methods: {
        toggleSignOut(){
            const auth = getAuth();
            signOut(auth).then(() => {
                console.log(auth) 
            // Sign-out successful.
            }).catch((error) => {
            // An error happened.
           });
        },
        checkIfThereIsUser() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
            // User is signed in.
            this.isLoggedIn = true;
            this.user = user;
            console.log("User is signed in:", user);
            } else {
            // No user is signed in.
            this.isLoggedIn = false;
            this.user = null;
            console.log("No user is signed in.");
            }
        });
        }
    },
    mounted() {
        this.checkIfThereIsUser();
    },
    
}
</script>
<style lang="">
    
</style>