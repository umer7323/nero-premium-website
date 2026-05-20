import Container from "../shared/Container";

const gallery = [

{
id:1,
image:"/images/gallery/box.jpg",
title:"Luxury Boxes"
},

{
id:2,
image:"/images/gallery/chocolate.jpg",
title:"Premium Chocolates"
},

{
id:3,
image:"/images/gallery/gift.jpg",
title:"Gift Collections"
},

{
id:4,
image:"/images/gallery/package.jpg",
title:"Luxury Packaging"
},

{
id:5,
image:"/images/gallery/signature.jpg",
title:"Signature Collection"
},

{
id:6,
image:"/images/gallery/ppremium.jpg",
title:"Premium Selection"
}

];

export default function GallerySection(){

return(

<section className="py-28">

<Container>

<div className="text-center mb-16">

<p className="text-sm uppercase tracking-[5px] text-neutral-400">

Gallery / Instagram

</p>

<h2 className="text-5xl font-bold mt-4">

Moments From NERO

</h2>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

{gallery.map((item)=>(

<div
key={item.id}
className="
group
overflow-hidden
rounded-[32px]
border border-neutral-800
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

<div className="p-5">

<h3 className="font-semibold text-lg">

{item.title}

</h3>

</div>

</div>

))}

</div>

</Container>

</section>

)

}
