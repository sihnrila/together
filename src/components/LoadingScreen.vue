<template>
  <div :class="{ loader: true, fadeout: !isLoading }"><!-- 스플레시 -->
    <img src="../assets/img/logo-splash.png" />
  </div>
</template>

<script>
export default { name: "LoadingScreen", props: ["isLoading"] }; // 스플레시
</script>

<style>
.loader {
  background-color: #feebfa;
  bottom: 0;
  color: white;
  display: block;
  font-size: 32px;
  left: 0;
  overflow: hidden;
  padding-top: 30vh;
  position: fixed;
  right: 0;
  text-align: center;
  top: 0;
}
.loader img {
  width: 250px;
  height: 250px;
  padding: 0 0 1px;
  padding-left: 20px;
  object-fit: contain;
}

.fadeout {
  animation: fadeout 2s forwards;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>