/* eslint-disable @next/next/no-img-element */
"use client";
import { useGetCategories } from "@/api/getProducts";
import Link from "next/link";
import { ResponseType } from "@/types/response";
import { CategoryType } from "@/types/category";

const ChooseCategory = () => {
  const { result, loading }: ResponseType = useGetCategories();

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h3 className="px-6 pb-4 text-3xl sm:pb-8">
        Elige tu categoría favorita
      </h3>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {!loading &&
          result !== null &&
          result.map((category: CategoryType) => {
            // Verificación de la existencia de 'category.attributes' antes de acceder a sus propiedades
            const attributes = category?.attributes;
            if (!attributes) return null; // Si no existe, no se renderiza este elemento

            const { slug, mainImage, categoryName } = attributes;

            // Verificación de la existencia de la imagen antes de renderizarla
            const imageUrl = mainImage?.data?.attributes?.url;
            if (!imageUrl) return null; // Si no existe la imagen, no se renderiza el elemento

            return (
              <Link
                key={category.id}
                href={`/category/${slug}`}
                className="relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg"
              >
                <img
                  src={imageUrl}
                  alt={categoryName}
                  className="max-w-[270px] transition duration-300 ease-in-out rounded-lg hover:scale-110"
                />
                <p className="absolute w-full py-2 text-lg font-bold text-center text-white bottom-5 backdrop-blur-lg">
                  {categoryName}
                </p>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default ChooseCategory;
