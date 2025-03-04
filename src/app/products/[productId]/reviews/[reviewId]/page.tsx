import { notFound } from "next/navigation";
import React from "react";

export default async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;

  if(+reviewId > 1000){
    notFound()
  }
  return (
    <div>
      <h2>
        review {reviewId} for product {productId}
      </h2>
    </div>
  );
}
