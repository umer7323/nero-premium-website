import Container from "../shared/Container";

const gifts = [

{
id:1,
name:"Signature Gift Box",
description:"Signature box + 1 add-on",
price:"PKR 9,500",
image:"/images/gifts/signature-gift.jpg"
},

{
id:2,
name:"Luxury Gift Box",
description:"Themed luxury + 2 add-ons",
price:"PKR 14,500",
image:"/images/gifts/luxury-gift.jpg"
},

{
id:3,
name:"Signature + Luxury Hamper ⭐",
description:"Both boxes + premium dates",
price:"PKR 19,500",
image:"/images/gifts/signature-hamper.jpg"
},

{
id:4,
name:"Create Your Box Hamper 💎",
description:"Custom box + dessert jar + add-ons",
price:"PKR 24,500",
image:"/images/gifts/create-hamper.jpg"
}

];

export default function GiftCollectionSection(){

return(

<section className="py-28">

<Container>

<div className="text-center mb-16">

<p className="text-sm uppercase tracking-[5px] text-neutral-400">

NERO Gift Collection

</p>

<h2 className="text-5xl font-bold mt-4">

Luxury Gifting Experiences

</h2>

</div>


<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

{gifts.map((item)=>(

<div
key={item.id}
className="
group
border border-neutral-800
rounded-[32px]
overflow-hidden
hover:border-[var(--gold)]
transition-all duration-500
"
>

<div className="h-[360px] overflow-hidden">

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

<div className="p-6 space-y-4">

<h3 className="text-2xl font-bold">

{item.name}

</h3>

<p className="text-neutral-400">

{item.description}

</p>

<p
style={{
color:"var(--gold)"
}}
>

{item.price}

</p>

<button
className="
w-full
py-3
rounded-full
font-semibold
"
style={{
backgroundColor:"var(--gold)",
color:"#111"
}}
>

Add To Cart

</button>

</div>

</div>

))}

</div>

</Container>

</section>

)

}