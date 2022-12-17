async function getArtist(userid) {
  const res = await fetch(`https://api.example.com/artist/${userid}`);
  return res.json();
}

export default function Page() {
    // Forward fetched data to your Client Component
    return (
      <p>유저정보로딩</p>
    )
  }