<template>
  <div>
    <h1>Create A Post</h1>
    <form @submit.prevent="addPost">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Post Title:</label>
            <input type="text" class="form-control" v-model="post.title">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Post Body:</label>
            <textarea class="form-control" v-model="post.body" rows="5"></textarea>
          </div>
        </div>
      </div>
      <br>
      <div class="form-group">
        <button class="btn btn-primary">Create</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {}
    };
  },
  methods: {
    addPost() {
      const uri = "http://localhost:4000/posts/add";
      this.axios.post(uri, this.post).then(() => {
        this.$toast.success({
          message: "Post has been created!",
          showDuration: 3000,
          showMethod: "slideDown",
          closeMethod: "slideUp",
          hideMethod: "slideUp",
          position: "bottom right",
          progressBar: true
        });
        this.$router.push({ name: "posts" });
      });
    }
  }
};
</script>
