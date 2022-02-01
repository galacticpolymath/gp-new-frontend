import React from 'react'

import './style.scss'

const LessonHelperText = ({text}) => (
  <div className="pick-grade-band-note">
    <i className="fas fa-hand-point-down"/>
    <span>{text}</span>
  </div>
)

export default LessonHelperText