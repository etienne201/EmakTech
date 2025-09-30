import { pageview, event, trackContactForm, trackPhoneCall, trackWhatsApp } from '@/lib/analytics'

// Mock gtag
const mockGtag = jest.fn()
global.gtag = mockGtag

// Mock process.env
const originalEnv = process.env

describe('analytics', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    process.env = { ...originalEnv }
  })

  afterAll(() => {
    process.env = originalEnv
  })

  describe('pageview', () => {
    it('should call gtag when window and gtag are available', () => {
      process.env.NEXT_PUBLIC_GA_ID = 'GA-123456'
      
      pageview('/test-page')

      expect(mockGtag).toHaveBeenCalledWith('config', 'GA-123456', {
        page_path: '/test-page',
      })
    })

    it('should not call gtag when GA_ID is not set', () => {
      delete process.env.NEXT_PUBLIC_GA_ID
      
      pageview('/test-page')

      expect(mockGtag).not.toHaveBeenCalled()
    })

    it('should handle gtag errors gracefully', () => {
      const consoleWarn = jest.spyOn(console, 'warn').mockImplementation(() => {})
      process.env.NEXT_PUBLIC_GA_ID = 'GA-123456'
      mockGtag.mockImplementation(() => {
        throw new Error('gtag error')
      })

      pageview('/test-page')

      expect(consoleWarn).toHaveBeenCalledWith(
        'Erreur lors du tracking de page:',
        expect.any(Error)
      )

      consoleWarn.mockRestore()
    })
  })

  describe('event', () => {
    it('should call gtag with event data', () => {
      event({
        action: 'click',
        category: 'button',
        label: 'test-button',
        value: 1,
      })

      expect(mockGtag).toHaveBeenCalledWith('event', 'click', {
        event_category: 'button',
        event_label: 'test-button',
        value: 1,
      })
    })

    it('should call gtag without optional parameters', () => {
      event({
        action: 'click',
        category: 'button',
      })

      expect(mockGtag).toHaveBeenCalledWith('event', 'click', {
        event_category: 'button',
        event_label: undefined,
        value: undefined,
      })
    })

    it('should handle gtag errors gracefully', () => {
      const consoleWarn = jest.spyOn(console, 'warn').mockImplementation(() => {})
      mockGtag.mockImplementation(() => {
        throw new Error('gtag error')
      })

      event({
        action: 'click',
        category: 'button',
      })

      expect(consoleWarn).toHaveBeenCalledWith(
        'Erreur lors du tracking d\'événement:',
        expect.any(Error)
      )

      consoleWarn.mockRestore()
    })
  })

  describe('trackContactForm', () => {
    it('should track contact form submission', () => {
      trackContactForm('printing')

      expect(mockGtag).toHaveBeenCalledWith('event', 'contact_form_submit', {
        event_category: 'engagement',
        event_label: 'printing',
        value: undefined,
      })
    })
  })

  describe('trackPhoneCall', () => {
    it('should track phone call', () => {
      trackPhoneCall()

      expect(mockGtag).toHaveBeenCalledWith('event', 'phone_call', {
        event_category: 'contact',
        event_label: 'header_phone',
        value: undefined,
      })
    })
  })

  describe('trackWhatsApp', () => {
    it('should track WhatsApp click', () => {
      trackWhatsApp()

      expect(mockGtag).toHaveBeenCalledWith('event', 'whatsapp_click', {
        event_category: 'contact',
        event_label: 'floating_button',
        value: undefined,
      })
    })
  })
})

