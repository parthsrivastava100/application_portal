<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links">
		<div @click="$store.state.isVisible1=!$store.state.isVisible1" style="border-style:groove">
        <sidebar-link to="" :name="String('Year of Graduation')" icon="tim-icons icon-bank"/>
		</div>
		<collapse-transition>
		<div v-show="$store.state.isVisible1">
			<base-checkbox style="padding-left:40px;padding-top:5px;color:white;border-color:white" class="mb-3" v-model="$store.state.checkboxes.y2019" :disabled="$store.state.checkShow ? false : true">
				2019
			</base-checkbox>
			<base-checkbox style="padding-left:40px;padding-top:5px;color:white;border-color:white" class="mb-3" v-model="$store.state.checkboxes.y2018" :disabled="$store.state.checkShow ? false : true">
				2018
			</base-checkbox>
			<base-checkbox style="padding-left:40px;padding-top:5px;color:white;border-color:white" class="mb-3" v-model="$store.state.checkboxes.y2017" :disabled="$store.state.checkShow ? false : true">
				2017
			</base-checkbox>
			<base-input class="col-md-10" style="margin-left:25px">
                <select id="inputState" :disabled="$store.state.checkShow ? false : true" class="form-control" style="color:white;border-color:white">
                  <option selected>Choose Graduation Year</option>
                  <option>...</option>
                </select>
			</base-input>
		</div>
		</collapse-transition>
		<div @click="$store.state.isVisible2=!$store.state.isVisible2" style="border-style:groove">
			<sidebar-link to="" :name="String('Division/Department')" icon="tim-icons icon-badge"/>
		</div>
		<collapse-transition>
		<div v-show="$store.state.isVisible2">
			<base-checkbox style="padding-left:40px;padding-top:5px;color:white;border-color:white" class="mb-3" v-model="$store.state.checkboxes.y2019" :disabled="$store.state.checkShow ? false : true">
				2019
			</base-checkbox>
			<base-checkbox style="padding-left:40px;padding-top:5px;color:white;border-color:white" class="mb-3" v-model="$store.state.checkboxes.y2018" :disabled="$store.state.checkShow ? false : true">
				2018
			</base-checkbox>
			<base-checkbox style="padding-left:40px;padding-top:5px;color:white;border-color:white" class="mb-3" v-model="$store.state.checkboxes.y2017" :disabled="$store.state.checkShow ? false : true">
				2017
			</base-checkbox>
			<base-input class="col-md-10" style="margin-left:25px">
                <select id="inputState" :disabled="$store.state.checkShow ? false : true" class="form-control" style="color:white;border-color:white">
                  <option selected>Choose Graduation Year</option>
                  <option>...</option>
                </select>
			</base-input>
		</div>
		</collapse-transition>
		<div @click="$store.state.isVisible3=!$store.state.isVisible3" style="border-style:groove">
			<sidebar-link to="" :name="String('Degree')" icon="tim-icons icon-book-bookmark"/>
		</div>
		<collapse-transition>
		<div v-show="$store.state.isVisible3">
			<base-checkbox style="padding-left:40px;padding-top:5px;color:white;border-color:white" class="mb-3" v-model="$store.state.checkboxes.y2019" :disabled="$store.state.checkShow ? false : true">
				2019
			</base-checkbox>
			<base-checkbox style="padding-left:40px;padding-top:5px;color:white;border-color:white" class="mb-3" v-model="$store.state.checkboxes.y2018" :disabled="$store.state.checkShow ? false : true">
				2018
			</base-checkbox>
			<base-checkbox style="padding-left:40px;padding-top:5px;color:white;border-color:white" class="mb-3" v-model="$store.state.checkboxes.y2017" :disabled="$store.state.checkShow ? false : true">
				2017
			</base-checkbox>
			<base-input class="col-md-10" style="margin-left:25px">
                <select id="inputState" :disabled="$store.state.checkShow ? false : true" class="form-control" style="color:white;border-color:white">
                  <option selected>Choose Graduation Year</option>
                  <option>...</option>
                </select>
			</base-input>
		</div>
		</collapse-transition>
		<div @click="$store.state.isVisible4=!$store.state.isVisible4" style="border-style:groove">
			<sidebar-link to="" :name="String('Company')" icon="tim-icons icon-coins"/>
		</div>
		<collapse-transition>
		<div v-show="$store.state.isVisible4">
			<base-checkbox style="padding-left:40px;padding-top:5px;color:white;border-color:white" class="mb-3" v-model="$store.state.checkboxes.y2019" :disabled="$store.state.checkShow ? false : true">
				2019
			</base-checkbox>
			<base-checkbox style="padding-left:40px;padding-top:5px;color:white;border-color:white" class="mb-3" v-model="$store.state.checkboxes.y2018" :disabled="$store.state.checkShow ? false : true">
				2018
			</base-checkbox>
			<base-checkbox style="padding-left:40px;padding-top:5px;color:white;border-color:white" class="mb-3" v-model="$store.state.checkboxes.y2017" :disabled="$store.state.checkShow ? false : true">
				2017
			</base-checkbox>
			<base-input class="col-md-10" style="margin-left:25px">
                <select id="inputState" :disabled="$store.state.checkShow ? false : true" class="form-control" style="color:white;border-color:white">
                  <option selected>Choose Graduation Year</option>
                  <option>...</option>
                </select>
			</base-input>
		</div>
		</collapse-transition>
		<div @click="$store.state.isVisible5=!$store.state.isVisible5" style="border-style:groove">
			<sidebar-link to="" :name="String('Current Location')" icon="tim-icons icon-square-pin"/>
		</div>
		<collapse-transition>
		<div v-show="$store.state.isVisible5">
			<base-checkbox style="padding-left:40px;padding-top:5px;color:white;border-color:white" class="mb-3" v-model="$store.state.checkboxes.y2019" :disabled="$store.state.checkShow ? false : true">
				2019
			</base-checkbox>
			<base-checkbox style="padding-left:40px;padding-top:5px;color:white;border-color:white" class="mb-3" v-model="$store.state.checkboxes.y2018" :disabled="$store.state.checkShow ? false : true">
				2018
			</base-checkbox>
			<base-checkbox style="padding-left:40px;padding-top:5px;color:white;border-color:white" class="mb-3" v-model="$store.state.checkboxes.y2017" :disabled="$store.state.checkShow ? false : true">
				2017
			</base-checkbox>
			<base-input class="col-md-10" style="margin-left:25px">
                <select id="inputState" :disabled="$store.state.checkShow ? false : true" class="form-control" style="color:white;border-color:white">
                  <option selected>Choose Graduation Year</option>
                  <option>...</option>
                </select>
			</base-input>
		</div>
		</collapse-transition>
		<div @click="$store.state.isVisible6=!$store.state.isVisible6" style="border-style:groove">
			<sidebar-link to="" :name="String('Hometown')" icon="tim-icons icon-globe-2"/>
		</div>
		<collapse-transition>
		<div v-show="$store.state.isVisible6">
			<base-checkbox style="padding-left:40px;padding-top:5px;color:white;border-color:white" class="mb-3" v-model="$store.state.checkboxes.y2019" :disabled="$store.state.checkShow ? false : true">
				2019
			</base-checkbox>
			<base-checkbox style="padding-left:40px;padding-top:5px;color:white;border-color:white" class="mb-3" v-model="$store.state.checkboxes.y2018" :disabled="$store.state.checkShow ? false : true">
				2018
			</base-checkbox>
			<base-checkbox style="padding-left:40px;padding-top:5px;color:white;border-color:white" class="mb-3" v-model="$store.state.checkboxes.y2017" :disabled="$store.state.checkShow ? false : true">
				2017
			</base-checkbox>
			<base-input class="col-md-10" style="margin-left:25px">
                <select id="inputState" :disabled="$store.state.checkShow ? false : true" class="form-control" style="color:white;border-color:white">
                  <option selected>Choose Graduation Year</option>
                  <option>...</option>
                </select>
			</base-input>
		</div>
		</collapse-transition>
		<div @click="$store.state.isVisible7=!$store.state.isVisible7" style="border-style:groove">
			<sidebar-link to="" :name="String('Designation')" icon="tim-icons icon-single-02"/>
		</div>
		<collapse-transition>
		<div v-show="$store.state.isVisible7">
			<base-checkbox style="padding-left:40px;padding-top:5px;color:white;border-color:white" class="mb-3" v-model="$store.state.checkboxes.y2019" :disabled="$store.state.checkShow ? false : true">
				2019
			</base-checkbox>
			<base-checkbox style="padding-left:40px;padding-top:5px;color:white;border-color:white" class="mb-3" v-model="$store.state.checkboxes.y2018" :disabled="$store.state.checkShow ? false : true">
				2018
			</base-checkbox>
			<base-checkbox style="padding-left:40px;padding-top:5px;color:white;border-color:white" class="mb-3" v-model="$store.state.checkboxes.y2017" :disabled="$store.state.checkShow ? false : true">
				2017
			</base-checkbox>
			<base-input class="col-md-10" style="margin-left:25px">
                <select id="inputState" :disabled="$store.state.checkShow ? false : true" class="form-control" style="color:white;border-color:white">
                  <option selected>Choose Graduation Year</option>
                  <option>...</option>
                </select>
			</base-input>
		</div>
		</collapse-transition>
		<div @click="$store.state.isVisible8=!$store.state.isVisible8" style="border-style:groove">
			<sidebar-link to="" :name="String('Work Industry')" icon="tim-icons icon-credit-card"/>
		</div>
		<collapse-transition>
		<div v-show="$store.state.isVisible8">
			<base-checkbox style="padding-left:40px;padding-top:5px;color:white;border-color:white" class="mb-3" v-model="$store.state.checkboxes.y2019" :disabled="$store.state.checkShow ? false : true">
				2019
			</base-checkbox>
			<base-checkbox style="padding-left:40px;padding-top:5px;color:white;border-color:white" class="mb-3" v-model="$store.state.checkboxes.y2018" :disabled="$store.state.checkShow ? false : true">
				2018
			</base-checkbox>
			<base-checkbox style="padding-left:40px;padding-top:5px;color:white;border-color:white" class="mb-3" v-model="$store.state.checkboxes.y2017" :disabled="$store.state.checkShow ? false : true">
				2017
			</base-checkbox>
			<base-input class="col-md-10" style="margin-left:25px">
                <select id="inputState" :disabled="$store.state.checkShow ? false : true" class="form-control" style="color:white;border-color:white">
                  <option selected>Choose Graduation Year</option>
                  <option>...</option>
                </select>
			</base-input>
		</div>
		</collapse-transition>
		<div @click="$store.state.isVisible9=!$store.state.isVisible9" style="border-style:groove">
			<sidebar-link to="" :name="String('Skills')" icon="tim-icons icon-laptop"/>
		</div>
		<collapse-transition>
		<div v-show="$store.state.isVisible9">
			<base-checkbox style="padding-left:40px;padding-top:5px;color:white;border-color:white" class="mb-3" v-model="$store.state.checkboxes.y2019" :disabled="$store.state.checkShow ? false : true">
				2019
			</base-checkbox>
			<base-checkbox style="padding-left:40px;padding-top:5px;color:white;border-color:white" class="mb-3" v-model="$store.state.checkboxes.y2018" :disabled="$store.state.checkShow ? false : true">
				2018
			</base-checkbox>
			<base-checkbox style="padding-left:40px;padding-top:5px;color:white;border-color:white" class="mb-3" v-model="$store.state.checkboxes.y2017" :disabled="$store.state.checkShow ? false : true">
				2017
			</base-checkbox>
			<base-input class="col-md-10" style="margin-left:25px">
                <select id="inputState" :disabled="$store.state.checkShow ? false : true" class="form-control" style="color:white;border-color:white">
                  <option selected>Choose Graduation Year</option>
                  <option>...</option>
                </select>
			</base-input>
		</div>
		</collapse-transition>
		<div @click="$store.state.isVisible10=!$store.state.isVisible10" style="border-style:groove">
			<sidebar-link to="" :name="String('Hostel')" icon="tim-icons icon-atom"/>
		</div>
		<collapse-transition>
		<div v-show="$store.state.isVisible10">
			<base-checkbox style="padding-left:40px;padding-top:5px;color:white;border-color:white" class="mb-3" v-model="$store.state.checkboxes.y2019" :disabled="$store.state.checkShow ? false : true">
				2019
			</base-checkbox>
			<base-checkbox style="padding-left:40px;padding-top:5px;color:white;border-color:white" class="mb-3" v-model="$store.state.checkboxes.y2018" :disabled="$store.state.checkShow ? false : true">
				2018
			</base-checkbox>
			<base-checkbox style="padding-left:40px;padding-top:5px;color:white;border-color:white" class="mb-3" v-model="$store.state.checkboxes.y2017" :disabled="$store.state.checkShow ? false : true">
				2017
			</base-checkbox>
			<base-input class="col-md-10" style="margin-left:25px">
                <select id="inputState" :disabled="$store.state.checkShow ? false : true" class="form-control" style="color:white;border-color:white">
                  <option selected>Choose Graduation Year</option>
                  <option>...</option>
                </select>
			</base-input>
		</div>
		</collapse-transition>
      </template>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
  
</template>
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
    background: #ff2929; 
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
}
::-webkit-scrollbar-thumb:window-inactive {
    background: rgba(255,0,0,0.4); 
}
</style>
<script>
import { CollapseTransition } from 'vue2-transitions';
import TopNavbar from "./TopNavbar.vue";
import firebase from "firebase";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu";
export default {
  data() {
	return {
		
	};
  },
  components: {
    CollapseTransition,
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
  }
};
</script>
