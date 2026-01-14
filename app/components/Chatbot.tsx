'use client'

import { useState, useRef, useEffect } from 'react'
import {
  MessageCircle,
  X,
  Send,
  Phone,
  RotateCcw,
  MapPin,
  Calculator,
  Wrench,
  Clock,
  Sparkles,
  ChevronDown
} from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

// Quick action buttons for common queries
const quickActions = [
  { label: 'Service Areas', query: 'What areas do you serve in Vancouver?', icon: MapPin },
  { label: 'Get a Quote', query: 'How do I get a free quote for my flooring project?', icon: Calculator },
  { label: 'Our Services', query: 'What flooring services do you offer?', icon: Wrench },
  { label: 'Warranties', query: 'What warranties do you offer on your work?', icon: Clock },
]

// Contact info
const contactInfo = {
  phone: '(604) 353-6077',
  phoneHref: 'tel:+16043536077',
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showScrollButton, setShowScrollButton] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isLoading])

  // Check if we need to show scroll button
  useEffect(() => {
    const container = messagesContainerRef.current
    if (!container) return

    const handleScroll = () => {
      const isNearBottom = container.scrollHeight - container.scrollTop - container.clientHeight < 100
      setShowScrollButton(!isNearBottom && messages.length > 0)
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, { role: 'user', content: userMessage }]
        })
      })

      if (!response.ok) throw new Error('Failed to get response')

      const data = await response.json()
      setMessages(prev => [...prev, { role: 'assistant', content: data.message }])
    } catch (error) {
      console.error('Chat error:', error)
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `I apologize, but I'm having trouble connecting right now. For immediate assistance, please call us at ${contactInfo.phone} or fill out our quote form. We'd love to help with your flooring project!`
      }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleQuickAction = (query: string) => {
    setInput(query)
    // Auto-submit
    setMessages(prev => [...prev, { role: 'user', content: query }])
    setIsLoading(true)

    fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: [...messages, { role: 'user', content: query }]
      })
    })
      .then(res => res.json())
      .then(data => {
        setMessages(prev => [...prev, { role: 'assistant', content: data.message }])
      })
      .catch(() => {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: `I apologize, but I'm having trouble connecting. Please call us at ${contactInfo.phone} for immediate assistance.`
        }])
      })
      .finally(() => {
        setIsLoading(false)
        setInput('')
      })
  }

  const resetChat = () => {
    setMessages([])
    setInput('')
  }

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`
          fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50
          w-14 h-14 sm:w-16 sm:h-16 rounded-full
          bg-gradient-to-br from-forest-600 to-forest-700
          text-white shadow-2xl
          hover:shadow-forest-600/40 hover:scale-105
          transition-all duration-300
          flex items-center justify-center
          ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}
        `}
        aria-label="Open chat"
      >
        <MessageCircle size={28} />

        {/* Online indicator */}
        <span className="absolute top-0 right-0 w-5 h-5 bg-copper-500 rounded-full border-2 border-white flex items-center justify-center">
          <Sparkles size={10} className="text-white" />
        </span>

        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-forest-500 animate-ping opacity-20" />
      </button>

      {/* Chat Window */}
      <div className={`
        fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50
        w-[calc(100vw-32px)] sm:w-[400px] max-w-[400px]
        bg-white rounded-2xl sm:rounded-3xl shadow-2xl
        transition-all duration-300 origin-bottom-right
        flex flex-col overflow-hidden
        ${isOpen
          ? 'scale-100 opacity-100 visible'
          : 'scale-90 opacity-0 invisible pointer-events-none'
        }
      `}
        style={{ maxHeight: 'calc(100vh - 80px)' }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-charcoal-800 to-charcoal-900 text-white p-5 flex-shrink-0 rounded-t-2xl sm:rounded-t-3xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Logo Badge */}
              <div className="w-11 h-11 bg-forest-600 rounded-xl flex items-center justify-center">
                <span
                  className="text-white text-sm font-bold"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  PM
                </span>
              </div>

              <div>
                <h3
                  className="font-semibold text-base leading-tight text-white"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  PROMARK FLOORING
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-white/80 mt-0.5">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Online • Ready to help
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={resetChat}
                className="w-9 h-9 rounded-lg hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="Reset chat"
                title="Reset conversation"
              >
                <RotateCcw size={18} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="w-9 h-9 rounded-lg hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Messages Container */}
        <div
          ref={messagesContainerRef}
          className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-cream-50 to-white"
          style={{ minHeight: '300px', maxHeight: '400px' }}
        >
          {/* Welcome State */}
          {messages.length === 0 && !isLoading && (
            <div className="space-y-4">
              {/* Welcome Message */}
              <div className="bg-white rounded-2xl rounded-bl-md p-4 shadow-sm border border-cream-200">
                <p className="text-charcoal-700 text-sm leading-relaxed">
                  Welcome to PROMARK FLOORING! I'm here to help you with floor leveling, hardwood installation, and all your flooring needs. How can I assist you today?
                </p>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-2">
                {quickActions.map((action) => (
                  <button
                    key={action.label}
                    onClick={() => handleQuickAction(action.query)}
                    className="flex items-center gap-2 p-3 bg-white rounded-xl border border-cream-200 text-left hover:border-forest-300 hover:shadow-md transition-all group"
                  >
                    <div className="w-8 h-8 bg-forest-100 rounded-lg flex items-center justify-center group-hover:bg-forest-600 transition-colors">
                      <action.icon size={16} className="text-forest-600 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm font-medium text-charcoal-700">{action.label}</span>
                  </button>
                ))}
              </div>

              {/* Call Option */}
              <a
                href={contactInfo.phoneHref}
                className="flex items-center justify-center gap-2 p-3 bg-forest-50 rounded-xl text-forest-700 hover:bg-forest-100 transition-colors"
              >
                <Phone size={18} />
                <span className="font-medium">Or call us: {contactInfo.phone}</span>
              </a>
            </div>
          )}

          {/* Messages */}
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {message.role === 'assistant' && (
                <div className="w-8 h-8 bg-forest-600 rounded-lg flex items-center justify-center mr-2 flex-shrink-0">
                  <span className="text-white text-xs font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                    PM
                  </span>
                </div>
              )}

              <div
                className={`
                  max-w-[80%] p-3.5 text-sm leading-relaxed
                  ${message.role === 'user'
                    ? 'bg-forest-600 text-white rounded-2xl rounded-br-md'
                    : 'bg-white text-charcoal-700 rounded-2xl rounded-bl-md shadow-sm border border-cream-200'
                  }
                `}
              >
                {message.content}
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isLoading && (
            <div className="flex justify-start">
              <div className="w-8 h-8 bg-forest-600 rounded-lg flex items-center justify-center mr-2 flex-shrink-0">
                <span className="text-white text-xs font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                  PM
                </span>
              </div>
              <div className="bg-white rounded-2xl rounded-bl-md p-4 shadow-sm border border-cream-200">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 bg-forest-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 bg-forest-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 bg-forest-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Scroll to bottom button */}
        {showScrollButton && (
          <button
            onClick={scrollToBottom}
            className="absolute bottom-24 right-4 w-8 h-8 bg-forest-600 text-white rounded-full shadow-lg hover:bg-forest-700 transition-colors flex items-center justify-center"
          >
            <ChevronDown size={18} />
          </button>
        )}

        {/* Input Area */}
        <form onSubmit={handleSubmit} className="p-4 border-t border-cream-200 bg-white flex-shrink-0">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-3 bg-cream-50 rounded-xl text-sm border border-cream-200 focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-500/10 transition-all"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="w-12 h-12 bg-forest-600 text-white rounded-xl flex items-center justify-center hover:bg-forest-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Send size={18} />
            </button>
          </div>

          <p className="text-xs text-charcoal-400 mt-2 text-center">
            Powered by AI • Available 24/7
          </p>
        </form>
      </div>
    </>
  )
}
