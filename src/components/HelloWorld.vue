<template>
  <div class="hello">
    <h1>WELCOME TO {{ msg }} SHOP</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
