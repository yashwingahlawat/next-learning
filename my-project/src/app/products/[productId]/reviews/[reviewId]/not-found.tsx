"use client"
import { usePathname } from "next/navigation"
export default function NotFound(){
    const pathName=usePathname()
    const productId=pathName.split('/')[2]
    const reviewId=pathName.split('/')[4]
    return <div>
        <h1>Page doesn't Exist with reviewId {reviewId} and productId {productId}.</h1>
        <h3>So you are gay</h3>
    </div>
}