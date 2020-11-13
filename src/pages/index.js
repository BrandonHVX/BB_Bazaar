import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import Header from "../components/header";
import HeaderOne from "../wrappers/header/HeaderOne";
import HeroSliderOne from "../wrappers/hero-slider/HeroSliderOne";
import FeatureIcon from "../wrappers/feature-icon/FeatureIcon";
import TabProduct from "../wrappers/product/TabProduct";
import BlogFeatured from "../wrappers/blog-featured/BlogFeatured";
import Shipping from "../images/support-1.png";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import ProductList from "../components/productList";
import ProjectIdea from "../components/projectIdea";

const HomeFashion = ({ data }) => {
  return (
    <div>
      <MetaTags>
        <title>Flone | Fashion Home</title>
        <meta
          name="description"
          content="Fashion home of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <HeroSliderOne />
      <div className="support-area pt-100 pb-60">
        <div className="container">
          <div className="row">
            <div class="col-lg-3 col-sm-6">
              <div class="support-wrap mb-30">
                <div class="support-icon">
                  <img class="animated" src={Shipping} alt="" />
                </div>
                <div class="support-content">
                  <h5>Free Shipping</h5>
                  <p>Free shipping on all order</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="support-wrap mb-30">
                <div class="support-icon">
                  <img
                    class="animated"
                    src="/assets/img/icon-img/support-2.png"
                    alt=""
                  />
                </div>
                <div class="support-content">
                  <h5>Support 24/7</h5>
                  <p>Free shipping on all order</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="support-wrap mb-30">
                <div class="support-icon">
                  <img
                    class="animated"
                    src="/assets/img/icon-img/support-3.png"
                    alt=""
                  />
                </div>
                <div class="support-content">
                  <h5>Money Return</h5>
                  <p>Free shipping on all order</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="support-wrap mb-30">
                <div class="support-icon">
                  <img
                    class="animated"
                    src="/assets/img/icon-img/support-4.png"
                    alt=""
                  />
                </div>
                <div class="support-content">
                  <h5>Order Discount</h5>
                  <p>Free shipping on all order</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SEO title="Home" />
      <div class="section-title text-center  ">
        <h2>Brand New</h2>
        <p class=""></p>
      </div>
      <ProductList data={data} />
    </div>
  );
};

export default HomeFashion;

export const query = graphql`
  query {
    projectIdea: file(relativePath: { eq: "undraw_web_shopping_dd4l.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allShopifyProduct {
      edges {
        node {
          id
          title
          handle
          createdAt(fromNow: true)
          publishedAt
          productType
          vendor
          priceRange {
            maxVariantPrice {
              amount
            }
          }
          images {
            originalSrc
            id
            localFile {
              childImageSharp {
                fluid(maxWidth: 910) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
          variants {
            id
            title
            price
          }
        }
      }
    }
  }
`;
