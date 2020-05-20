<template>
<div class="main-panel">
	<center>
        <div class="text-center">
		  <br>
          <h1 class="title text-danger">Application Portal</h1>
        </div>
	</center>
	<div>
		<base-button style="float:left;margin-left:20px" class="animation-on-hover" type="primary" v-on:click="getngo">Get NGO Internships</base-button>
		<base-button style="float:left;margin-left:20px" class="animation-on-hover" type="warning" v-on:click="getrd">Get R&D Internships</base-button>
		<base-button type="success" style="float:right; margin-right:20px" v-on:click="logout">Logout</base-button>
    </div>
	<template>
		<div class="table-responsive">
		<br />
		<base-table :data="coms"
					:columns="columns"
					>
			<template slot="columns">
				<th class="text-center">Index</th>
				<th class="text-center">Name of Organisation</th>
				<th class="text-center">Job Profile</th>
				<th class="text-center">Description</th>
				<th class="text-center">Application URL</th>
				<th class="text-center">Deadline</th>
			</template>  
			<template slot-scope="{row}">
				<td class="text-center">{{row['Id']}}</td>
				<td class="text-center">{{row['Organization Name']}}</td>
				<td class="text-center"><a v-if="row['Job Profile']" target="blank"><base-button @click="prof=row['Job Profile'];modal1 = true" type="info">See Job Profile</base-button></a></td>
				<td class="text-center"><a v-if="row['Description']" target="blank"><base-button @click="desc=row['Description'];modal0 = true" type="primary">See Description</base-button></a></td>
				<td class="text-center"><a v-if="row['Application URL']" :href="row['Application URL']" target="blank"><base-button>Link</base-button></a></td>
				<td class="text-center">{{row['Deadline']}}</td>
			</template>    
		</base-table>
		</div>
	</template>
	<modal :show.sync="modal0">
		<template slot="header">
			<h5 class="modal-title" id="exampleModalLabel">Description</h5>
		</template>
		<div>
			{{desc}}
		</div>
		<template slot="footer">
			<base-button type="danger" @click="modal0 = false">Close</base-button>
		</template>
	</modal>
	<modal :show.sync="modal1">
		<template slot="header">
			<h5 class="modal-title" id="exampleModalLabel">Job Profile</h5>
		</template>
		<div>
			{{prof}}
		</div>
		<template slot="footer">
			<base-button type="danger" @click="modal1 = false">Close</base-button>
		</template>
	</modal>
</div>
</template>
<script>
import { BaseTable } from "@/components";
import firebase from 'firebase';
import { Modal } from "@/components";

export default{
  components : {
     BaseTable,
	 Modal
  },
	data() {
		return{
			desc: '',
			prof: '',
			columns:["Name of Organisation","Job Profile","Description","Application URL","Deadline"],
			coms:[],
			modal0: false,
			modal1: false,
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
		getngo : function(){
			this.$store.commit('load', true);
			this.$http.get('https://dem0-dd079.firebaseio.com/1EbtbfCsM32kj6aCPv5KXp_SEJ97WwkZO1TEf-wqrtbw/Sheet1.json').then(function(data){
				this.coms=data.body.slice(1,);
				this.$store.commit('load', false);
			},
			function(err){
				this.$notify({type: 'success', horizontalAlign: 'center', timeout: 10000, message: 'Something went wrong! Please try again.'});
				this.$store.commit('load', false);
			});
		},
		getrd : function(){
			this.$store.commit('load', true);
			this.$http.get('https://careerportal-816f6.firebaseio.com/1XegFXWx-mbsBYKj_ZQ3T9f0fP5MVZyXzCqaiRFNNw8M/Sheet1.json').then(function(data){
				this.coms=data.body.slice(1,);
				this.$store.commit('load', false);
			},
			function(err){
				this.$notify({type: 'success', horizontalAlign: 'center', timeout: 10000, message: 'Something went wrong! Please try again.'});
				this.$store.commit('load', false);
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
<style lang="scss">
::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}
/* Track */
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    -webkit-border-radius: 6px;
    border-radius: 6px;
}
/* Handle */
::-webkit-scrollbar-thumb {
    -webkit-border-radius: 6px;
    border-radius: 6px;
    background: #f81d1e; 
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
}
::-webkit-scrollbar-thumb:window-inactive {
    background: rgba(255,0,0,0.4); 
}
</style>