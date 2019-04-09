<template>
  <section class="container">
    <div class="form-container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="heading">Search your images</h1>
          <p class="sub-heading">The best free stock photos shared by talented creators</p>
          <SearchForm></SearchForm>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SearchForm from "../components/SearchForm";

export default {
  name: "Home",

  data() {
    return {};
  },

  components: {
    SearchForm
  }
};
</script>

<style>
body {
  font-family: "Rubik", sans-serif;
}

html,
body {
  background: #1f4d8c !important;
  color: #fff !important;
}
</style>
