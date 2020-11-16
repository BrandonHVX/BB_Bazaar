import React, { Component } from "react";
import NavBar from "../components/castro/NavBar";
import HeroSliderTwo from "../components/castro/HeroSliderTwo";
import VideoCta from "../components/castro/VideoCta";
import ProjectSlider from "../components/castro/ProjectSlider";
import ServiceTab from "../components/castro/ServiceTab";
import TestimonialSlider from "../components/castro/TestimonialSlider";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import ProductList from "../components/productList";
import ProjectIdea from "../components/projectIdea";
import Footer from "../components/castro/Footer";
import MobileMenu from "../components/castro/MobileMenu";
import FeatureIcon from "../components/FeatureIcon";

const HomeTwo = ({ data }) => {
  return (
    <div>
      {/* Navigation bar */}

      {/* Hero slider */}
      <HeroSliderTwo />

      {/* Video CTA */}
      <FeatureIcon spaceTopClass="pt-100" spaceBottomClass="pb-60" />
      <ProductList data={data} />

      {/* Service Tab */}
      {/* <ServiceTab /> */}
      {/* Project Slider */}
      {/* <ProjectSlider /> */}
      {/* Testimonial Slider */}
      {/* <TestimonialSlider /> */}
      {/* Team job */}
      {/* <TeamJob /> */}
      {/* Brand logo */}
      {/* <BrandLogoSlider background="grey-bg" /> */}
      {/* Blog grid */}
      {/* <BlogGrid background="" /> */}
      {/* Footer */}
      {/* <Footer /> */}
      {/* Mobile Menu */}
      {/* <MobileMenu /> */}
    </div>
  );
};

export default HomeTwo;

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
