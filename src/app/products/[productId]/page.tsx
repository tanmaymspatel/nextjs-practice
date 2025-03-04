import { Metadata } from "next";

type props = {
  params: Promise<{ productId: string }>;
};

/**
 * adding metadata dynamically 
 */
export const generateMetadata = async ({
  params,
}: props): Promise<Metadata> => {
  const id = (await params).productId;
  return {
    title: `Product ${ id }`,
  };
};

export default async function ProductDetails({ params }: props) {
  const productId = (await params).productId;
  return (
    <div>
      <h3>details of the product with id : {productId}</h3>
    </div>
  );
}
