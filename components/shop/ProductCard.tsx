type ProductCardProps = {
  name: string;
  subtitle: string;
  price: string;
  image: string;
};

export default function ProductCard({
  name,
  subtitle,
  price,
  image,
}: ProductCardProps) {
  return (
    <div
      className="
        border border-neutral-800
        rounded-3xl
        overflow-hidden
        hover:border-[var(--gold)]
        transition-all
        duration-300
      "
    >
      {/* Product Image */}
      <div className="h-[320px] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-semibold">
          {name}
        </h3>

        <p className="text-neutral-400 leading-7 text-sm">
          {subtitle}
        </p>

        <div className="flex items-center justify-between">
          <p className="text-lg font-medium">
            {price}
          </p>

          <button
            className="
              px-5
              py-2
              rounded-full
              border
              text-sm
              transition-all
              duration-300
              hover:scale-105
            "
            style={{
              borderColor: "var(--gold)",
              color: "var(--gold)",
            }}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}