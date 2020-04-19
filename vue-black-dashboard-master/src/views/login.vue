<template>
  <div>
    <h1 class="title">Login Form</h1>
    <form>
      <card>
        <label>
          <h4>Email:</h4>
        </label>
        <base-input
          addon-left-icon="tim-icons icon-single-02"
          placeholder="Enter your email here"
          v-model="emp.email"
        ></base-input>
      </card>
      <br />>
      <card>
        <label>
          <h4>Password:</h4>
        </label>
        <base-input
          addon-left-icon="tim-icons icon-single-02"
          placeholder="Enter your password here"
          v-model="emp.pass"
        ></base-input>
      </card>
      <br />>
      <base-button class="animation-on-hover" type="success" v-on:click="conn">Login</base-button>
    </form>
    <br/><br/>>
    <h3>Not Registered Yet?<router-link to="/signup">Click Here to Register</router-link></h3>
  </div>
</template>
<script>
import firebase from 'firebase';
export default{
data() {
return{
emp:{
email:'',
pass:'',
},
}
},
methods: {
    conn: function(){
      var _this=this;
        firebase.auth().signInWithEmailAndPassword(this.emp.email,this.emp.pass).then(
            function(user){
                alert('You are signed in now');
                _this.$router.replace('../pages/Dashboard');
            },
            function(err){
                alert('oopss!'+err.message);
            }
        );       
    }
}
}
</script>
<style>



</style>