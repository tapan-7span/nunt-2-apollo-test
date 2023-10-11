import graphql from "graphql.js";
import Vue from "vue";

const graph = graphql("https://api.alike.host/graphql", {
  method: "POST",
});

Vue.prototype.$graph = graph;

export default graph;
