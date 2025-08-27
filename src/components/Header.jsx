import React from 'react'

const Header = () => {
  const menu = [
    {
      id: 1,
      label: "Characters",
      active: false,
      href: "#"
    },
    {
      id: 2,
      label: "Comics",
      active: false,
      href: "#"
    },
    {
      id: 3,
      label: "Movies",
      active: false,
      href: "#"
    },
    {
      id: 4,
      label: "TV",
      active: false,
      href: "#"
    },
    {
      id: 5,
      label: "Games",
      active: false,
      href: "#"
    },
    {
      id: 6,
      label: "Collectibles",
      active: false,
      href: "#"
    },
    {
      id: 7,
      label: "Videos",
      active: false,
      href: "#"
    },
    {
      id: 8,
      label: "Fans",
      active: false,
      href: "#"
    },
    {
      id: 9,
      label: "News",
      active: false,
      href: "#"
    },
    {
      id: 10,
      label: "Shop",
      active: false,
      href: "#"
    },
  ]
  return (
    <>

      <div className="container">
        <header className='header'>

          <img className='logo' src="./public/img/dc-logo.png" alt="" />


          <nav>
            <ul id='menu'>
              {menu.map(link => {
                const { id, href, label, active } = link;
                return (
                  <li key={id} className={active ? "active" : ""}>
                    <a href={href}>{label}</a>

                  </li>
                )
              })}

            </ul>
          </nav>
        </header>
      </div >


    </>



  )
}

export default Header
