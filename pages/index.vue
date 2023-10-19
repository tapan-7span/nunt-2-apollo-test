<template>
  <div>
    <ul>
      <li v-for="(blog, i) in responseData?.data" :key="i">
        <div v-html="blog.title" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      responseData: null,
    };
  },
  methods: {
    async getData() {
      this.responseData = await this.$directus.items("metadata").readByQuery();
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
