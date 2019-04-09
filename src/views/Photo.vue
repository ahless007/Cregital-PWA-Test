<template>
  <div class="container py-5">
    <div class="row" v-if="image.src">
      <div class="col-md-7">
        <img :src="image.src.original" class="img-fluid shadow-lg">
      </div>
      <div class="col-md-1"></div>
      <div class="col-md-4">
        <p class="mb-0">Photographer Name</p>
        <h3>{{ image.photographer }}</h3>
        <div class="pt-3">
          <a
            :href="image.src.original"
            class="btn btn-primary m-2"
            download="image"
            target="_blank"
          >Download Original</a>
          <a
            :href="image.src.large"
            class="btn btn-primary m-2"
            download="image"
            target="_blank"
          >Download Large</a>
          <a
            :href="image.src.large2x"
            class="btn btn-primary m-2"
            download="image"
            target="_blank"
          >Download Large2x</a>
          <a
            :href="image.src.medium"
            class="btn btn-primary m-2"
            download="image"
            target="_blank"
          >Download Medium</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Photos",

  data() {
    return {
      photoId: this.$route.query.photoid,
      image: []
    };
  },

  created() {
    axios
      .get(`https://api.pexels.com/v1/photos/${this.photoId}`, {
        headers: {
          Authorization:
            "563492ad6f917000010000019947b910345d44b3ba2ae55c2de88973"
        }
      })
      .then(res => (this.image = res.data))
      .catch(err => console.log(err));
  }
};
</script>

<style>
</style>
