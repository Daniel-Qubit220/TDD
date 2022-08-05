import React from 'react'

interface IButtonComponent {
  buttonText: string
  onClick?: () => void
  iconButton?: string
  disabledButton?: boolean
}

const ButtonComponent = (props: IButtonComponent) => {
  const { buttonText, iconButton, onClick, disabledButton } = props

  const classButton =
    'inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-red-600 hover:bg-red-700 focus:ring-2 focus:ring-offset-2 focus:ring-red-500'

  const buttonProps = {
    disabled: disabledButton,
    onClick,
    className: classButton,
  }
  const content = (
    <>
      {!!iconButton && (
        <img
          width={50}
          height={50}
          className="max-w-[100px]"
          src={iconButton}
        />
      )}
      {buttonText}
    </>
  )
  return (
    <button type="button" {...buttonProps}>
      {content}
    </button>
  )
}

export default ButtonComponent
