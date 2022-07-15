<template>
  <div class="wrap wrap2">
    <!-- header start -->
    <div class="header header2">
      <router-link to="/" class="back"></router-link>
    </div>
    <!-- header end -->

    <!-- body start -->
    <div class="body body3">
      <!-- map start -->
      <div id="map" class="map2">
        <!-- side bar start -->
        <div class="side_bar">
          <router-link to="page_03">
            <div class="tab"></div>
          </router-link>
          <router-link to="page_05">
            <div class="tab5"></div>
          </router-link>
          <router-link to="page_04">
            <div class="tab3"></div>
          </router-link>
        </div>
        <!-- side bar end -->
        <!-- tab bar start -->
        <div class="tap_bar">
          <ul>
            <li class="on">
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
            <li>
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
      <!-- map end -->
    </div>
  </div>
  <!-- body end -->
  <!-- header end -->
</template>

<script>
export default {
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap); 
      script.src =
        "http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=5715011e564f34008898ac0b2c497e94"; // 카카오 지도 API
      document.head.appendChild(script);
    }
  },

  methods: {
    initMap() {
      var container = document.getElementById("map");
      var options = {
        center: new kakao.maps.LatLng(37.57544361296813, 126.92841290888694),  //center 좌표
        level: 3, // 확대레벨
      };

      var map = new kakao.maps.Map(container, options);
      map.setMapTypeId(kakao.maps.MapTypeId.ROADMAP); //지도 타입 변경

      // 마커를 표시할 위치와 content 객체 배열
      var positions = [
        {
          title: "보틀라운지",
          location: "서울특별시 연희동 연희동 708번지 1층 전체 서대문구",
          latlng: new kakao.maps.LatLng(37.57544361296813, 126.92841290888694),
        },
        {
          title: "터치4굿",
          location: "통일로423 (13125)",
          latlng: new kakao.maps.LatLng(37.58550309145055, 127.01723885274512),
        },
        {
          title: "슈렉이 슈레기 줍다",
          location: "통일로419-1 (13912)",
          latlng: new kakao.maps.LatLng(37.50250600131809, 127.02504140461286),
        },
        {
          title: "르 라보 가로수길지점",
          location: "서울특별시 강남구 신사동 압구정로10길 28",
          latlng: new kakao.maps.LatLng(37.52186893743866, 127.02192114142903),
        },
        {
          title: "더 바디샵 강남대로점",
          location: "서울특별시 서초4동",
          latlng: new kakao.maps.LatLng(37.502625166575754, 127.02510897026485),
        },
        {
          title: "허그어웨일",
          location: "서울 강서구 화곡로55길 23 1층 허그어웨일",
          latlng: new kakao.maps.LatLng(37.552790694722475, 126.84852891444667),
        },
        {
          title: "덕분애 제로웨이스트샵",
          location: "서울 서초구 서초대로 389 209호",
          latlng: new kakao.maps.LatLng(37.497096045998916, 127.0234414837563),
        },
        {
          title: "알맹상점",
          location: "서울특별시 연희동 연희동 708번지 1층 전체 서대문구",
          latlng: new kakao.maps.LatLng(37.575172786305046, 126.95704616583451),
        },
      ];

      for (var i = 0; i < positions.length; i++) {
        // 마커 이미지 이미지 주소
        var imageSrc = require("@/assets/img/icon-mk2.png");
        // 마커 이미지 이미지 크기
        var imageSize = new kakao.maps.Size(44, 56);
        // 마커 이미지 생성
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

        // 마커 생성
        var marker = new kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          position: positions[i].latlng, // 마커의 위치
          image: markerImage,
        });

        //모달 팝업
        var content =
          '<div class="wrap"><div class="modal"><div class="modal_bg"></div><div class="modal-dialog">' +
          '<div class="btn_close"></div><div class="title">' +
          positions[i].title +
          "</div>" +
          '<div class="location">' +
          positions[i].location +
          '</div><div class="btn_box">' +
          '<button class="btn_big">확인</button></div></div></div></div>';

        // 커스텀 오버레이 생성
        var customOverlay = new kakao.maps.CustomOverlay({
          position: positions[i].latlng, // 마커를 표시할 위치
          content: content,
        });

        var clickedOverlay = null; // 오버레이 클릭 초기화

        // 마커등록 함수 실행 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됨
        (function (marker, customOverlay) {
          // 오버레이 여는 이벤트
          kakao.maps.event.addListener(marker, "click", function () {
            if (clickedOverlay) {
              clickedOverlay.setMap(null);
            }
            customOverlay.setMap(map, marker);
            clickedOverlay = customOverlay;
          });

          // 오버레이 닫는이벤트
          kakao.maps.event.addListener(map, "click", function () {
            customOverlay.setMap(null);
          });
        })(marker, customOverlay);
      }
    },
    greet() {
      alert("준비중입니다."); // 탭 마이페이지 경고
    },
  },
};
</script>