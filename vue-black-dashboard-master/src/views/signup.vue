<template>
    <div>
        <h1 class="title">Signup Form</h1>
        <form>
            <card>
                <label><h4>Name:</h4></label>
            <base-input addon-left-icon="tim-icons icon-single-02" placeholder="Enter your name here" v-model="emp.name">
            </base-input>
            </card><br/>>
            <card>
                <label><h4>Email:</h4></label>
            <base-input addon-left-icon="tim-icons icon-single-02" placeholder="Enter your email here" v-model="emp.email">
            </base-input>
            </card><br/>>
            <card>
                <label><h4>Password:</h4></label>
            <base-input addon-left-icon="tim-icons icon-single-02" placeholder="Enter your password here" v-model="emp.pass">
            </base-input>
            </card><br/>>
            <base-button class="animation-on-hover" type="success" v-on:click="signup">Signup</base-button>
        </form>
        <br/>><br/>>
        <h3>Already Registered?<router-link to="/login">Sign in Here!</router-link></h3>
    </div>
</template>
<script>
import firebase from 'firebase';
export default{
data(){
return{
emp:{
name:'',
email:'',
pass:''
}
}
},
methods:{
signup: function(){
    firebase.auth().createUserWithEmailAndPassword(this.emp.email,this.emp.pass).then(
        function(user){
            alert('Your account has been created!');
        },
        function(err){
            alert('There was an error');
        }
    );
}
}
};
</script>
<style>





</style>