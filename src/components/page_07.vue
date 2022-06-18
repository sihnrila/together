<template>
  <div class="bg_02">
    <div class="wrap wrap2">
      <!-- body start -->
      <div class="body body3">
        <div class="img_area">
          <img src="../assets/img/img_02.png" />
        </div>
      </div>
      <!-- tab bar start -->
      <div class="tap_bar">
        <ul>
          <li>
            <router-link to="/page_03"
              ><div class="icon v01"></div>
              <div class="label">지도</div></router-link
            >
          </li>
          <li>
            <router-link to="/page_06"
              ><div class="icon v02"></div>
              <div class="label">커뮤니티</div></router-link
            >
          </li>
          <li><div class="logo"></div></li>
          <li class="on">
            <router-link to="/page_07"
              ><div class="icon v03"></div>
              <div class="label">캠페인</div></router-link
            >
          </li>
          <li v-on:click="greet">
            <div class="icon v04"></div>
            <div class="label">프로필</div>
          </li>
        </ul>
      </div>
      <!-- tab bar end -->
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    greet() {
      alert("준비중입니다."); // 탭 마이페이지 경고
    },
  },
};
</script>