import emailjs from '@emailjs/browser';
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'
import { useEffect, useState, useRef } from 'react'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef();

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return () => clearTimeout(timeOutId)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm(
            'service_sm32a7e',   // replace with your EmailJS service ID
            'template_1uox9dc',  // replace with your EmailJS template ID
            form.current,        // connects to this form via useRef
            { publicKey: 'pRnbZa0NyA5ewwof0' } // replace with your actual public key
          )
          .then(
            () => {
              alert('Message successfully sent!');
              window.location.reload(false);
            },
            (error) => {
              console.error('FAILED...', error.text);
              alert('Failed to send the message, please try again.');
            }
          );
      };
    
    return (
    <>
        <div className='container contact-page'>
            <div className='text-zone'> 
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} 
                        idx={15}
                    />
                </h1>
                <p>
                    I am interested in software engineering and data analysis opportunities. I look forward to 
                    partaking in internships where I can contribute to large, innovative projects. If you
                    want to talk more about technology, projects, or anything else, feel free to contact me. 
                </p>
                <div className='contact-form'>
                    <form>
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type="email" name="email" placeholder='Email' required />
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name="subject" required />
                            </li>
                            <li>
                                <textarea placeholder="Message" name="message" required></textarea>
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
    </>)
}

export default Contact

