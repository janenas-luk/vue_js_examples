<template>
  <div class="block">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">{{ post.title }}</p>
      </header>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img
                src="https://bulma.io/images/placeholders/96x96.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{{ post.author }}</p>
            <p class="subtitle is-6">@{{ post.author }}</p>
          </div>
        </div>

        <div class="content">
          {{ post.body }}
          <br />
          <!-- <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        post: {required: true, type: Object}
    }
}
</script>