import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <h3>Welcome home!</h3>
      <Link className="mx-1 text-blue-400" href={"/blog"}>
        BLog
      </Link>
      <Link className="mx-1 text-blue-400" href={"/products"}>
        Products
      </Link>
    </div>
  );
}
