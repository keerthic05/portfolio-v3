import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'
import { useEffect, useState, useRef } from 'react'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timeOutId)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_sm32a7e',
        'template_oi72eij',
        form.current,
        { publicKey: 'pRnbZa0NyA5ewwof0' }
      )
      .then(
        () => {
          alert('Message successfully sent!')
          form.current.reset() // better than reload
        },
        (error) => {
          console.error('FAILED...', error)
          alert('Failed to send the message, please try again.')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C','o','n','t','a','c','t',' ','m','e']}
              idx={15}
            />
          </h1>

          <p>
            I am interested in software engineering and data analysis opportunities.
            If you want to talk more about technology, projects, or anything else,
            feel free to contact me.
          </p>

          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input type="email" name="email" placeholder="Email" required />
                </li>
                <li>
                  <input type="text" name="subject" placeholder="Subject" required />
                </li>
                <li>
                  <textarea name="message" placeholder="Message" required />
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Contact