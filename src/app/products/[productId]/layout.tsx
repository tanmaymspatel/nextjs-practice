const getRandomInt = (count: number) => {
  return Math.floor(Math.random() * count);
};

export default function layout({ children }: { children: React.ReactNode }) {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error in loading Product");
  }
  return (
    <>
      {children}
      <h2 className="py-1 bg-violet-300">Featured Products</h2>
    </>
  );
}
