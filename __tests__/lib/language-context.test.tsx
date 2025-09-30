import { render, screen, act } from '@testing-library/react'
import { LanguageProvider, useLanguage } from '@/lib/language-context'

// Test component to use the context
const TestComponent = () => {
  const { language, setLanguage } = useLanguage()
  return (
    <div>
      <span data-testid="language">{language}</span>
      <button onClick={() => setLanguage('en')}>Change to EN</button>
      <button onClick={() => setLanguage('fr')}>Change to FR</button>
    </div>
  )
}

describe('LanguageContext', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('should provide default language (fr)', () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    )

    expect(screen.getByTestId('language')).toHaveTextContent('fr')
  })

  it('should change language when setLanguage is called', () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    )

    expect(screen.getByTestId('language')).toHaveTextContent('fr')

    act(() => {
      screen.getByText('Change to EN').click()
    })

    expect(screen.getByTestId('language')).toHaveTextContent('en')
  })

  it('should load language from localStorage', () => {
    localStorage.setItem('eeteck-language', 'en')

    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    )

    expect(screen.getByTestId('language')).toHaveTextContent('en')
  })

  it('should handle invalid localStorage value', () => {
    localStorage.setItem('eeteck-language', 'invalid')

    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    )

    expect(screen.getByTestId('language')).toHaveTextContent('fr')
  })

  it('should handle localStorage errors gracefully', () => {
    // Mock localStorage to throw error
    const originalGetItem = localStorage.getItem
    localStorage.getItem = jest.fn(() => {
      throw new Error('localStorage error')
    })

    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    )

    expect(screen.getByTestId('language')).toHaveTextContent('fr')

    // Restore original function
    localStorage.getItem = originalGetItem
  })

  it('should throw error when used outside provider', () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {})
    
    expect(() => {
      render(<TestComponent />)
    }).toThrow('useLanguage must be used within a LanguageProvider')

    consoleError.mockRestore()
  })
})
