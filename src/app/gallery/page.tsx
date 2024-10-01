import { client } from "@/sanity/lib/client"
import Gallery from "./Gallery"


interface getGalleryProps {
  map(arg0: (gallery: any, index: any) => import("react").JSX.Element): import("react").ReactNode | Iterable<import("react").ReactNode>
  id: string
  _createdAt: string
  title: string
  mainImage: string
}

export const getGallery = async ()=>{
  const query = `*[_type=="gallery"]{
    _id,
    _createdAt,
    title,
    mainImage,
  }`
 
  // const packages = await client.fetch<getPackagesProps[]>(query)
  const gallery = await client.fetch(query)
  return gallery
}


async function page() {

  const data: getGalleryProps = await getGallery()
  return (
    <div>
        <Gallery data={data} />
    </div>
  )
}
export default page

export const revalidate = 5