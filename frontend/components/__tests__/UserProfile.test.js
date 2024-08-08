import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import UserProfile, { getFullName} from '../UserProfile'

// Unit tests for the helper function
describe('unit tests for getFullName', () => {
  it('should return the full name when provided both first and last names', () => {
    expect(getFullName('John', 'Doe')).toBe('John Doe')
  })
  it('should return only the last name when the first name is missing', () => {
    expect(getFullName('', 'Doe')).toBe('Doe')
  })
  it('should return only the first name when the last name is missing', () => {
    expect(getFullName("John", '')).toBe("John")
  })
  it('should return "Anonymous" when both names are missing', () => {
    expect(getFullName("", "")).toBe('Anonymous')
  })
  
})

// React Testing Library tests for the UserProfile component
describe('RTL tests for UserProfile', () => {
  it('should render user profile correctly', () => {
    render(<UserProfile
    fname='John'
    lname='Doe'
    email='johndoe@example.com'
    location='New York'
      /> )
      screen.debug()
  })
})
