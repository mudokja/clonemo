import React from "react";

async function getArtist(userid: any) {
  const res = await fetch(`/api/v1/user/${userid}`);
  return res.json();
}

export default async function Page({params:{userid}}: any) :Promise<JSX.Element> {
    // 임시 api 테스트
    const userData =getArtist(userid)

    //이상한 에러가 발생해서 병렬 데이터 가져오기 시도
    const [user] = await Promise.all([userData])
    return (
      <div>
      <p>유저정보로딩</p>
      <p>유저 아이디 :{user.id}</p>
      <p>유저 정보 {user.name}</p>
      </div>
    )
  }