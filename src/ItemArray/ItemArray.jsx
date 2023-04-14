export const ItemArray = fetch('https://api.avavion.ru/api/products')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const items = data;
    return items;
  });



