<template>
  <div class="">
    <div class="w-screen h-20 bg-red-200 text-center text-xl font-bold tracking-widest p-5">
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
        <div class="p-5 border border-gray-200">
          <form action="">
            <h3 class="uppercase">Customer Review</h3>
            <div class="mt-2 text-sm">
              <select id="product-version" class="w-1/3 p-2 border border-gray-200">
                <option>HENDERY ver.</option>
                <option>KUN ver.</option>
                <option>LUCAS ver.</option>
                <option>TEN ver.</option>
                <option>WINWIN ver.</option>
                <option>XIAOJUN ver.</option>
                <option>YANGYANG ver.</option>
              </select>
            </div>

            <textarea
              id="review"
              class="mt-2 w-full h-32 p-5 border border-gray-200 placeholder-grey-500"
              placeholder="Write your review..."
            ></textarea>

            <input
              type="submit"
              value="Post"
              class="mt-2 rounded bg-red-100 p-2 w-20"
            />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>
