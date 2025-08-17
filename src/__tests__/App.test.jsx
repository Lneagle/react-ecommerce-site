import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, waitFor, within } from '@testing-library/react'
import App from '../components/App'

beforeEach(() => {
  global.fetch = vi.fn((url) => {
    if (url.includes('/products')) {
      return Promise.resolve({
        ok: true,
        json: async () => [
          {
            "id": "1",
            "description": "Medium Roast, nutty flavor",
            "name": "Vanilla Bean",
            "origin": "Columbia",
            "price": 10
          },
        ],
      })
    }
  })
  window.history.pushState({}, '', '/')
})

describe('Coffee R Us App - Vitest Suite', () => {
  it('renders Home component at root ("/")', async () => {
    render(<App />)
    expect(await screen.findByText(/The go to store for your coffee needs/i)).toBeInTheDocument()
  })

  it('displays product list at "/products"', async () => {
    window.history.pushState({}, '', '/products')
    render(<App />)
    expect(await screen.findByText(/Vanilla Bean/i)).toBeInTheDocument()
  })

  it('navigates to a specific Product page', async () => {
    window.history.pushState({}, '', '/products/1')
    render(<App />)
    expect(await screen.findByText(/Medium Roast, nutty flavor/i)).toBeInTheDocument()
  })

  it('handles invalid page gracefully', async () => {
    window.history.pushState({}, '', '/something-wrong')
    render(<App />)
    expect(await screen.findByText(/Page not found/i)).toBeInTheDocument()
  })
})
