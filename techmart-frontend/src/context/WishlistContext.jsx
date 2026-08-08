import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import toast from "react-hot-toast";

const WishlistContext = createContext(null);

const STORAGE_KEY = "technest_wishlist";

export function WishlistProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(items)
    );
  }, [items]);

  function toggleWishlist(product) {
    const exists = items.some(
      (item) => item.id === product.id
    );

    if (exists) {
      setItems((prev) =>
        prev.filter(
          (item) => item.id !== product.id
        )
      );

      toast(
        `${product.name} removed from wishlist`,
        {
          icon: "🗑️",
          id: `wishlist-${product.id}`,
        }
      );

      return;
    }

    setItems((prev) => [
      ...prev,
      product,
    ]);

    toast.success(
      `${product.name} added to wishlist`,
      {
        icon: "❤️",
        id: `wishlist-${product.id}`,
      }
    );
  }

  function isWishlisted(productId) {
    return items.some(
      (item) => item.id === productId
    );
  }

  const value = useMemo(
    () => ({
      items,
      toggleWishlist,
      isWishlisted,
      count: items.length,
    }),
    [items]
  );

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error(
      "useWishlist must be used within WishlistProvider"
    );
  }

  return context;
}