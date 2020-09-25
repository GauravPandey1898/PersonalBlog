import React from 'react'
import { footerStyles } from 'styles'


/**
 * Site footer component
 */
const Footer = () => (
  <footer>
    <p>
      
      This blog was made using NextJs and Prismic 
      <br/>
      check out    <a href="https://gauravpandey.me">My Portfolio</a>
      <br/>
      <a 
        href="https://github.com/GauravPandey1898"
        target="_blank"
        rel="nooopener noreferrer"
      >
        <img
          className="footer-logo"
          src="/images/github-logo.svg"
          alt="github logo"
          style={{filter:"invert(100%)"}}
        />

      </a>
      <a 
        href="https://www.linkedin.com/in/gaurav-pandey-111b56150/"
        target="_blank"
        rel="noopener noreferrer"
      >
          <img
            className="footer-logo" 
            src="/images/linkedin.svg" 
            alt="linkedin logo"
            style={{filter:"invert(100%)"}}
            />
            

      </a>
      
      
    </p>
    <style jsx global>{footerStyles}</style>
  </footer>
)

export default Footer
