import '@testing-library/jest-dom'
import ShowMore from '@components/common/ShowMore'
import { act, render, screen } from '@testing-library/react'

describe('ShowMore', () => {
  it('renders button with "Näytä lisää" initially', () => {
    const data = ['item1', 'item2', 'item3']
    render(<ShowMore data={data} setData={() => {}} />)

    expect(screen.getByText('Näytä lisää')).toBeInTheDocument()
  })

  it('renders button with "Näytä vähemmän" after clicking', () => {
    const setData = jest.fn()
    render(<ShowMore data={['item1', 'item2']} setData={setData} />)

    act(() => {
      screen.getByText('Näytä lisää').click()
    })

    expect(screen.getByText('Näytä vähemmän')).toBeInTheDocument()
  })

  it('calls setData with full array when showing more', () => {
    const setData = jest.fn()
    render(<ShowMore data={['item1', 'item2', 'item3']} setData={setData} />)

    act(() => {
      screen.getByText('Näytä lisää').click()
    })
    expect(setData).toHaveBeenCalledWith(['item1', 'item2', 'item3'])
  })

  it('calls setData with first item only when showing less', () => {
    const setData = jest.fn()
    render(<ShowMore data={['item1', 'item2', 'item3']} setData={setData} />)

    act(() => {
      screen.getByText('Näytä lisää').click()
    })
    expect(setData).toHaveBeenCalledWith(['item1', 'item2', 'item3'])

    act(() => {
      screen.getByText('Näytä vähemmän').click()
    })
    expect(setData).toHaveBeenCalledWith(['item1'])
  })

  it('renders button with type="button"', () => {
    render(<ShowMore data={['item1']} setData={() => {}} />)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('type', 'button')
  })

  it('is wrapped in a div with text-center className', () => {
    render(<ShowMore data={['item1']} setData={() => {}} />)
    const container = screen.getByRole('button').closest('div')
    expect(container).toHaveClass('text-center')
  })
})
