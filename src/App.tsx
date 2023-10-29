import React, { useRef, useState } from 'react'

import './App.css'

interface ToogleElement {
  element: React.RefObject<HTMLElement| HTMLDivElement>
  show: boolean
}

function toogleElement ({ element, show = true }: ToogleElement) {
  if (!element.current) return

  element.current.classList.add('hidden')
  if (show) {
    element.current.classList.remove('hidden')
  }
}

function App () {
  const filterRef = useRef<HTMLElement>(null)
  const locationRef = useRef<HTMLDivElement>(null)
  const guestRef = useRef<HTMLDivElement>(null)

  const [adults, setAdults] = useState(0)
  const [children, setChildren] = useState(0)

  function addAdultsHandle () {
    setAdults(adults + 1)
  }
  function substractAdultsHandle () {
    if (adults === 0) return
    setAdults(adults - 1)
  }

  function addChildrenHandle () {
    setChildren(children + 1)
  }
  function substractChildrenHandle () {
    if (children === 0) return
    setChildren(children - 1)
  }

  const showFilterClickHandle = () => {
    toogleElement({ element: filterRef, show: true })
  }
  const locationClickHandle = () => {
    toogleElement({ element: locationRef, show: true })
    toogleElement({ element: guestRef, show: false })
  }
  const guestClickHandle = () => {
    toogleElement({ element: guestRef, show: true })
    toogleElement({ element: locationRef, show: false })
  }

  const searchClickHandle = () => {
    toogleElement({ element: filterRef, show: true })
  }
  const closeClickHandle = () => {
    toogleElement({ element: filterRef, show: false })
  }
  const searchFiltersClickHandle = () => {
    toogleElement({ element: filterRef, show: false })
  }

  return (
    <>
      <header className='header'>
        <h1>
          <img src="/logo.svg" alt="windbnb" />
        </h1>

        <aside>
          <section className="card search-content" onClick={showFilterClickHandle}>
            <div className="item">
              <p className="location">Helsinki, Finland</p>
            </div>
            <div className="item">
              <p className="guest">Add guests</p>
            </div>
            <div className="item">
              <button className="btn-transparent" title='Search' onClick={searchClickHandle}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon-search" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                  <path d="M21 21l-6 -6" />
                </svg>
              </button>
            </div>
          </section>
        </aside>

        <section ref={filterRef} className="filter-container">
          <div className="item">
            <h3>Edit your search</h3>
            <button className="btn-transparent" title='Close' onClick={closeClickHandle}>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon-close" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none"
                strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="item">
            <div className="card filter">
              <div className="item" onClick={locationClickHandle}>
                <label>location</label>
                <p className="location">Helsinki, Finland</p>
              </div>
              <div className="item" onClick={guestClickHandle}>
                <label>guest</label>
                <p className="guest">Add guests</p>
              </div>
            </div>
          </div>
          <div className="item">
            <button className="btn-primary" title='Search' onClick={searchFiltersClickHandle}>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon-searc primary" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
              </svg>
              <span>Search</span>
            </button>
          </div>
          <div ref={locationRef} className="item">
            <section className='location-container'>
              <div className="item">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon-map" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                    strokeWidth="0" fill="currentColor" />
                </svg>
                <p className="value">Helsinki, Finland</p>
              </div>
              <div className="item">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon-map" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                    strokeWidth="0" fill="currentColor" />
                </svg>
                <p className="value">Turku, Finland</p>
              </div>
            </section>
          </div>
          <div ref={guestRef} className="item">
            <section className="guest-container">
              <div className="item">
                <label>Adults</label>
                <p>Ages 13 or above</p>
                <div className="counter-container">
                  <button className="btn-outline" onClick={substractAdultsHandle}>-</button>
                  <p className="counter">{adults}</p>
                  <button className="btn-outline" onClick={addAdultsHandle}>+</button>
                </div>
              </div>
              <div className="item">
                <label>Children</label>
                <p>Ages 2-12</p>
                <div className="counter-container">
                  <button className="btn-outline" onClick={substractChildrenHandle}>-</button>
                  <p className="counter">{children}</p>
                  <button className="btn-outline" onClick={addChildrenHandle}>+</button>
                </div>
              </div>
            </section>
          </div>
        </section>
      </header>

      <main>

      </main>

      <footer>
        <p>
          created by
          <a
            href='https://linktr.ee/brandovidal'
            target='_blank'
            rel='noreferrer'
          >
            @brandovidal
          </a>
          - devChallenges.io
        </p>
      </footer>
    </>
  )
}

export default App
