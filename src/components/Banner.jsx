import React from 'react'

const Banner = () => {
  return (
    <div className="banner">
      <div className="container max-w-1200">
        <div className="row">
          <div className="col-100">
            <div className="icon-list">

              <div>
                <img className='banner-img' src="./img/buy-comics-digital-comics.png" alt="" />
                <span>digital comics</span>
              </div>
              <div>
                <img className='banner-img' src="./img/buy-comics-merchandise.png" alt="" />
                <span>merchandise</span>
              </div>
              <div>
                <img className='banner-img' src="./img/buy-comics-subscriptions.png" alt="" />
                <span>subscription</span>
              </div>
              <div>
                <img className='banner-img' src="./img/buy-comics-shop-locator.png" alt="" />
                <span>shop locator</span>
              </div>
              <div>
                <img className='banner-img' src="./img/buy-dc-power-visa.svg" alt="" />
                <span>power visa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner
