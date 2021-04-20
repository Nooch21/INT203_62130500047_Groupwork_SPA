<template>
  <div class="p-5 border border-gray-200">
    <form action="postreview">
      <h3 class="uppercase">Customer Review</h3>
      <div class="mt-2 text-sm">
        <select id="productversion" class="w-1/3 p-2 border border-gray-200">
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
</template>

<script>
export default {
  props: {},
  data() {
    return {
      productversion: "",
      review: null,
    };
  },
  method: {},
};
</script>
