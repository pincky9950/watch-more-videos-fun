export async function getServerSideProps({ req }) {
  // 🔀 YOUR 4 REDIRECT URLS
  const URLS = [
    "https://entertainenslave.com/yu50vnjvjf?key=bf1535375fd5ff153c4870ffa39939af",
    "https://entertainenslave.com/kqbp528f4?key=bcddea7e63da43ca2a3bfb114c607807",
    "https://entertainenslave.com/hbeh5d8g2?key=97d90c3e88e6fc4e95183ec9d89c29a3",
    "https://entertainenslave.com/yu50vnjvjf?key=bf1535375fd5ff153c4870ffa39939af"
  ];

  // 🎲 RANDOM PICK
  const randomUrl = URLS[Math.floor(Math.random() * URLS.length)];

  // 🚀 INSTANT REDIRECT (NO PREVIEW)
  return {
    redirect: {
      destination: randomUrl,
      permanent: false
    }
  };
}

export default function Home() {
  return null;
}
