  import { Directus } from "@directus/sdk";

  const directus = new Directus("https://directus.alike.io/");

  export default ({ app }, inject) => {
    inject("directus", directus);
  };
