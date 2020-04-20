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
                        <center><h2>Register</h2></center>
						<hr style="border-top: 1px solid white" />
                    </div>
                </template>
                <template>
                    <div class="text-center text-muted mb-4">
                        <p style="color:white">!!! Only IITK Emails Authorized !!!</p>
                    </div>
                    <form role="form">
						<div class="row">
							<div class="col">
								<base-input label="First Name" v-model="fname" type="text" placeholder="First name"/>
							</div>
							<div class="col">
								<base-input label="Last Name" v-model="lname" type="text" placeholder="Last name"/>
							</div>
						</div>
                        <base-input alternative
                                    :class="this.e1 ? 'has-danger mb-3' : 'mb-3'"
									v-model="email"
									v-on:keyup.enter="registerUser"
                                    placeholder="Email"
									autocomplete="username"
                                    addon-left-icon="tim-icons icon-email-85">
                        </base-input>
                        <base-input alternative
									:class="this.e2 ? 'has-danger' : ''"
                                    type="password"
									v-model="password"
									v-on:keyup.enter="registerUser"
                                    placeholder="Password"
									autocomplete="current-password"
                                    addon-left-icon="tim-icons icon-key-25">
                        </base-input>
						<base-input alternative
									:class="this.e3 ? 'has-danger' : ''"
                                    type="password"
									v-model="confPassword"
									v-on:keyup.enter="registerUser"
                                    placeholder="Confirm Password"
									autocomplete="current-password"
                                    addon-left-icon="tim-icons icon-key-25">
                        </base-input>
                        <div class="text-center">
                            <base-button type="primary" class="my-4" v-on:click="registerUser">Register</base-button>
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
		fname: '',
		lname: '',
		email: '',
		password: '',
		confPassword: '',
		e1: false,
		e2: false,
		e3: false,
      }
    },
	methods: {
	  registerUser: function() {
		if (this.fname.trim().length == 0 || this.lname.trim().length == 0 || this.email.trim().length == 0 || this.password.trim().length == 0 || this.confPassword.trim().length == 0) {
			this.$notify({type: 'danger', horizontalAlign: 'center', message: 'All fields are necessary!'});
			return;
		}
		if (this.email.toLowerCase().search('@iitk.ac.in') > -1) {
			if (this.confPassword == this.password){
				var _this = this;
				firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
				  function(user) {
					_this.sendEmail();
				  },
				  function(err) {
					_this.$notify({type: 'danger', horizontalAlign: 'center', message: 'Unknown Error!'});
				  }
				);
			} else {
				this.$notify({type: 'danger', horizontalAlign: 'center', message: 'Password re-entered is different!'});
				this.e3 = true;
				this.e2 = true;
			}
		} else {
			this.$notify({type: 'danger', horizontalAlign: 'center', message: 'Email is not Authorized!'});
			this.e1 = true;
		}
	  },
	  sendEmail: function() {
		var user = firebase.auth().currentUser;
		var _this = this;
		user.sendEmailVerification().then(function() {
		  _this.$notify({type: 'success', horizontalAlign: 'center', message: 'Verification Email Sent!'});
		}).catch(function(error) {
		  _this.$notify({type: 'danger', horizontalAlign: 'center', message: 'Unknown error, please re-register!'});
		});
		firebase.auth().signOut().then(() => {
		  _this.$router.replace('login');
		});
	  }
	},
  };
</script>
