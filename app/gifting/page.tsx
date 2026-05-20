"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/shared/Container";

import Link from "next/link";

const gifts = [

{
id:1,
name:"Signature Gift Box",
description:"Elegant premium gifting experience",

features:[
"Full flavor Signature Box",
"1 premium add-on included",
"Elegant gifting presentation"
],

price:"PKR 6,500",

button:"Select Gift Box",

href:"/signature"
},

{
id:2,
name:"Luxury Gift Box",
description:"Curated luxury gifting",

features:[
"Luxury themed box",
"2 premium add-ons included",
"Premium luxury presentation"
],

price:"PKR 9,500",

button:"Select Luxury Gift",

href:"/luxury"
},

{
id:3,
name:"Signature + Luxury Hamper ⭐",
description:"Bestseller premium gifting package",

features:[
"Signature + Luxury Boxes",
"2–3 premium add-ons",
"Premium Dates included",
"Full hamper experience"
],

price:"PKR 14,500",

button:"Select Bestseller",

href:"/cart"
},

{
id:4,
name:"Create Your Box Hamper 💎",
description:"Highest premium personalized gifting",

features:[
"Custom luxury chocolate box",
"4–5 premium add-ons",
"Premium Dates included",
"Mini Dessert Jar included"
],

price:"PKR 18,500",

button:"Build Premium Hamper",

href:"/create-box"
}

];

export default function GiftingPage(){

return(

<>

<Navbar/>

<section className="py-24">

<Container>

<div className="text-center space-y-4 mb-16">

<p className="text-sm tracking-[4px] uppercase text-neutral-400">

NERO Gifting Collection

</p>

<h1 className="text-4xl md:text-6xl font-bold">

Luxury Gifting Experiences 🎁

</h1>

<p className="text-neutral-400 max-w-3xl mx-auto leading-8">

Curated premium gifting experiences
crafted for unforgettable celebrations.

</p>

</div>


<div className="grid md:grid-cols-2 gap-8">

{gifts.map((item)=>(

<div
key={item.id}
className="
border border-neutral-800
rounded-[32px]
p-10
space-y-6
hover:border-[var(--gold)]
transition-all
duration-500
"
>

<h2 className="text-3xl font-bold">

{item.name}

</h2>

<p className="text-neutral-400">

{item.description}

</p>

<div className="space-y-3">

{item.features.map((feature,index)=>(

<p key={index}>

• {feature}

</p>

))}

</div>

<p className="text-2xl font-bold">

Starting from {item.price}

</p>


<Link
href={item.href}
className="
block
w-full
py-4
rounded-full
font-semibold
text-center
transition-all
duration-300
hover:scale-105
"
style={{
backgroundColor:"var(--gold)",
color:"#111"
}}
>

{item.button}

</Link>

</div>

))}

</div>

</Container>

</section>

<Footer/>

</>

)

}