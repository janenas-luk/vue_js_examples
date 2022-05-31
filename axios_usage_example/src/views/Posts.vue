<template>
  <div>
    <h1 class="title is-1">Posts</h1>
    <div class="block" v-on:click="openModal">
      <button class="button is-info is-focused">Add post</button>
    </div>
    <post-modal v-bind:class="{'is-active': modalActive}" v-on:close-modal="closeModal" v-on:reload-posts="getPosts"></post-modal>
    <post-card v-for="post in posts" :key="post.id" :post="post"></post-card>
  </div>
</template>

<script>
import axios from "axios";
import PostCard from "../components/PostCard.vue"
import PostModal from "../components/PostModal.vue"

export default {
  data() {
    return {
      posts: [],
      modalActive: false
    };
  },
  components: {
    PostCard,
    PostModal
  },
  methods: {
    getPosts() {
      axios
        .get(this.$apiUrl + "/posts")
        .then((response) => (this.posts = response.data));
    },
    openModal() {
      this.modalActive = true
    },
    closeModal() {
      this.modalActive = false
    }
  },
  created() {
    this.getPosts();
  },
};
</script>