import React, { useState } from 'react'
import ICONS from '../../constants/icons'
import TEXT from '../../constants/text'
import ButtonComponent from '../Buttons/ButtonComponent'
/* import { MailIcon } from '@heroicons/react/solid'
 */

const App = () => {
  const [showCCCIcon, setShowCCCIcon] = useState(false)
  return (
    <>
      <div className="h-screen">
        <div className="flex flex-col items-center justify-center h-full">
          <img
            className="max-w-sm w-[300px] h-[100px]"
            src={showCCCIcon ? ICONS.cccIcon : ICONS.reactIcon}
          ></img>
          <h1 className="text-3xl font-bold underline">{TEXT.welcome}</h1>

          <div className="flex justify-center pt-12 w-[240px]">
            <ButtonComponent
              buttonText="Hola soy un botón"
              onClick={() => setShowCCCIcon(!showCCCIcon)}
              iconButton={ICONS.cccIcon}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
