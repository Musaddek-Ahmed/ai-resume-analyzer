import React from 'react'
import { Link } from 'react-router'

const ResumeCard = ({resume}: {resume: Resume}) => {
  return (
    <Link to={`/resumes/${resume.id}`} className="resume-card">
    </Link>
  )
}

export default ResumeCard