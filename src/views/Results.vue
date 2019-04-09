<template>
  <div class="container-fluid">
    <div class="row py-5 justify-content-center">
      <div class="col-md-2">
        <div class="mb-2">
          <form @submit="sortImages">
            <div class="input-group">
              <input type="text" v-model="limit" class="form-control">
              <div class="input-group-prepend">
                <button type="submit" class="btn btn-primary mb-2">Sort</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="row no-gutters">
      <div
        v-show="images !== []"
        class="col-lg-3 col-md-4 col-sm-6"
        v-bind:key="image.id"
        v-for="image in images.photos"
      >
        <router-link :to="{ path: 'photo', query: { photoid: image.id }}">
          <img :src="image.src.landscape" class="img-fluid shadow-lg">
        </router-link>
      </div>
    </div>

    <div class="row py-5">
      <div class="col-lg-12 text-center">
        <button class="btn btn-primary btn-lg" v-show="images.prev_page" @click="prevPage">Previous</button>
        <span class="mx-3"></span>
        <button class="btn btn-primary btn-lg" @click="nextPage">Next</button>
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
      limit: 20,
      image: this.$route.query.name
    };
  },

  methods: {
    sortImages(e) {
      e.preventDefault();

      axios
        .get("https://api.pexels.com/v1/search", {
          params: { query: this.image, per_page: this.limit },
          headers: {
            Authorization:
              "563492ad6f917000010000019947b910345d44b3ba2ae55c2de88973"
          }
        })
        .then(res => (this.images = res.data))
        .catch(err => console.log(err));
    },

    nextPage() {
      axios
        .get(this.images.next_page, {
          headers: {
            Authorization:
              "563492ad6f917000010000019947b910345d44b3ba2ae55c2de88973"
          }
        })
        .then(res => (this.images = res.data))
        .catch(err => console.log(err));
    },

    prevPage() {
      axios
        .get(this.images.prev_page, {
          headers: {
            Authorization:
              "563492ad6f917000010000019947b910345d44b3ba2ae55c2de88973"
          }
        })
        .then(res => (this.images = res.data))
        .catch(err => console.log(err));
    }
  },

  created() {
    axios
      .get("https://api.pexels.com/v1/search", {
        params: { query: this.$route.query.name, per_page: this.limit },
        headers: {
          Authorization:
            "563492ad6f917000010000019947b910345d44b3ba2ae55c2de88973"
        }
      })
      .then(res => (this.images = res.data))
      .catch(err => console.log(err));
  }
};
</script>

<style scoped>
</style>
