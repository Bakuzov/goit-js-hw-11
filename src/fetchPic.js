const base = 'https://pixabay.com/api/';
const apiKey = 'key=28350803-646ac60833af8cee69618d9eb';
const imgType = 'image_type=photo';
const orientation = 'orientation=horizontal';
const safesearch = 'safesearch=true';
const perPage = 20;

async function searchImg(searchTxt, page) {
  const res = await fetch(
    `${base}?${apiKey}&q=${searchTxt}&${imgType}&${orientation}&${safesearch}&page=${page}&per_page=${perPage}`
  );
  const data = await res.json();

  return data;
}

export { searchImg, perPage };
