import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subcription'>
        <p className='footer-subcription-heading'>
          Join the KU newsletter to receive updates on KU activites
        </p>
        <p className='footer-subcription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              type='email'
              name='email'
              placeholder='Your Email'
              className='footer-input'
            />
            <button buttonStyle='btn--outline'>Subscribe</button> 
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <a href='/'>Contact</a>
            <a href='/'>Support</a>
            <a href='/'>Destinations</a>
            <a href='/'>Sponsorships</a>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <a href='/'>Submit Video</a>
            <a href='/'>Ambassadors</a>
            <a href='/'>Agency</a>
            <a href='/'>Influencer</a>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a href='/'>Instagram</a>
            <a href='/'>Facebook</a>
            <a href='/'>Youtube</a>
            <a href='/'>Twitter</a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
            <div class='footer-logo'>
                <Link to='/' className='social-logo'>
                    KU <i class='fab fa-typo3' />
                </Link>
            </div>
            <small class='website-rights'>KU © 2024</small>
            <div class='social-icons'>
                <Link
                class='social-icon-link facebook'
                to='/'
                target='_blank'
                aria-label='Facebook'
                >
                    <i class='fab fa-facebook-f' />
                </Link>
                <Link
                class='social-icon-link instagram'
                to='/'
                target='_blank'
                aria-label='Instagram'
                >
                    <i class='fab fa-instagram' />
                </Link>
                <Link
                class='social-icon-link youtube'
                to='/'
                target='_blank'
                aria-label='Youtube'
                >
                    <i class='fab fa-youtube' />
                </Link>
                <Link
                class='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='Twitter'
                >
                    <i class='fab fa-twitter' />
                </Link>
                <Link
                class= 'social-icon-link linkedin'
                to='/'
                target='_blank'
                aria-label='LinkedIn'
                >
                    <i class='fab fa-linkedin' />
                </Link>
                </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
