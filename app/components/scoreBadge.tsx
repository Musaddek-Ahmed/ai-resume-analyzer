import React from 'react'

interface ScoreBadgeProps {
    score: number;
}

const ScoreBadge: React.FC<ScoreBadgeProps> = ({score}) => {
    let badgeColor = ''
    let badgeText = ''
    if (score > 70) {
        badgeColor = 'bg-badge-green text-green-600'
        badgeText = 'Strong'
    } else if (score >= 50) {
        badgeColor = 'bg-badge-yellow text-yellow-500'
        badgeText = 'Average'
    } else {
        badgeColor = 'bg-badge-red text-red-500'
        badgeText = 'Needs Work'
    }
  return (
    <div className={`px-3 py-1 rounded-full ${badgeColor}`}>
        <p className='text-sm font-medium'>{badgeText}</p>
    </div>
  )
}

export default ScoreBadge