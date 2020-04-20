<template>
  <div>
	<div class="container1">
      <div class="row">
        <div class="col-md-12 text-center">
          <card type="secondary"
                  header-classes="bg-white pb-5"
                  body-classes="px-lg-5 py-lg-5"
                  class="border-0 mb-0">
                <template>
                    <div class="text-muted text-center mb-3">
                        <small>If you are not registered and are a part of IITK Community...</small>
                    </div>
                    <div class="btn-wrapper text-center">
                        <a href="#/register">
						<base-button type="success">
                            Register
                        </base-button>
						</a>
                    </div>
                </template>
                <template>
                    <div class="text-center text-muted mb-4">
                        <small>Or sign in with your credentials</small>
                    </div>
                    <form role="form">
                        <base-input alternative
                                    :class="this.wrong ? 'has-danger mb-3' : 'mb-3'"
									v-model="email"
									v-on:keyup.enter="signIn"
                                    placeholder="Registered Email"
									autocomplete="username"
                                    addon-left-icon="tim-icons icon-email-85">
                        </base-input>
                        <base-input alternative
									ref="pass"
									:class="this.wrong ? 'has-danger' : ''"
                                    type="password"
									v-model="password"
									v-on:keyup.enter="signIn"
                                    placeholder="Password"
									autocomplete="current-password"
                                    addon-left-icon="tim-icons icon-key-25">
                        </base-input>
                        <base-checkbox v-model="remember">
                            Remember me
                        </base-checkbox>
                        <div class="text-center">
                            <base-button type="danger" class="my-4" v-on:click="signIn">Sign In</base-button>
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
		remember: true,
        year: new Date().getFullYear(),
		email: '',
		password: '',
		wrong: false,
      }
    },
	methods: {
	  signIn: function() {
		this.$store.commit('load', true);
		if (!this.remember) {
			firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then(function() {}).catch(function(error){
				console.log("Failed to set persistence: " + error.message)
			});
		}
		var _this = this;
		firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
		  function(user) {
			_this.checkEmail();
		  },
		  function(err) {
			_this.$notify({type: 'danger', horizontalAlign: 'center', message: 'Invalid Email or Password!'})
			_this.wrong = true;
			this.$store.commit('load', false);
		  }
		);
	  },
	  checkEmail: function() {
		var user = firebase.auth().currentUser;
		if (!user.emailVerified) {
		  this.$notify({type: 'danger', horizontalAlign: 'center', timeout: 10000, message: 'Your Email has not yet been verified!'});
		  this.$store.commit('load', false);
		} else {
		  this.$router.replace('portal');
		}
	  }
	},
  };
</script>
