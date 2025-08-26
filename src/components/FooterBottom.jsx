import React from 'react'

const FooterBottom = () => {
  return (
    <section className="footer-bottom">
      <div className="container flex-bottom">
        <button className='signup-btn'>Sign-up now!</button>
        <div className="footer-socials">
          <span>Follow us</span>
          <ul>
            <li><img src="./public/img/footer-facebook.png" alt="" /></li>
            <li><img src="./public/img/footer-Twitter.png" alt="" /></li>
            <li><img src="./public/img/footer-youtube.png" alt="" /></li>
            <li><img src="./public/img/footer-pinterest.png" alt="" /></li>
            <li><img src="./public/img/footer-periscope.png" alt="" /></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default FooterBottom
