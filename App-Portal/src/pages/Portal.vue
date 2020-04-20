<template>
<div>
<center>
<h1 class="title"><br />Application Portal</h1>
</center>
<base-button type="success" style="float:right; margin-right:20px" v-on:click="logout">Logout</base-button>
<h1 class="title" style="margin-left:20px">Data Table</h1>
 <center><base-button class="animation-on-hover" type="warning" v-on:click="gett">Get Data</base-button></center><br />
<base-table :data="coms"
            :columns="columns">
        <template slot="columns">
         <th>Index</th>
          <th>Name of Organisation</th>
          <th>Job Profile</th>
          <th>Description</th>
          <th class="text-right">Application URL</th>
          <th class="text-right">Deadline</th>
        </template>  
        <template slot-scope="{row}">
          <td>{{row['Id']}}</td>
          <td>{{row['Organization Name']}}</td>
          <td>{{row['Job Profile']}}</td>
          <td>{{row['Description']}}</td>
          <td>{{row['Application URL']}}</td>
          <td>{{row['Deadline']}}</td>
         
        </template>    
</base-table>
</div>
</template>

<script>
import { BaseTable } from "@/components";
import firebase from 'firebase';

export default{
  components : {
     BaseTable 
  },
data() {
  return{
    columns:["Name of Organisation","Job Profile","Description","Application URL","Deadline"],
    coms:[],
   com:{
     Organization:'',
     Profile:'',
     Description:'',
     App_form:'',
     Deadline:''
   }
  }
},
methods : {
gett : function(){
this.$http.get('https://dem0-dd079.firebaseio.com/1EbtbfCsM32kj6aCPv5KXp_SEJ97WwkZO1TEf-wqrtbw/Sheet1.json').then(function(data){
this.coms=data.body.slice(1,);
});
},
logout : function(){
firebase.auth().signOut().then(() => {
this.$router.replace('login');
})
}
}
}
</script>
<style>
</style>