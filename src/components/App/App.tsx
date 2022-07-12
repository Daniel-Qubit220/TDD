import React from 'react'
import ICONS from '../../constants/icons'
import TEXT from '../../constants/text'

const App: React.FC = () => (
  <div className="h-screen">
    <div className="flex items-center justify-center h-full">
      <img className="max-w-sm" src={ICONS.reactIcon}></img>
      <h1 className="text-3xl font-bold underline">{TEXT.welcome}</h1>
    </div>
  </div>
)

export default App
