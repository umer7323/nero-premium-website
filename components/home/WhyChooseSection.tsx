import Container from "../shared/Container";

const features = [

{
title:"Premium Ingredients",
icon:"🍫"
},

{
title:"Luxury Rigid Boxes",
icon:"🎁"
},

{
title:"Perfect For Gifting",
icon:"💎"
},

{
title:"Elegant Packaging",
icon:"✨"
},

{
title:"Fresh Chocolates",
icon:"🌱"
},

{
title:"Handmade Finishing",
icon:"🖐️"
}

];

export default function WhyChooseSection(){

return(

<section className="py-28">

<Container>

<div className="text-center mb-16">

<p className="text-sm uppercase tracking-[5px] text-neutral-400">

Why Choose NERO

</p>

<h2 className="text-5xl font-bold mt-4">

Luxury In Every Detail

</h2>

</div>


<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

{features.map((item)=>(

<div
key={item.title}
className="
border
border-neutral-800
rounded-[32px]
p-10
text-center
hover:border-[var(--gold)]
transition-all
duration-500
group
"
>

<div className="text-5xl mb-6">

{item.icon}

</div>

<h3
className="
text-2xl
font-semibold
group-hover:text-[var(--gold)]
transition-all
"
>

{item.title}

</h3>

</div>

))}

</div>

</Container>

</section>

)

}