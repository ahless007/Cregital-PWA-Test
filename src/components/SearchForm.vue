<template>
  <div>
    <form class="form-inline pt-3" @submit="searchImage">
      <div class="mb-2 flex-grow-1">
        <input
          type="form-control"
          placeholder="Search for free photos"
          class="form-control"
          v-model="image"
        >
      </div>
      <button type="submit" class="btn btn-primary mb-2">
        <i class="icon ion-ios-search"></i> Search
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchForm",

  data() {
    return {
      image: "",
      images: []
    };
  },

  methods: {
    async searchImage(e) {
      e.preventDefault();

      this.$router.push({
        path: "results",
        query: { name: this.image }
      });

      // const response = await axios.get("https://api.pexels.com/v1/search", {
      //   params: { query: this.image, per_page: 20 },
      //   headers: {
      //     Authorization:
      //       "563492ad6f917000010000019947b910345d44b3ba2ae55c2de88973"
      //   }
      // });

      // this.image = "";
      // this.images.push(response.data.photos);
      // console.log(this.images);
    }
  }
};
</script>

<style scoped>
</style>
