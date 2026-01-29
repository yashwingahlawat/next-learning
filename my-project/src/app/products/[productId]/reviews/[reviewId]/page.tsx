import { notFound } from "next/navigation"

export default async function reviews({params}:{params:Promise<{productId:string,reviewId:string}>}){
    const {productId,reviewId}=await params
    if(parseInt(reviewId)>1000){
        notFound()
    }
    return <h1>{productId} is reviewd by {reviewId}</h1>
}