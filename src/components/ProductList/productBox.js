import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";

const ProductBox = props => {
  const product = props.product;
  return (
    <div class="product-wrap mb-25" key={product.node.title}>
      <a href={`/product/${product.node.handle}`}>
        <div class="product-img">
          <Img
            fluid={product.node.images[0].localFile.childImageSharp.fluid}
            key={product.node.images[0].localFile.id}
            fadeIn={false}
            loading="eager"
            alt={product.node.title}
          />
          <div class="product-action">
            <div class="pro-same-action pro-wishlist">
              <button class="" title="Add to wishlist">
                <i class="pe-7s-like"></i>
              </button>
            </div>
            <div class="pro-same-action pro-cart">
              <a
                href="//www.amazon.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                Buy now{" "}
              </a>
            </div>
            <div class="pro-same-action pro-quickview">
              <button title="Quick View">
                <i class="pe-7s-look"></i>
              </button>
            </div>
          </div>{" "}
        </div>
        <div class="product-content text-center">
          <h3>
            <a href="/product/9">{product.node.title}</a>
          </h3>
          <div class="product-rating"></div>
          <div class="product-price">
            <span> ${product.node.variants[0].price}</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProductBox;
