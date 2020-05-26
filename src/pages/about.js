import React from 'react'
import Layout from "../components/Layout"
import { Link } from 'gatsby'

const AboutPage = () => {
  return (
    <Layout>
      <h1>About Me</h1>
      <article>
        <h2>Welcome to WeAreReady</h2>
        <p>
          Our company name was inspired by the official one-year countdown song to the 2008 Beijing Olympics “We Are Ready” performed by Jackie Chan. This song celebrates all the  hard work and preparation leading up to the first Olympics hosted by China.
        </p>
        <p>
          We help our brand partners plan, prepare and execute their vision of market success for their products in China.
        </p>
        <Link rel="stylesheet" to="index"/>
      </article>
      <article>
        <h2>Grow With WeAreReady Today</h2>
        <p>
          We  provide a platform of solutions including sales rep services, consulting, marketing projects, as well as inventory disposition.
        </p>
        <p>
          Since our inception in 2008, WeAreReady has become a trusted partner for emerging brands, publicly-listed companies, and best in class retail partners. With our unique suite of services, we help our brands and retail partners to thrive in China.
        </p>
      </article>


    </Layout>
  )
}

export default AboutPage