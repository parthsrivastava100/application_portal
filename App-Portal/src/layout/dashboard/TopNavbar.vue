<template>
  <nav class="navbar navbar-expand-lg navbar-absolute"
       :class="{'bg-white': showMenu, 'navbar-transparent': !showMenu}">
    <div class="container-fluid">
      <div class="navbar-wrapper">
        <div class="navbar-toggle d-inline" :class="{toggled: $sidebar.showSidebar}">
          <button type="button"
                  class="navbar-toggler"
                  aria-label="Navbar toggle button"
                  @click="toggleSidebar">
            <span class="navbar-toggler-bar bar1"></span>
            <span class="navbar-toggler-bar bar2"></span>
            <span class="navbar-toggler-bar bar3"></span>
          </button>
        </div>
        <a class="navbar-brand" href="#/dashboard">Career Portal</a>
      </div>
      <button class="navbar-toggler" type="button"
              @click="toggleMenu"
              data-toggle="collapse"
              data-target="#navigation"
              aria-controls="navigation-index"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-bar navbar-kebab"></span>
        <span class="navbar-toggler-bar navbar-kebab"></span>
        <span class="navbar-toggler-bar navbar-kebab"></span>
      </button>

      <collapse-transition>
        <div class="collapse navbar-collapse show" v-show="showMenu">
          <ul class="navbar-nav" :class="$rtl.isRTL ? 'mr-auto' : 'ml-auto'">
            <div class="search-bar input-group" @click="searchModalVisible = true">
              <!-- <input type="text" class="form-control" placeholder="Search...">
              <div class="input-group-addon"><i class="tim-icons icon-zoom-split"></i></div> -->
              <button class="btn btn-link" id="search-button" data-toggle="modal" data-target="#searchModal">
				<a slot="title" href="javascript:void(0);" class="nav-link" aria-expanded="true">
                <i class="tim-icons icon-zoom-split"></i>
                <p class="d-lg-none">
                  Search
                </p>
              </a>
              </button>
			  
              <!-- You can choose types of search input -->
            </div>
            <modal :show.sync="searchModalVisible"
                   class="modal-search"
                   id="searchModal"
                   :centered="false"
                   :show-close="true">
              <input slot="header" :value="$store.state.search" v-focus="true" v-on:input="$store.commit('reset_page');sendquery($event.target.value)" type="text" class="form-control" id="inlineFormInputGroup" placeholder="SEARCH BY NAME, BATCH OR AREA OF EXPERTISE" />
            </modal>
            <base-dropdown tag="li"
                           :menu-on-right="!$rtl.isRTL"
                           title-tag="a" class="nav-item">
              <a slot="title" href="javascript:void(0);" class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="true">
                <i class="tim-icons icon-cloud-download-93" style="margin-top:6px"></i>
                <p class="d-lg-none">
                  Reload
                </p>
              </a>
              <li class="nav-link">
                <base-button type="info" @click="$router.go()">Reload Page</base-button>
              </li>
			  <div class="dropdown-divider"></div>
			  <li class="nav-link">
                <base-button type="success" @click="reloadData">Reload Data</base-button>
              </li>
            </base-dropdown>
            <base-dropdown tag="li"
                           :menu-on-right="!$rtl.isRTL"
                           title-tag="a"
                           class="nav-item"
                           menu-classes="dropdown-navbar">
              <a slot="title" href="javascript:void(0);" class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="true">
                <div class="photo">
                  <img src="img/anime3.png">
                </div>
                <b class="caret d-none d-lg-block d-xl-block"></b>
                <p class="d-lg-none">
                  User Options
                </p>
              </a>
              <li class="nav-link">
                <a href="javascript:void(0);" class="nav-item dropdown-item">Profile</a>
              </li>
              <li class="nav-link">
                <a href="javascript:void(0);" class="nav-item dropdown-item">Settings</a>
              </li>
              <div class="dropdown-divider"></div>
              <li class="nav-link">
                <base-button type="danger" @click="signOut">Sign Out</base-button>
              </li>
            </base-dropdown>
          </ul>
        </div>
      </collapse-transition>
    </div>
  </nav>
</template>
<script>
  import { CollapseTransition } from 'vue2-transitions';
  import firebase from 'firebase';
  import { focus } from 'vue-focus';
  import Modal from '@/components/Modal';

  export default {
    directives: {
	  focus: focus
	},
    components: {
      CollapseTransition,
      Modal
    },
    computed: {
      routeName() {
        const { name } = this.$route;
        return this.capitalizeFirstLetter(name);
      },
      isRTL() {
        return this.$rtl.isRTL;
      }
    },
    data() {
      return {
        activeNotifications: false,
        showMenu: false,
        searchModalVisible: false,
        searchQuery: ''
      };
    },
    methods: {
	  signOut: function() {
	    firebase.auth().signOut().then(() => {
		  this.$store.commit('set_dataloaded', false);
		  this.$router.replace('login')
		});
	  },
      capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      },
      toggleNotificationDropDown() {
        this.activeNotifications = !this.activeNotifications;
      },
      closeDropDown() {
        this.activeNotifications = false;
      },
      toggleSidebar() {
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
      },
      hideSidebar() {
        this.$sidebar.displaySidebar(false);
      },
      toggleMenu() {
        this.showMenu = !this.showMenu;
      },
	  sendquery(query) {
		this.$store.commit('searchQuery', query)
	  },
	  reloadData () {
		this.$store.commit('load', true);
		var rawdata = [];
		var _this = this;
		const db = firebase.firestore();
		db.collection('col').doc('data').get().then(function(doc) {
			if (doc.exists) {
				const fetched = doc.data();
				rawdata = Object.keys(fetched).map(key => {
					return fetched[key];
				});
			_this.$store.commit('set_users', rawdata);
		}
		});
		this.$store.commit('load', false);
	  },
    },
  };
</script>
<style>
</style>
