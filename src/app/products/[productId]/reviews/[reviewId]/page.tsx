import { notFound } from "next/navigation";

// const getRandomInt = (count: number) => {
//   return Math.floor(Math.random() * count);
// };

export default async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  // const random = getRandomInt(2);

  // if (random === 1) {
  //   throw new Error("Error in loading review");
  // }

  if (+reviewId > 1000) {
    notFound();
  }
  return (
    <div>
      <h2>
        review {reviewId} for product {productId}
      </h2>
    </div>
  );
}
