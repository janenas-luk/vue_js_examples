<template>
  <div class="modal">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Create post</p>
        <button
          class="delete"
          aria-label="close"
          v-on:click="$emit('close-modal')"
        ></button>
      </header>
      <section class="modal-card-body">
        <div class="field">
          <label class="label">Title</label>
          <div class="control">
            <input
              class="input"
              v-model="title"
              type="text"
              placeholder="Enter your title"
            />
          </div>
        </div>
        <div class="field">
          <div class="control">
            <label class="label">Author</label>
            <div class="select is-fullwidth">
              <select v-model="author">
                <option
                  v-for="author in authors"
                  :key="author.id"
                  v-bind:value="author.name"
                >
                  {{ author.name }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="field">
          <label class="label">Post content</label>
          <div class="control">
            <textarea
              class="textarea"
              placeholder="Enter your post content"
              v-model="content"
            ></textarea>
          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" v-on:click="submitForm">Save</button>
        <button class="button" v-on:click="closeModal">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      authors: [],
      title: undefined,
      author: undefined,
      content: undefined,
    };
  },
  methods: {
    getAuthors() {
      axios
        .get(this.$apiUrl + "/authors")
        .then((response) => (this.authors = response.data));
    },
    submitForm() {
      // console.log("Title: " + this.title + "\nAuthor: " + this.author + "\nContent: " + this.content)
      axios
        .post(this.$apiUrl + "/posts", {title: this.title, body: this.content, author: this.author})
        .then((response) => (console.log(response)))
        .then(() => (this.$emit('reload-posts')))
        .then(() => (this.closeModal()))
    },
    closeModal() {
      this.resetFields()
      this.$emit('close-modal')
    },
    resetFields() {
      this.title = undefined
      this.author = undefined
      this.content = undefined
    }
  },
  created() {
    this.getAuthors();
  },
};
</script>