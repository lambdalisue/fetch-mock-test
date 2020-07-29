import ky from "./node_modules/ky/index.js";
import fetchMock from "./node_modules/fetch-mock/esm/client.js";

console.log("Hello World");

async function main() {
  fetchMock.config.fallbackToNetwork = true;
  fetchMock.get("http://example.com", {
    state: 200,
    body: {},
  });

  console.log("GET");
  await ky.get("https://httpbin.org/get");
  console.log("OK");

  console.log("POST");
  await ky.post("https://httpbin.org/post");
  console.log("OK");

  // Uncomment the below to fix the issue
  //fetchMock.restore();
  console.log("POST with payload");
  await ky.post("https://httpbin.org/post", {
    json: {
      foo: "bar",
    },
  });
  console.log("OK");
}

main();
