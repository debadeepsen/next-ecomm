import { signal, computed, effect } from '@preact/signals-react'
import { CartItem } from '@/utils/types'

// --- localStorage helpers ---
const STORAGE_KEY = 'SS_cart'

const loadFromStorage = <T>(key: string, fallback: T): T => {
  if (typeof window === 'undefined') return fallback
  try {
    const saved = localStorage.getItem(key)
    return saved ? JSON.parse(saved) : fallback
  } catch {
    return fallback
  }
}

const saveToStorage = (key: string, value: unknown) => {
  if (typeof window === 'undefined') return
  localStorage.setItem(key, JSON.stringify(value))
}

export const cartSignal = signal<CartItem[]>(loadFromStorage<CartItem[]>(STORAGE_KEY, []))

export const initializeCart = () => {
  // Load cart from localStorage at startup
  if (typeof window !== 'undefined') {
    cartSignal.value = loadFromStorage<CartItem[]>(STORAGE_KEY, [])
  }
}

// Persist whenever cart changes
effect(() => {
  saveToStorage(STORAGE_KEY, cartSignal.value)
})

// --- selectors (computed) ---
export const totalItems = computed(() =>
  cartSignal.value.reduce((acc, item) => acc + item.quantity, 0)
)

export const totalPrice = computed(() =>
  cartSignal.value.reduce((acc, item) => acc + item.quantity * item.price, 0)
)

// --- actions ---
export const addToCart = (item: CartItem) => {
  const existing = cartSignal.value.find(i => i.id === item.id)
  if (existing) {
    cartSignal.value = cartSignal.value.map(i =>
      i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
    )
  } else {
    cartSignal.value = [...cartSignal.value, item]
  }
}

export const removeFromCart = (id: number) => {
  cartSignal.value = cartSignal.value.filter(i => i.id !== id)
}

export const clearCart = () => {
  cartSignal.value = []
}
