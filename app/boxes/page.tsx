import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/shared/Container";

import Link from "next/link";

const boxCollections = [

{
id:1,
title:"Classic Box",
description:"Simple packaging • Limited flavors • 6 / 9 pcs",
image:"/images/categories/classic-box.jpg",
href:"/classic"
},

{
id:2,
title:"Signature Box ⭐",
description:"Full flavor range • Premium gifting • 6 / 9 / 12 pcs",
image:"/images/categories/signature-box.jpg",
href:"/signature"
},

{
id:3,
title:"Luxury Boxes 🎁",
description:"Curated luxury themes • Fixed chocolates",
image:"/images/categories/luxury-box.jpg",
href:"/luxury"
}

];

export default function BoxesPage() {

return (

<>

<Navbar />

<section className="py-24">

<Container>

<div className="text-center mb-16">

<p className="text-sm uppercase tracking-[5px] text-neutral-400">

Boxes Collection

</p>

<h1 className="text-5xl font-bold mt-4">

Explore Premium Box Experiences

</h1>

</div>


<div className="grid md:grid-cols-3 gap-8">

{boxCollections.map((item)=>(

<Link
href={item.href}
key={item.id}
>

<div
className="
group
border border-neutral-800
rounded-[32px]
overflow-hidden
hover:border-[var(--gold)]
transition-all duration-500
"
>

<div className="h-[320px] overflow-hidden">

<img
src={item.image}
alt={item.title}
className="
w-full
h-full
object-cover
transition-transform
duration-700
group-hover:scale-105
"
/>

</div>

<div className="p-6 space-y-4">

<h3 className="text-2xl font-bold">

{item.title}

</h3>

<p className="text-neutral-400">

{item.description}

</p>

</div>

</div>

</Link>

))}

</div>

</Container>

</section>

<Footer />

</>

)

}