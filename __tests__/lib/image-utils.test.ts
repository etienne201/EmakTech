import {
  getOptimizedImageProps,
  getImageWithBlur,
  checkImageExists,
  getFallbackImageProps,
  handleImageError,
  preloadCriticalImages,
} from '@/lib/image-utils'

// Mock fetch
global.fetch = jest.fn()

describe('image-utils', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('getOptimizedImageProps', () => {
    it('should return optimized props for valid image', () => {
      const result = getOptimizedImageProps('/logo.png', 'Test image')
      
      expect(result).toEqual({
        src: '/logo.png',
        alt: 'Test image',
        width: 800,
        height: 600,
        className: '',
        priority: false,
        quality: 75,
      })
    })

    it('should return fallback for invalid image', () => {
      const result = getOptimizedImageProps('/invalid.jpg', 'Test image')
      
      expect(result.src).toBe('/placeholder.svg')
    })

    it('should use custom options', () => {
      const result = getOptimizedImageProps('/logo.png', 'Test', {
        width: 400,
        height: 300,
        className: 'custom-class',
        priority: true,
        quality: 90,
      })
      
      expect(result).toEqual({
        src: '/logo.png',
        alt: 'Test',
        width: 400,
        height: 300,
        className: 'custom-class',
        priority: true,
        quality: 90,
      })
    })
  })

  describe('getImageWithBlur', () => {
    it('should return image props with blur', () => {
      const result = getImageWithBlur('/logo.png', 'Test image')
      
      expect(result).toMatchObject({
        src: '/logo.png',
        alt: 'Test image',
        placeholder: 'blur',
        blurDataURL: expect.any(String),
      })
    })
  })

  describe('checkImageExists', () => {
    it('should return false for invalid input', async () => {
      expect(await checkImageExists('')).toBe(false)
      expect(await checkImageExists(null as any)).toBe(false)
      expect(await checkImageExists(undefined as any)).toBe(false)
    })

    it('should return true for known local images', async () => {
      expect(await checkImageExists('/logo.png')).toBe(true)
    })

    it('should return false for unknown local images', async () => {
      expect(await checkImageExists('/unknown.jpg')).toBe(false)
    })

    it('should check HTTP images', async () => {
      ;(fetch as jest.Mock).mockResolvedValueOnce({ ok: true })
      
      const result = await checkImageExists('https://example.com/image.jpg')
      
      expect(fetch).toHaveBeenCalledWith('https://example.com/image.jpg', {
        method: 'HEAD',
        signal: expect.any(AbortSignal),
      })
      expect(result).toBe(true)
    })

    it('should handle fetch errors', async () => {
      const consoleWarn = jest.spyOn(console, 'warn').mockImplementation(() => {})
      ;(fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'))
      
      const result = await checkImageExists('https://example.com/image.jpg')
      
      expect(result).toBe(false)
      expect(consoleWarn).toHaveBeenCalledWith(
        'Erreur lors de la vérification de l\'image:',
        expect.any(Error)
      )
      
      consoleWarn.mockRestore()
    })
  })

  describe('getFallbackImageProps', () => {
    it('should return fallback props with default alt', () => {
      const result = getFallbackImageProps()
      
      expect(result).toEqual({
        src: '/placeholder.svg',
        alt: 'Placeholder: Image',
        width: 400,
        height: 300,
        className: 'opacity-50',
      })
    })

    it('should return fallback props with custom alt', () => {
      const result = getFallbackImageProps('Custom alt')
      
      expect(result.alt).toBe('Placeholder: Custom alt')
    })
  })

  describe('handleImageError', () => {
    it('should change src to fallback when image fails', () => {
      const mockImg = {
        src: 'https://example.com/fail.jpg',
        alt: 'Test',
      } as HTMLImageElement

      const event = {
        currentTarget: mockImg,
      } as React.SyntheticEvent<HTMLImageElement, Event>

      handleImageError(event)

      expect(mockImg.src).toBe('/placeholder.svg')
      expect(mockImg.alt).toBe('Image non disponible')
    })

    it('should not change src if already fallback', () => {
      const mockImg = {
        src: '/placeholder.svg',
        alt: 'Already fallback',
      } as HTMLImageElement

      const event = {
        currentTarget: mockImg,
      } as React.SyntheticEvent<HTMLImageElement, Event>

      handleImageError(event)

      expect(mockImg.src).toBe('/placeholder.svg')
    })
  })

  describe('preloadCriticalImages', () => {
    it('should preload images when window is available', () => {
      const createElementSpy = jest.spyOn(document, 'createElement')
      const appendChildSpy = jest.spyOn(document.head, 'appendChild')

      preloadCriticalImages()

      expect(createElementSpy).toHaveBeenCalledWith('link')
      expect(appendChildSpy).toHaveBeenCalledTimes(2)

      createElementSpy.mockRestore()
      appendChildSpy.mockRestore()
    })

    it('should handle errors during preload', () => {
      const consoleWarn = jest.spyOn(console, 'warn').mockImplementation(() => {})
      const createElementSpy = jest.spyOn(document, 'createElement').mockImplementation(() => {
        throw new Error('DOM error')
      })

      preloadCriticalImages()

      expect(consoleWarn).toHaveBeenCalledWith(
        'Erreur lors du preload des ressources:',
        expect.any(Error)
      )

      consoleWarn.mockRestore()
      createElementSpy.mockRestore()
    })
  })
})
