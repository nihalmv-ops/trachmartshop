import { useMemo, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import products from "../data/products.json";
import categories from "../data/categories.json";
import ProductCard from "../components/ProductCard";

const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
];

export default function Shop() {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const initialTag = searchParams.get("tag");

  const [sort, setSort] = useState("featured");
  const [brandFilter, setBrandFilter] = useState("all");
  const [tagFilter, setTagFilter] = useState(initialTag || "all");
  const [maxPrice, setMaxPrice] = useState(200000);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const categoryMeta = categories.find((c) => c.slug === category);

  const brands = useMemo(() => {
    const scoped = products.filter((p) => p.category === category);
    return ["all", ...new Set(scoped.map((p) => p.brand))];
  }, [category]);

  const filtered = useMemo(() => {
    let list = products.filter((p) => p.category === category);
    if (brandFilter !== "all") list = list.filter((p) => p.brand === brandFilter);
    if (tagFilter !== "all") list = list.filter((p) => p.tags?.includes(tagFilter));
    list = list.filter((p) => p.price <= maxPrice);

    switch (sort) {
      case "price-asc":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list = [...list].sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    return list;
  }, [category, brandFilter, tagFilter, maxPrice, sort]);

  return (
    <div className="container-shell py-10">
      <div className="mb-8">
        <p className="text-xs font-mono uppercase tracking-widest text-accent mb-2">
          {categoryMeta ? categoryMeta.name : "Shop"}
        </p>
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-ink">
          {categoryMeta ? categoryMeta.tagline : "All products"}
        </h1>
        <p className="text-ink-muted mt-2">{filtered.length} devices found</p>
      </div>

      <div className="flex gap-8">
        {/* Sidebar filters - desktop */}
        <aside className="hidden lg:block w-64 shrink-0">
          <FilterPanel
            brands={brands}
            brandFilter={brandFilter}
            setBrandFilter={setBrandFilter}
            tagFilter={tagFilter}
            setTagFilter={setTagFilter}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
          />
        </aside>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-6 gap-3">
            <button
              onClick={() => setFiltersOpen(true)}
              className="lg:hidden btn-outline text-sm py-2 px-4"
            >
              <SlidersHorizontal size={16} /> Filters
            </button>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="ml-auto bg-surface border border-border rounded-lg px-3 py-2 text-sm text-ink focus:border-accent outline-none"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-border rounded-2xl">
              <p className="text-ink-muted">No devices match these filters.</p>
              <p className="text-sm text-ink-faint mt-1">Try widening the price range or brand.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile filter drawer */}
      {filtersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setFiltersOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-base border-l border-border p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display font-semibold text-lg">Filters</h3>
              <button onClick={() => setFiltersOpen(false)} aria-label="Close filters">
                <X size={20} />
              </button>
            </div>
            <FilterPanel
              brands={brands}
              brandFilter={brandFilter}
              setBrandFilter={setBrandFilter}
              tagFilter={tagFilter}
              setTagFilter={setTagFilter}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
            />
            <button
              onClick={() => setFiltersOpen(false)}
              className="btn-primary w-full mt-6"
            >
              Show {filtered.length} results
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function FilterPanel({ brands, brandFilter, setBrandFilter, tagFilter, setTagFilter, maxPrice, setMaxPrice }) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h4 className="text-sm font-semibold text-ink mb-3">Brand</h4>
        <div className="flex flex-col gap-1.5">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center gap-2 text-sm text-ink-muted cursor-pointer">
              <input
                type="radio"
                name="brand"
                checked={brandFilter === brand}
                onChange={() => setBrandFilter(brand)}
                className="accent-accent"
              />
              {brand === "all" ? "All brands" : brand}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-ink mb-3">Filter</h4>
        <div className="flex flex-col gap-1.5">
          {["all", "bestseller", "sale", "new", "budget"].map((tag) => (
            <label key={tag} className="flex items-center gap-2 text-sm text-ink-muted cursor-pointer capitalize">
              <input
                type="radio"
                name="tag"
                checked={tagFilter === tag}
                onChange={() => setTagFilter(tag)}
                className="accent-accent"
              />
              {tag === "all" ? "All" : tag}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-ink mb-3">
          Max price: ₹{maxPrice.toLocaleString("en-IN")}
        </h4>
        <input
          type="range"
          min={10000}
          max={200000}
          step={5000}
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full accent-accent"
        />
      </div>
    </div>
  );
}
