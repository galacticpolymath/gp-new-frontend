/* eslint-disable */

import {
  containsSearchTerm,
  isSearchable,
  nonIterableContainsSearchTerm
} from './search'

describe('string contains search term', () => {
  it.each([
    ['needle', true],
    ['haystack', false]
  ])('%s', (haystack, expectedResult) => {
    expect(nonIterableContainsSearchTerm('needle', haystack)).toEqual(expectedResult)
  })
})
describe('is searchable', () => {
  it.each([
    ['string', 'string', true],
    ['function', function () {}, false],
    ['null', null, false],
    ['undefined', undefined, false],
  ])('%s', (name, haystack, expectedResult) => {
    expect(isSearchable(haystack)).toEqual(expectedResult)
  })
})
describe('contains search term', () => {
  it.each([
    ['object value', { data: 'needle' }, true],
    ['object key', { needle: 'data' }, false],
    ['nested object value', { nested: { nested: 'needle' } }, true],
    ['nested object key', { nested: { needle: 'data' } }, false],
    ['function', { data() {} }, false],
    ['in an array', { data: ['needle'] }, true],
    ['bool', { data: true }, false],
    ['null', { data: null }, false],
    ['undefined', { data: undefined }, false],
    [
      'first object value in array',
      {
        data: [
          { hay: 'needle' },
          { hay: 'none' },
        ]
      },
      true
    ],
    [
      'last object value in array',
      {
        data: [
          { hay: 'none' },
          { hay: 'needle' },
        ]
      },
      true
    ],
    [
      'object key in array',
      { data:
        [
          { needle: 'none' },
          { needle: 'none' },
        ]
      },
      false
    ]
  ])('%s', (name, haystack, expectedResult) => {
    expect(containsSearchTerm('needle', haystack)).toEqual(expectedResult)
  })
})