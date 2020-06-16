import React from 'react'
import styled from "styled-components"
import Layout from "../components/Layout"
import VideoBg from "../components/VideoBg/VideoBg"
import Retailers from "../components/Retailers/Retailers"
import Partners from "../components/Partners/Partners"

const H1 = styled.h1`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
`

const IndexPage = () => {
  return (
    <Layout>
      <H1 className="">Agency in China</H1>
      <VideoBg/>
      <section classNama="intro">
        <h2>Products we deliver</h2>
        <div>

        </div>
      </section>
      <section classNama="advantages">
        <h2>Our Advantages</h2>
      </section>
      <section classNama="services">
        <h2>Our Services</h2>
      </section>
      <section classNama="partners">
        <Retailers/>
        <Partners/>
      </section>
    </Layout>
  )
}

export default IndexPage