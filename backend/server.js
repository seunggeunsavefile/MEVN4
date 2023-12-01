const puppeteer = require("puppeteer");
const { MongoClient } = require("mongodb");

async function run() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto('https://vibe.naver.com/chart/total');

  const links = await page.evaluate(() =>
    Array.from(document.querySelectorAll(" .tracklist tbody tr"), (e) => ({
      rank: e.querySelector(".rank span").innerText,
      img: e.querySelector(".thumb .img_thumb").src,
      song: e.querySelector(".song .link_text").innerText,
      artist: e.querySelector(".artist .link_artist span").innerText,
    }))
  );

  console.log(links);

  await browser.close();

  // MongoDB에 연결
  const uri = "mongodb://127.0.0.1:27017"; // 여기에 본인의 MongoDB 연결 URI를 입력하세요.
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const database = client.db("rank"); // 여기에 사용할 데이터베이스 이름을 입력하세요.
    const collection = database.collection("songrank"); // 여기에 사용할 컬렉션 이름을 입력하세요.

    // links 배열의 각 항목을 몽고디비에 삽입
    const result = await collection.insertMany(links);
    console.log(`${result.insertedCount} documents were inserted`);
  } finally {
    await client.close();
  }
}

run();
