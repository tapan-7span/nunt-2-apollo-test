<template>
  <div>
    <div class="bg-gray-100 min-h-screen flex flex-col items-center">
      <!-- Static Header -->
      <header class="bg-gray-600 text-white py-4 w-full text-center">
        <h1 class="text-2xl font-bold">Nuxt 2 & @7span/nuxt-apollo-module Demo App</h1>
      </header>

      <!-- Centered Button -->
      <div class="mt-6">
        <button
          @click="showTextArea"
          class="text-white py-2 px-4 rounded-full hover:border-black hover:border transition-all duration-30"
          :class="
            isLoading ? 'bg-gray-300' : 'bg-gray-500 text-white font-bold'
          "
        >
          {{ isLoading ? "Fetching Data ..." : "Click Me" }}
        </button>
      </div>

      <!-- Big Text Area (Initially Hidden) -->
      <div class="mt-6" v-if="showTextAreaFlag">
        <textarea
          rows="10"
          class="w-1/2 p-2 border border-gray-300 rounded-lg"
          v-model="textAreaContent"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      showTextAreaFlag: false,
      textAreaContent: "",
      responseData: null,
      isLoading: false,
    };
  },
  methods: {
    showTextArea() {
      this.showTextAreaFlag = true;
    },
  },
  created() {
    console.log("Created");
  },
  mounted() {
    console.log("mounted");
  },
};
</script>
