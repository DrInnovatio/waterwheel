import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from 'react-native';


const KakaoLogIn = () => {


    Kakao.Auth.authorize({
      redirectUri: 'https://developers.kakao.com/tool/demo/oauth'
    })
  
  // 아래는 데모를 위한 UI 코드입니다.
  displayToken()
  
  const displayToken = () => {
    const token = getCookie('authorize-access-token')
    if(token) {
      Kakao.Auth.setAccessToken(token)
      Kakao.Auth.getStatusInfo(({ status }) => {
        if(status === 'connected') {
          document.getElementById('token-result').innerText = 'login success. token: ' + Kakao.Auth.getAccessToken()
        } else {
          Kakao.Auth.setAccessToken(null)
        }
      })
    }
  }
  const getCookie = (name) => {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  return (
    <View>
        <Text id="custom-login-btn" href="javascript:loginWithKakao()">
          <img
            src="//k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
            width="222"
            alt="카카오 로그인 버튼"
          />
        </Text>

        <Text id="token-result">카카오 로그인</Text>
    </View>
    
  )
};


export default KakaoLogIn;




//  64db95e8d66057d4911cae341a72ed32

//https://developers.kakao.com/sdk/js/kakao.js

