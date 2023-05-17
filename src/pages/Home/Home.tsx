import './Home.css'

import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  function handleNavigate() {
    navigate('/lesson')
  }

  return (
    <div className="home-page-container">
      <div className="container">
        <img src="/duo.svg" alt="Duo" />
        <h1>Training verb tenses</h1>
        {/* <div className="box-user-info">
          <h3>Score</h3>
          <p>10 trained verbs</p>
        </div> */}
        <button onClick={handleNavigate}>Start</button>
      </div>
    </div>
  )
}

export default Home
