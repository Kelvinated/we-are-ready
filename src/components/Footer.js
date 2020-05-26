import React from 'react'
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const FooterArea = styled.footer`
  padding-left: 1.875rem;
  padding-right: 1.875rem;
`

const GridContainer = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto;
    grid-gap: 40px;
  }
`

const Copyright = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 0.875rem;
  width: 100%;

  a {
    text-decoration: none;
    color: var(--primary);
  }

  /* @media (min-width: 768px) { */
  @media (min-width: 768px) {
    grid-column: 1 / 4;
    grid-row: 2 / 3;
  }
`


const Footer = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <FooterArea>
        <GridContainer className="container">
          <Copyright>
            Copyright &copy; {new Date().getFullYear()}{" "}
            <a
              href="http://leaderradio.cn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteMetadata.author}
            </a>
            <p>沪ICP备16004160号-3</p>
            <p>沪公网安备31010702005270号</p>
          </Copyright>
        </GridContainer>
      </FooterArea>
  )
}

export default Footer