import Link from "next/link";
import ClothingIcon from "./icons/ClothingIcon";

const NoProductsFound = () => {
  return (
    <div className="w-full min-h-[400px] flex flex-col items-center justify-center mb-40">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-neutral-50 blur-2xl rounded-full"></div>
        <ClothingIcon />
      </div>

      <h2 className="font-light text-3xl text-neutral-800 mb-3 tracking-wide">
        Sin resultados
      </h2>

      <p className="text-neutral-400 text-center max-w-sm text-sm tracking-wide leading-relaxed mb-8">
        No encontramos prendas que coincidan con tu búsqueda
      </p>

      <Link
        href={"/"}
        className="px-8 py-3 border border-neutral-200 text-neutral-600 text-sm hover:bg-neutral-50 transition-all duration-300 tracking-wide"
      >
        Ver colección completa
      </Link>
    </div>
  );
};

export default NoProductsFound;