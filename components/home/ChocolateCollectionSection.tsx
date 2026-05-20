import Container from "../shared/Container";
import Link from "next/link";

const chocolates = [

{
id:1,
name:"Milk Chocolate",
image:"/images/chocolates/milk.jpg",
href:"/shop"
},

{
id:2,
name:"Dark Chocolate",
image:"/images/chocolates/dark.jpg",
href:"/shop"
},

{
id:3,
name:"Filled Chocolate",
image:"/images/chocolates/filled.jpg",
href:"/shop"
},

{
id:4,
name:"Dates Chocolate",
image:"/images/chocolates/ddates.jpg",
href:"/shop"
},

{
id:5,
name:"Premium Selection",
image:"/images/chocolates/premium.jpg",
href:"/shop"
}

];

export default function ChocolateCollectionSection(){

return(

<section className="py-28">

<Container>

<div className="text-center mb-16">

<p className="text-sm uppercase tracking-[5px] text-neutral-400">

Chocolate Collection

</p>

<h2 className="text-5xl font-bold mt-4">

Explore Premium Flavors

</h2>

</div>

<div className="grid md:grid-cols-2 xl:grid-cols-5 gap-8">

{chocolates.map((item)=>(

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

<div className="h-[300px] overflow-hidden">

<img
src={item.image}
alt={item.name}
className="
w-full h-full
object-cover
transition-transform
duration-700
group-hover:scale-105
"
/>

</div>

<div className="p-6 text-center">

<h3 className="text-xl font-bold">

{item.name}

</h3>

</div>

</div>

</Link>

))}

</div>

</Container>

</section>

)

}