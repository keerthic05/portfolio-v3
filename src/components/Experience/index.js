import "./index.scss"
import AnimatedLetters from "../AnimatedLetters"
import { useEffect, useState } from "react"
import Loader from "react-loaders"

const experienceData = [
    {
        role: "Software Engineering Intern",
        company: "Atian",
        location: "San Jose, CA",
        date: "May 2026 – Present",
        bullets: [
            "Built a quantitative evaluation framework for AI-generated medical documentation to assess automated Patient Care Reports against clinician-authored baselines.",
            "Partnered with engineers and analytics stakeholders to create interpretable customer-facing performance measurements supporting product validation and market adoption of healthcare AI solutions.",
            "Evaluated Kafka-based chunked video processing architectures for low-bandwidth ambulance environments, enabling resilient ingestion, analysis, and summary generation workflows."
        ]
    },
    {
        role: "Undergraduate Course Assistant",
        company: "UMass Amherst",
        location: "Amherst, MA",
        date: "Feb. 2026 – Present",
        bullets: [
            "Mentored 30+ students in debugging code and mastering object-oriented programming concepts, translating complex topics into accessible explanations to support exam preparation and project completion.",
            "Supported weekly lab sessions and assessments, driving student engagement in collaborative coding exercises while evaluating performance and providing actionable feedback to improve learning outcomes."
        ]
    },
    {
        role: "Undergraduate Research Volunteer",
        company: "UMass Amherst",
        location: "Amherst, MA",
        date: "Jun. 2025 – Sept. 2025",
        bullets: [
            "Conducted evaluation studies using standardized rubrics and LLM-to-human score comparisons across thousands of writing samples to enhance the accuracy of AI scoring tools for critical thinking assessment.",
            "Analyzed datasets of critical thinking questions using Python and data processing libraries, ensuring questions met criteria for depth, relevance, and sensitivity to bias for classroom use.",
            "Implemented prompt engineering techniques (zero-shot and few-shot evaluation), improving LLM scoring performance by 15% in F1 score and enabling scalable evaluation through an automated pipeline that was 10x faster than manual workflows."
        ]
    },
    {
        role: "AI Studio Fellow",
        company: "MIT",
        location: "Cambridge, MA",
        date: "May 2024 – Apr. 2025",
        bullets: [
            "Implemented a healthcare-focused ML model using Random Forest to improve diagnosis of ADHD in underrepresented populations, increasing model performance to an F1 score of 0.73 through feature engineering.",
            "Collaborated to develop a machine learning model predicting loan prepayment risk for mortgage portfolios using XGBoost and SHAP; derived data-driven insights based on real-world use cases at companies like Fannie Mae."
        ]
    },
]

const Experience = () => {
    const [letterClass, setLetterClass] = useState("text-animate")

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            setLetterClass("text-animate-hover")
        }, 3000)
        return () => clearTimeout(timeOutId)
    }, [])

    return (
        <>
            <div className="container experience-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={["E", "x", "p", "e", "r", "i", "e", "n", "c", "e"]}
                            idx={15}
                        />
                    </h1>
                </div>
                <div className="timeline">
                    {experienceData.map(function(exp, i) {
                        return (
                            <div className="timeline-item" key={i}>
                                <div className="timeline-dot"></div>
                                <div className="timeline-card">
                                    <div className="timeline-header">
                                        <div className="timeline-left">
                                            <h2>{exp.role}</h2>
                                            <span className="company">{exp.company} — {exp.location}</span>
                                        </div>
                                        <span className="date">{exp.date}</span>
                                    </div>
                                    <ul>
                                        {exp.bullets.map(function(bullet, j) {
                                            return <li key={j}>{bullet}</li>
                                        })}
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Experience
