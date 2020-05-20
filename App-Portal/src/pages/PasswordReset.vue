<template>
  <div>
	<div class="container1">
      <div class="row">
        <div class="col-md-12">
          <card type="secondary"
                  header-classes="bg-white pb-5"
                  body-classes="px-lg-5 py-lg-5"
                  class="border-0 mb-0">
                <template>
                    <div class="text-muted text-center mb-3">
                        <center><h2>Reset Your Password</h2></center>
						<hr style="border-top: 1px solid white" />
                    </div>
                </template>
                <template>
                    <form role="form">
                        <base-input alternative
                                    :class="this.e1 ? 'has-danger mb-3' : 'mb-3'"
									v-model="email"
									v-on:keyup.enter="reset"
                                    placeholder="Registered Email"
									autocomplete="username"
                                    addon-left-icon="tim-icons icon-email-85">
                        </base-input>
						<base-input alternative
                                    :class="this.e2 ? 'has-danger mb-3' : 'mb-3'"
									v-model="confemail"
									v-on:keyup.enter="reset"
                                    placeholder="Confirm Email"
									autocomplete="username"
                                    addon-left-icon="tim-icons icon-email-85">
                        </base-input>
                        <div class="text-center">
                            <base-button type="primary" class="my-4" v-on:click="reset">Reset Password</base-button>
                        </div>
                    </form>
                </template>
            </card>
        </div>
      </div>
	</div>
  </div>
</template>
<style>

</style>
<script>
  import firebase from "firebase";
  export default {
    data() {
      return {
        year: new Date().getFullYear(),
		email: '',
		confemail: '',
		e1: false,
		e2: false,
      }
    },
	methods: {
	  reset: function() {
		var user = firebase.auth().currentUser;
		if (this.email.trim().length == 0 || this.confemail.trim().length == 0) {
		  this.$notify({type: 'danger', horizontalAlign: 'center', message: 'All fields are necessary!'});
		  return;
		}
		if (this.email.toLowerCase().search('@iitk.ac.in') > -1) {
		  if(this.confemail == this.email) {
		    var _this = this;
		    firebase.auth().sendPasswordResetEmail(_this.email).then(function() {
		      _this.$notify({type: 'success', horizontalAlign: 'center', message: 'Email for Password reset sent'});
		    }).catch(function(error) {
		      _this.$notify({type: 'danger', horizontalAlign: 'center', message: 'Error! Please retry...'});
		    });
			if(user) {
			  this.$router.replace('portal');
			} else {
			  this.$router.replace('login');
			}
		  } else {
		    this.$notify({type: 'danger', horizontalAlign: 'center', message: 'Email re-entered is different!'});
		    this.e2 = true;
		    this.e1 = false;
		  }
		} else {
		  this.$notify({type: 'danger', horizontalAlign: 'center', message: 'Invalid Email!'});
		  this.e1 = true;
		  this.e2 = true;
		}
	  },
	},
  };
</script>
