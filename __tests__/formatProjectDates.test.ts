import { formatProjectDates } from '@utils/formatProjectDates'

describe('formatProjectDates', () => {
  it('return object which contains formatted startDate and endDate in "DD.MM.YYYY" format', () => {
    const formattedDates = formatProjectDates('2020-01-01', '2020-02-01')
    expect(formattedDates).toEqual({
      startDate: '1.1.2020',
      endDate: '1.2.2020'
    })
  })

  it('return object which contains null for startDate if it is undefined and endDate in "DD.MM.YYYY" format', () => {
    const formattedDates = formatProjectDates(undefined, '2020-02-01')
    expect(formattedDates).toEqual({ startDate: null, endDate: '1.2.2020' })
  })

  it('return object which contains null for endDate if it is undefined and startDate in "DD.MM.YYYY" format', () => {
    const formattedDates = formatProjectDates('2020-01-01', undefined)
    expect(formattedDates).toEqual({ startDate: '1.1.2020', endDate: null })
  })

  it('return object which contains null for endDate and startDate if both is undefined', () => {
    const formattedDates = formatProjectDates(undefined, undefined)
    expect(formattedDates).toEqual({ startDate: null, endDate: null })
  })

  it('return object which contains null for endDate and startDate if both is empty string', () => {
    const formattedDates = formatProjectDates('', '')
    expect(formattedDates).toEqual({ startDate: null, endDate: null })
  })

  it('return object which contains null for endDate and startDate if both is random string', () => {
    const formattedDates = formatProjectDates('random string', 'random string')
    expect(formattedDates).toEqual({ startDate: null, endDate: null })
  })
})
