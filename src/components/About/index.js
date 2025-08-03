import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGitAlt, faJsSquare, faReact, faPython, faJava, faHtml5 } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return () => clearTimeout(timeOutId)
    }, [])
    
    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I'm a junior at UMass Amherst pursuing a degree in Computer Science.
                    My interests lie in Software Engineering, Machine Learning, and Web Development.
                </p>
                <p>
                    In the past year, I've worked on projects involving machine learning, front-end development,
                    and implemented various algorithms. 
                    I'm also passionate about supporting women in tech and currently serve as 
                    the Vice President of my university's Girls Who Code chapter.
                </p>
                <p>
                    Outside of building projects, I enjoy dancing, listening to music, and connecting with other developers.
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faPython} color="#ffd700" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faJava} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faHtml5} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>

                </div>

            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}



export default About