const productDetail = require("./productDetails");

function getProductCards(products, admin) {
  let html = "";
  for (let product of products) {
    html += productDetail(product, admin);
  }
  return html;
}

module.exports = getProductCards;
