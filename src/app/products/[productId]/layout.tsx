
export default function layout({children}:{
    children: React.ReactNode
}) {
  return (
    <>
        {children}
        <h2 className="py-1 bg-violet-300">Featured Products</h2>
    </>
  )
}
