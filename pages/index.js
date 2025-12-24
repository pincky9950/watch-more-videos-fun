export async function getServerSideProps({ req }) {
  // 🔀 YOUR 4 REDIRECT URLS
  const URLS = [
    "https://tech.symbolsemoji.com/top-10-multi-specialty-hospitals-in-chennai-for-advanced-medical-care/",
    "https://tech.symbolsemoji.com/videos/Untitled.png",
    "https://tech.symbolsemoji.com/",
    "https://google.com"
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
