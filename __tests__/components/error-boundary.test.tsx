import { render, screen } from '@testing-library/react'
import { ErrorBoundary } from '@/components/error-boundary'

// Component that throws an error
const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error('Test error')
  }
  return <div>No error</div>
}

// Component that uses the error boundary
const TestApp = ({ shouldThrow }: { shouldThrow: boolean }) => (
  <ErrorBoundary>
    <ThrowError shouldThrow={shouldThrow} />
  </ErrorBoundary>
)

describe('ErrorBoundary', () => {
  let consoleError: jest.SpyInstance

  beforeEach(() => {
    consoleError = jest.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterEach(() => {
    consoleError.mockRestore()
  })

  it('should render children when there is no error', () => {
    render(<TestApp shouldThrow={false} />)
    
    expect(screen.getByText('No error')).toBeInTheDocument()
  })

  it('should render error UI when there is an error', () => {
    render(<TestApp shouldThrow={true} />)
    
    expect(screen.getByText('Oops! Une erreur s\'est produite')).toBeInTheDocument()
    expect(screen.getByText('Nous nous excusons pour la gêne occasionnée. Veuillez réessayer ou retourner à l\'accueil.')).toBeInTheDocument()
  })

  it('should show retry button', () => {
    render(<TestApp shouldThrow={true} />)
    
    expect(screen.getByText('Réessayer')).toBeInTheDocument()
  })

  it('should show home button', () => {
    render(<TestApp shouldThrow={true} />)
    
    expect(screen.getByText('Accueil')).toBeInTheDocument()
  })

  it('should show error message in development mode', () => {
    const originalEnv = process.env.NODE_ENV
    process.env.NODE_ENV = 'development'

    render(<TestApp shouldThrow={true} />)
    
    expect(screen.getByText('Test error')).toBeInTheDocument()

    process.env.NODE_ENV = originalEnv
  })

  it('should not show error message in production mode', () => {
    const originalEnv = process.env.NODE_ENV
    process.env.NODE_ENV = 'production'

    render(<TestApp shouldThrow={true} />)
    
    expect(screen.queryByText('Test error')).not.toBeInTheDocument()

    process.env.NODE_ENV = originalEnv
  })

  it('should call onError prop when provided', () => {
    const onError = jest.fn()
    
    render(
      <ErrorBoundary onError={onError}>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    )

    expect(onError).toHaveBeenCalledWith(
      expect.any(Error),
      expect.objectContaining({
        componentStack: expect.any(String),
      })
    )
  })

  it('should render custom fallback when provided', () => {
    const customFallback = <div>Custom error message</div>
    
    render(
      <ErrorBoundary fallback={customFallback}>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    )

    expect(screen.getByText('Custom error message')).toBeInTheDocument()
  })
})

