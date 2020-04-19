<template>
<div>
<h1 class="title">Application Portal</h1>
<base-button type="success" v-on:click="logout">Logout</base-button>
<form>
<card>
  <base-input addon-left-icon="tim-icons icon-single-02" placeholder="Enter the organisation name"  v-model="com.Organization">
  </base-input>
</card>
<card>
  <base-input addon-left-icon="fab fa-dribbble" placeholder="Enter the organisation profile" v-model="com.Profile">
  </base-input>
</card>
<card>
  <base-input addon-left-icon="fab fa-dribbble" placeholder="Enter the Organisation Description" v-model="com.Description">
  </base-input>
</card>
<card>
  <base-input addon-left-icon="fab fa-dribbble" placeholder="Enter the Application form URL" v-model="com.App_form">
  </base-input>
</card>
<card>
  <base-input addon-left-icon="fab fa-dribbble" placeholder="Enter the Application form deadline" v-model="com.Deadline">
  </base-input>
</card>
 <base-button type="success" v-on:click="post">Submit the Data</base-button>
</form>
<h1 class="title">Data Table</h1>
 <base-button class="animation-on-hover" type="warning" v-on:click="gett">Get Data</base-button>
<base-table :data="coms"
            :columns="columns">
        <template slot="columns">
         
          <th>Name of Organisation</th>
          <th>Job Profile</th>
          <th>Description</th>
          <th class="text-right">Application URL</th>
          <th class="text-right">Deadline</th>
        </template>  
        <template slot-scope="{row}">
          <td>{{row.Organization}}</td>
          <td>{{row.Profile}}</td>
          <td>{{row.Description}}</td>
          <td>{{row.App_form}}</td>
          <td>{{row.Deadline}}</td>
         
        </template>    
</base-table>
</div>
</template>

<script>
import { BaseTable } from "@/components";
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
post : function(){
this.$http.post('https://dem0-dd079.firebaseio.com/posts.json',this.com).then(function(data){
  console.log(data);
  this.com.Organization='';
  this.com.Profile='';
  this.com.Description='';
  this.com.App_form='';
  this.com.Deadline='';
});
},
gett : function(){
this.$http.get('https://dem0-dd079.firebaseio.com/posts.json').then(function(data){
this.coms=data.body;
});
},
logout : function(){
firebase.auth().signOut().then(() => {
this.$router.replace('../views/login.vue');
})
}
}
}
</script>
<style>
</style>