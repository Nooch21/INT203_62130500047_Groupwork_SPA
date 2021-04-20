<template>
  <div class="">
    <div
      class="w-screen h-20 bg-red-200 text-center text-xl font-bold tracking-widest p-5"
    >
      <HelloWorld msg="WayV" />
    </div>
    <div class="grid grid-cols-2">
      <div class="p-10">
        <img
          class="product-image"
          alt="badge-hendery"
          src="./assets/images/badge-hendery.jpeg"
        />
      </div>
      <div class="p-10 space-y-5">
        <div class="text-4xl font-bold">
          <p>2021 WayV Badge</p>
        </div>
        <div class="text-xl font-bold">
          <p>$16.00</p>
        </div>
        <div class="">
          <p class="font-bold">Artist</p>
          <div class="space-x-2 text-sm">
            <button class="p-2 border border-gray-200">HENDERY</button>
            <button class="p-2 border border-gray-200">KUN</button>
            <button class="p-2 border border-gray-200">LUCAS</button>
            <button class="p-2 border border-gray-200">TEN</button>
            <button class="p-2 border border-gray-200">WINWIN</button>
            <button class="p-2 border border-gray-200">XIAOJUN</button>
            <button class="p-2 border border-gray-200">YANGYANG</button>
          </div>
        </div>
        <div>
          <p>Product ID:</p>
        </div>
        <div class="place-content-center">
          <button class="h-10 w-full bg-red-200 rounded-md shadow">
            Add to Cart
          </button>
        </div>

        <create-reviews></create-reviews>
      </div>
    </div>
  </div>
</template>

<script>
import CreateReviews from './components/CreateReviews.vue';
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    CreateReviews,
  },
  data() {
    return {
      images: [
        {
          productid: "wayv001",
          productsrc: "./assets/images/badge-hendery.jpeg",
        },
        {
          productid: "wayv002",
          productsrc: "./assets/images/badge-kun.jpeg",
        },
        {
          productid: "wayv003",
          productsrc: "./assets/images/badge-lucas.jpeg",
        },
        {
          productid: "wayv004",
          productsrc: "./assets/images/badge-ten.jpeg",
        },
        {
          productid: "wayv005",
          productsrc: "./assets/images/badge-winwin.jpeg",
        },
        {
          productid: "wayv006",
          productsrc: "./assets/images/badge-xiaojun.jpeg",
        },
        {
          productid: "wayv007",
          productsrc: "./assets/images/badge-yangyang.jpeg",
        },
      ],
    };
  },
  methods: {

  },
};
</script>
