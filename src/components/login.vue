<template>
  <div class="bg_01">
    <div class="wrap wrap2">
      <!-- body start -->
      <div class="body">
        <form>
          <!-- login start -->
          <div class="login">
            <div class="img_box"></div>
            <div class="input_box">
              <div class="title">아이디</div>
              <div class="input_data">
                <input
                  type="text"
                  placeholder="아이디를 입력해 주세요."
                  id="userid"
                />
              </div>
              <div class="title">비밀번호</div>
              <div class="input_data">
                <input
                  :type="passwordFieldType"
                  placeholder="패스워드를 입력해 주세요."
                  v-model="password"
                />
              </div>
            </div>

            <div class="btn_login">
              <router-link to="/page_03" class="btn_big">로그인</router-link>
            </div>
          </div>
          <!-- login end -->
        </form>
        <!-- sns login start -->
        <ul class="sns">
          <li>
            <a href=""></a>
          </li>
          <li>
            <a href=""></a>
          </li>
          <li>
            <a href=""></a>
          </li>
          <li>
            <a href=""></a>
          </li>
        </ul>
        <!-- sns login end -->
      </div>
      <!-- body end -->
    </div>
  </div>
</template>
        <script>
            export default {
                data() {
                    return {
                        password: "", 
                        passwordFieldType: "password"
                        };
                },
                methods: {
                    switchVisibility() {
                        this.passwordFieldType = this.passwordFieldType === "password"
                            ? "text"
                            : "password";
                    }
                }
            };
        </script>