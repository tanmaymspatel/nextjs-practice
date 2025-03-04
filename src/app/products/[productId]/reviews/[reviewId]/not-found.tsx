'use client'

import { usePathname } from "next/navigation"

export default function NotFound() {
  const pathname  = usePathname()
  const productId = pathname.split("/")[2]
  const reviewId = pathname.split("/")[4]
  
  return (
    <div>404 | Review <b>{reviewId }</b> Not Found for product <b>{productId}</b></div>
  )
}
