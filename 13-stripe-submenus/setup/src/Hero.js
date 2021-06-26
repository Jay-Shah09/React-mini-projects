import React from 'react'
import { useGlobalContext } from './context'
import phoneImg from './images/phone.svg'

const Hero = () => {
  const {hideSubMenu} = useGlobalContext();

  return (
    <main className="main" onMouseOver={hideSubMenu}>
      <div className="hero-container">
        <article className="part-1">
          <h1>Payments infrastructure for the internet</h1>
          <p>Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.</p>
          <button className="main-btn">start now</button>
        </article>
        <article className="part-2">
          <img src={phoneImg} alt="image"/>
        </article>
      </div>
    </main>
  )
}

export default Hero
