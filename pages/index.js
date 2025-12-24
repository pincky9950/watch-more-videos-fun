export async function getServerSideProps({ req }) {
  // 🔀 YOUR 4 REDIRECT URLS
  const URLS = [
    "https://example1.com",
    "https://example2.com",
    "https://example3.com",
    "https://example4.com"
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
