import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from 'react-native';


const KakaoLogIn = () => {

  return (
    <View>
        <a id="custom-login-btn" href="javascript:loginWithKakao()">
          <img
            src="//k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
            width="222"
            alt="카카오 로그인 버튼"
          />
        </a>

        <p id="token-result"></p>
    </View>
    
  )
};





//  64db95e8d66057d4911cae341a72ed32

//https://developers.kakao.com/sdk/js/kakao.js

