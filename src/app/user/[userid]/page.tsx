import React from "react";

async function getArtist(userid: any) {
  const vapi=process.env.V_API
  const port=process.env.PORT
  const res = await fetch(`http://localhost:${port}/api/${vapi}/user/${userid}`);
  return res.json();
}

export default async function Page({params:{userid}}: any) :Promise<JSX.Element> {
    // 임시 api 테스트
    const user = await getArtist(userid)
    return (
      <>
      <p>유저정보로딩</p>
      <p>유저 아이디 :{user.id}</p>
      <p>유저 정보 {user.name}</p>
      </>
    )
  }