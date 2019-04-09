<template>
  <div class="container">
    <div class="row py-5">
      <div class="col-md-9"></div>
      <div class="col-md-3">
        <select name id class="form-control">
          <option @click="console">20</option>
        </select>
        <button type="submit" class="btn btn-primary mb-2">
          <i class="icon ion-ios-search"></i> Search
        </button>
      </div>
    </div>
    <div class="row no-gutters">
      <router-link :to="{ path: 'register', query: { plan: 'private' }}">Register</router-link>

      <div
        v-show="images !== []"
        class="col-lg-3 col-md-4 col-sm-6"
        v-bind:key="image.id"
        v-for="image in images"
      >
        <img :src="image.src.portrait" class="img-fluid shadow">
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "results",

  data() {
    return {
      images: [],
      perPage: 20
    };
  },

  methods: {
    console() {
      console.log("Working");
    }
  },

  created() {
    axios
      .get("https://api.pexels.com/v1/search", {
        params: { query: this.$route.query.name, per_page: this.perPage },
        headers: {
          Authorization:
            "563492ad6f917000010000019947b910345d44b3ba2ae55c2de88973"
        }
      })
      .then(res => (this.images = res.data.photos))
      .catch(err => console.log(err));
  }
};
</script>

<style scoped>
</style>
