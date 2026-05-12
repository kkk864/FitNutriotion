// Общая логика: корзина (localStorage), счётчик, поиск
(function () {
  const CART_KEY = 'fitnutrition_cart';
  const USER_KEY = 'fitnutrition_user';

  function getCart() {
    try {
      const data = localStorage.getItem(CART_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  function saveCart(items) {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
    updateCartCount();
  }

  function updateCartCount() {
    const cart = getCart();
    const total = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    const el = document.getElementById('cart-count');
    if (el) el.textContent = total;
  }

  window.FitNutrition = {
    getCart,
    saveCart,
    addToCart(productId, quantity = 1) {
      const cart = getCart();
      const existing = cart.find(i => i.id === productId);
      if (existing) existing.quantity = (existing.quantity || 1) + quantity;
      else cart.push({ id: productId, quantity });
      saveCart(cart);
    },
    removeFromCart(productId) {
      saveCart(getCart().filter(i => i.id !== productId));
    },
    setCartQuantity(productId, quantity) {
      if (quantity < 1) return this.removeFromCart(productId);
      const cart = getCart();
      const item = cart.find(i => i.id === productId);
      if (item) item.quantity = quantity;
      saveCart(cart);
    },
    getUser() {
      try {
        const data = localStorage.getItem(USER_KEY);
        return data ? JSON.parse(data) : null;
      } catch {
        return null;
      }
    },
    setUser(user) {
      if (user) localStorage.setItem(USER_KEY, JSON.stringify(user));
      else localStorage.removeItem(USER_KEY);
    }
  };

  document.addEventListener('DOMContentLoaded', updateCartCount);
})();
