<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
    <!--<button @click="showPosts = !showPosts">Toggle posts</button>
    <button @click="posts.pop()">Delete a Post</button>-->
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import TagCloud from '../components/TagCloud.vue'
import Spinner from '../components/Spinner.vue'
import getPosts from '../composables/getPosts' // import composable
// @ is an alias to /src

export default {
  name: 'Home',
  components: { PostList, Spinner, TagCloud },
  setup() {
    const { posts, error, load } = getPosts() // grab composable

    load() // use composable

    return {
      posts, error
    }
  }
}
</script>

<style>
  .home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
  .layout {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
  }
</style>