import React from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const productList = [
    { id: 1, title: "apple", description: "This is apple" },
    { id: 2, title: "banana", description: "This is banana" },
    { id: 3, title: "watermelon", description: "This is banana" },
  ];
  return (
    <div>
      <div className="flex justify-center mt-[40px] text-red-700 text-5xl">
      these are products
    </div>
    <div>
      <ul className="flex flex-col items-center mt-10 gap-5">
      {productList.map((product) => (
            <li
              key={product.id}
            >
              <Link
                to={`/products/${product.id}`}
                className="text-blue-500 hover:underline mt-2 block"
              >
                {product.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
    </div>
  );
}
