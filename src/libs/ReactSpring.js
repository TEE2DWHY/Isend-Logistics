import { Typewriter } from 'react-simple-typewriter'
import React from 'react'

const TextChange = () => {
  return (
    <Typewriter
            words={['experience', 'delivery']}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
  )
}

export default TextChange