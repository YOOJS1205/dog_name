const $list = document.querySelector(".list");
const $input = document.querySelector("#name");
const $button = document.querySelector("button");

// 통신 URL
let queryParams =
  "?" +
  encodeURIComponent("serviceKey") +
  "=" +
  "elfLFMKSsi0Pu6q1m%2BGTESkE3tGmwmPuR8J6jp4IL6%2Fvu7ODA6VgJ8yZgLqFUEl2M16NeZZKQnit9qB%2FPlpw%2Fw%3D%3D";
queryParams += "&" + encodeURIComponent("page") + "=" + encodeURI("1");
queryParams += "&" + encodeURIComponent("perPage") + "=" + encodeURI("20");
queryParams += "&" + encodeURIComponent("returnType") + "=" + encodeURI("json");

// 서버와 통신하여 데이터 가져오고 showData 함수로 결과값 넘겨주기
(async function getData() {
  const url =
    "https://api.odcloud.kr/api/15041653/v1/uddi:223e0a0f-f812-423a-88ce-b742300ca156" +
    queryParams;

  const petData = await fetch(url)
    .then((res) => res.json())
    .then((data) => data.data);

  console.log(petData);
  showData(petData);

  return petData;
})();

function showData(data) {
  data.map((item) => {
    const text = document.createElement("p");
    text.classList.add("hidden");
    text.innerText = `${item.동물이름}는 ${item.합계}마리 있어요!`;
    $list.appendChild(text);
  });
  console.log(data);

  return data;
}

$button.addEventListener("click", () => {
  const $nameText = $list.childNodes;
  console.log($nameText);
  [...$nameText].filter((item) => {
    if (item.innerText.includes($input.value)) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  });
});
