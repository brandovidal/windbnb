import './App.css'

function App () {

  return (
    <>
      <header className='header'>
        <h1>
          <img src="/logo.svg" alt="windbnb" />
        </h1>

        <aside className='filter'>
          <div className="item city">
            Helsinki, Finland
          </div>
          <div className="item guest">
            Add guests
          </div>
          <div className="item">
            <button className="btn-search">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
              </svg>
            </button>
          </div>
        </aside>

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
