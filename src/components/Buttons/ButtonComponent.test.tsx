import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import ButtonComponent from './ButtonComponent'
import '@testing-library/jest-dom/extend-expect'

const onClickMock = jest.fn()

describe('test ButtonComponent', () => {
  describe('test buttonTextProp', () => {
    it('Should receive buttonText prop', () => {
      const component = render(<ButtonComponent buttonText="click here" />)
      expect(component.queryByText('click here')).toBeInTheDocument()
    })
  })

  describe('test onClickProp', () => {
    it('should receive a onClick Prop', () => {
      const component = render(
        <ButtonComponent buttonText="Hola soy un botón" onClick={onClickMock} />
      )
      fireEvent.click(component.getByRole('button'))
      fireEvent.click(component.getByText('Hola soy un botón'))
      expect(onClickMock).toHaveBeenCalled()
    })
  })

  describe('test iconButtonProp', () => {
    it('should receive a iconButton Prop', () => {
      const component = render(
        <ButtonComponent
          buttonText="Hola soy un botón"
          onClick={onClickMock}
          iconButton="/path/image.png"
        />
      )
      expect(component.getByRole('img')?.getAttribute('src')).toBe(
        '/path/image.png'
      )
    })
  })

  describe('test disabledButtonProp', () => {
    it('should receive a disabledButton Prop', () => {
      const component = render(
        <ButtonComponent
          buttonText="Hola soy un botón"
          onClick={onClickMock}
          iconButton="/path/image.png"
          disabledButton={true}
        />
      )
      expect(component.getByRole('button')).toBeDisabled()
      expect(component.container.querySelector('button')).toBeDisabled()
      expect(component.getByText('Hola soy un botón')).toBeDisabled()
    })
  })
})
