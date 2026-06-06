import "./index.scss"
import AnimatedLetters from "../AnimatedLetters"
import { useEffect, useState } from "react"
import Loader from "react-loaders"

const projsData = [
    {
        title: "Timelyn",
        description: "An app I developed using TypeScript and Python which helps users efficiently manage their schedules by organizing tasks around existing commitments.",
        tags: ["React", "FastAPI", "Python", "PostgreSQL"],
        link: "https://github.com/keerthic05/timelyn",
    },
    {
        title: "Synchro",
        description: "A centralized database project that integrates deadlines from academic platforms like GradeScope and Canvas into a unified calendar.",
        tags: ["React", "JavaScript", "Python"],
        link: "https://github.com/jamespineiro/cs320-team-a-ardvark-",
    },
    {
        title: "FocusAI",
        description: "A machine learning pipeline trained on fMRI-derived data to improve ADHD diagnosis accuracy in underrepresented groups.",
        tags: ["Python", "Colab", "pandas", "NumPy"],
        link: "https://github.com/WiDS-Team-24/WiDS-Kaggle-Competition",
    },
]

const Projects = () => {
    const [letterClass, setLetterClass] = useState("text-animate")

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            setLetterClass("text-animate-hover")
        }, 3000)
        return () => clearTimeout(timeOutId)
    }, [])

    return (
        <>
            <div className="container projects-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={["P", "r", "o", "j", "e", "c", "t", "s"]}
                            idx={15}
                        />
                    </h1>
                    <p>Here is a selection of projects I have worked on. Click any card to view the repo or live site.</p>
                </div>

                <div className="projects-grid">
                    {projsData.map(function(project, i) {
                        var tags = project.tags.map(function(tag, j) {
                            return <span className="tag" key={j}>{tag}</span>
                        })
                        return (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-card" key={i}>
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                                <div className="tags">{tags}</div>
                            </a>
                        )
                    })}
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Projects
