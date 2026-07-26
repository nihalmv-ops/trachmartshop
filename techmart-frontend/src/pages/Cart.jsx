import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import { formatINR } from "../utils/format";

export default function Cart() {
  const { items, removeItem, updateQty, subtotal, count } = useCart();

  if (items.length === 0) {
    return (
      <div className="container-shell py-24 text-center">
        <div className="inline-flex bg-surface border border-border rounded-full p-5 mb-5">
          <ShoppingBag size={32} className="text-ink-faint" />
        </div>
        <h1 className="font-display font-bold text-2xl text-ink">Your cart is empty</h1>
        <p className="text-ink-muted mt-2">Find something worth clicking "Add to Cart" for.</p>
        <Link to="/shop/laptop" className="btn-primary inline-flex mt-6">
          Browse devices
        </Link>
      </div>
    );
  }

  const shipping = subtotal > 999 ? 0 : 199;
  const total = subtotal + shipping;

  return (
    <div className="container-shell py-10">
      <h1 className="font-display font-bold text-3xl text-ink mb-8">
        Your Cart <span className="text-ink-faint font-mono text-xl">({count})</span>
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 bg-surface border border-border rounded-xl p-4"
            >
              <Link to={`/product/${item.id}`} className="shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover"
                />
              </Link>
              <div className="flex-1 min-w-0 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-ink-faint font-mono uppercase">{item.brand}</p>
                  <Link to={`/product/${item.id}`}>
                    <h3 className="font-display font-semibold text-ink hover:text-accent transition-colors truncate">
                      {item.name}
                    </h3>
                  </Link>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center border border-border rounded-lg">
                    <button
                      onClick={() => updateQty(item.id, item.qty - 1)}
                      className="p-2 text-ink-muted hover:text-accent transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-7 text-center font-mono text-sm">{item.qty}</span>
                    <button
                      onClick={() => updateQty(item.id, item.qty + 1)}
                      className="p-2 text-ink-muted hover:text-accent transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <span className="font-display font-bold text-ink">
                    {formatINR(item.price * item.qty)}
                  </span>
                </div>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                aria-label={`Remove ${item.name}`}
                className="self-start text-ink-faint hover:text-sale transition-colors p-1"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>

        <div className="bg-surface border border-border rounded-2xl p-6 h-fit sticky top-24">
          <h3 className="font-display font-semibold text-lg text-ink mb-4">Order Summary</h3>
          <div className="flex flex-col gap-2 text-sm">
            <Row label="Subtotal" value={formatINR(subtotal)} />
            <Row label="Shipping" value={shipping === 0 ? "Free" : formatINR(shipping)} />
          </div>
          <div className="border-t border-border mt-4 pt-4 flex items-center justify-between">
            <span className="font-semibold text-ink">Total</span>
            <span className="font-display font-bold text-xl text-ink">{formatINR(total)}</span>
          </div>
          <button className="btn-primary w-full mt-6">Checkout</button>
          <p className="text-xs text-ink-faint text-center mt-3">
            This is a demo storefront — checkout is not wired to a payment processor.
          </p>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between text-ink-muted">
      <span>{label}</span>
      <span className="font-mono">{value}</span>
    </div>
  );
}
