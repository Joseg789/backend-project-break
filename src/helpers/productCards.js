const productDetail = require("./productDetails");

function getProductCards(products) {
  let html = "";
  for (let product of products) {
    html += productDetail(product);
  }
  return html;
}

module.exports = getProductCards;
