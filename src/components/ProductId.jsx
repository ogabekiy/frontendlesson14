import React from "react";
import { useParams } from "react-router-dom";

export default function ProductId() {
  const { id } = useParams(); 

  const productList = [
    { id: 1, title: "apple", description: "This is apple" },
    { id: 2, title: "banana", description: "This is banana" },
    { id: 3, title: "watermelon", description: "This is watermelon" },
  ];

  const product = productList.find((p) => p.id === parseInt(id));

  return (
    <div className="flex flex-col items-center mt-10">
      {product ? (
        <>
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-xl mt-5">{product.description}</p>
        </>
      ) : (
        <p className="text-red-500 text-xl">Product not found</p>
      )}
    </div>
  );
}
