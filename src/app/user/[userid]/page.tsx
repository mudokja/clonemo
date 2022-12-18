
async function getArtist(userid: any) {
  const api=process.env.V_API
  const res = await fetch(`http://localhost:3000/api/${api}/user/${userid}`);
  return res.json();
}

export default async function Page({params:{userid}}: any) :Promise<JSX.Element> {
    // Forward fetched data to your Client Component
    const user = await getArtist(userid)
    return (
      <><p>유저정보로딩</p>
      <p>유저 아이디 :{user.id}</p>
      <p>유저 정보 {user.name}</p>
      </>
    )
  }