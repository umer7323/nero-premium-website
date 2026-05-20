import Container from "../shared/Container";
import Link from "next/link";

const boxes = [
    {
name:"Classic Square Collection",
shape:"Square",
price:"PKR 6,000",
image:"/images/boxes/classic-square.jpg",
href:"/classic"
},

{
name:"Luxury Rectangle Box",
shape:"Rectangle",
price:"PKR 7,500",
image:"/images/boxes/luxury-rectangle.jpg",
href:"/signature"
},

{
name:"Cream Heart Edition",
shape:"Heart",
price:"PKR 8,000",
image:"/images/boxes/cream-heart.jpg",
href:"/signature"
},

{
name:"Premium Circle Box",
shape:"Circle",
price:"PKR 8,500",
image:"/images/boxes/premium-circle.jpg",
href:"/luxury"
},

{
name:"Maroon Signature Box",
shape:"Rectangle",
price:"PKR 9,000",
image:"/images/boxes/maroon-signature.jpg",
href:"/signature"
},

{
name:"Limited Ramadan Box",
shape:"Special Theme",
price:"PKR 13,500",
image:"/images/boxes/ramadan-box.jpg",
href:"/luxury"
},

{
name:"Royal Hexagon Collection",
shape:"Hexagon",
price:"PKR 10,500",
image:"/images/boxes/hexagon-box.jpg",
href:"/luxury"
},

{
name:"Velvet Black Edition",
shape:"Premium Black",
price:"PKR 11,500",
image:"/images/boxes/velvet-black.jpg",
href:"/luxury"
},

{
name:"Special Gift Collection",
shape:"Limited Edition",
price:"PKR 12,500",
image:"/images/boxes/special-gift.jpg",
href:"/gifting"
},
  {
    name:"Premium Black Box",
    shape:"Square",
    price:"PKR 6,500",
    image:"/images/boxes/black-box.jpg",
    href:"/classic"
  },

  {
    name:"Cream Signature Box",
    shape:"Rectangle",
    price:"PKR 8,500",
    image:"/images/boxes/cream-box.jpg",
    href:"/signature"
  },

  {
    name:"Royal Indulgence",
    shape:"Hexagon",
    price:"PKR 12,500",
    image:"/images/boxes/royal-box.jpg",
    href:"/luxury"
  },

  {
    name:"Heart Collection",
    shape:"Heart",
    price:"PKR 9,500",
    image:"/images/boxes/heart-box.jpg",
    href:"/signature"
  },

  {
    name:"Eid Special",
    shape:"Special Theme",
    price:"PKR 14,500",
    image:"/images/boxes/eid-box.jpg",
    href:"/luxury"
  },

  {
    name:"Limited Gold Edition",
    shape:"Circle",
    price:"PKR 16,500",
    image:"/images/boxes/gold-box.jpg",
    href:"/luxury"
  }
];

export default function ProductBoxesSection() {

return(

<section className="py-28">

<Container>

<div className="text-center mb-16">

<p className="text-sm uppercase tracking-[5px] text-neutral-400">

Product Boxes Catalog

</p>

<h2 className="text-5xl font-bold mt-4">

Luxury Box Designs

</h2>

</div>

<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

{boxes.map((item)=>(

<Link
key={item.name}
href={item.href}
>

<div
className="
group
border
border-neutral-800
rounded-[32px]
overflow-hidden
hover:border-[var(--gold)]
transition-all
duration-500
"
>

<div className="h-[360px] overflow-hidden">

<img
src={item.image}
alt={item.name}
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

<div className="p-6 space-y-2">

<h3 className="text-2xl font-bold">

{item.name}

</h3>

<p className="text-neutral-400">

Shape: {item.shape}

</p>

<p
style={{
color:"var(--gold)"
}}
>

{item.price}

</p>

</div>

</div>

</Link>

))}

</div>

</Container>

</section>

)

}