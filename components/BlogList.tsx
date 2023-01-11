import Image from "next/image";
import urlFor from "../lib/urlFor"
import { Post } from "../typings";

type Props={
    posts: Post[];
}

function  BlogList ({posts}:Props){
   console.log(posts.length)

  return (
    <div>
      <hr className="border-[#F7AB0A] mb-10" />
      <div>
        {/* posts */}

        { posts.map((post)=>{
                <div key={post._id}>
                   <div>
                     <Image
                     className="object-cover object-left lg:object-center"
                     src={urlFor(post.mainImage).url()}
                     alt={post.author.name}
                     fill
                     />
                   </div>
                </div>
            })
        }
      </div>
    </div>
  )
}

export default BlogList
