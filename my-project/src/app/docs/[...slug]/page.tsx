export default async function Docs({params}:{params:Promise<{slug:string[]}>}){
    const {slug} = await params
    if(slug?.length==2){
        return <h1>hlo {slug[0]}</h1>
    }
    return <h1>ok</h1>
}