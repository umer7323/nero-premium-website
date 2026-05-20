type ShopProduct = {
  id:number;
  name:string;
  price:number;
  image:string;

  includes?: string[];
  packaging?: string;
};

export const shopProducts: ShopProduct[] = [

{
id:1,
name:"Pistachio Delight",
price:250,
image:"/images/shop/pistachio.jpg",
includes:[],
packaging:"Premium retail packaging"
},

{
id:2,
name:"Coffee Caramel",
price:280,
image:"/images/shop/coffee-caramel.jpg",
includes:[],
packaging:"Premium retail packaging"
},

{
id:3,
name:"Nutella Truffle",
price:300,
image:"/images/shop/nutella.jpg",
includes:[],
packaging:"Premium retail packaging"
},

{
id:4,
name:"Dark Ganache",
price:270,
image:"/images/shop/dark-ganache.jpg",
includes:[],
packaging:"Premium retail packaging"
},

{
id:5,
name:"Biscoff Crunch",
price:290,
image:"/images/shop/biscoff.jpg",
includes:[],
packaging:"Premium retail packaging"
},

{
id:6,
name:"Strawberry Cream",
price:260,
image:"/images/shop/strawberry.jpg",
includes:[],
packaging:"Premium retail packaging"
},

{
id:7,
name:"Oreo Crunch",
price:280,
image:"/images/shop/oreo.jpg",
includes:[],
packaging:"Premium retail packaging"
},

{
id:8,
name:"Peanut Butter",
price:320,
image:"/images/shop/peanut-butter.jpg",
includes:[],
packaging:"Premium retail packaging"
},

{
id:9,
name:"Almond Praline",
price:340,
image:"/images/shop/almond.jpg",
includes:[],
packaging:"Premium retail packaging"
},

{
id:10,
name:"White Chocolate",
price:250,
image:"/images/shop/white.jpg",
includes:[],
packaging:"Premium retail packaging"
},

{
id:11,
name:"Ferrero Style",
price:350,
image:"/images/shop/ferrero.jpg",
includes:[],
packaging:"Premium retail packaging"
},

{
id:12,
name:"Lotus Caramel",
price:300,
image:"/images/shop/lotus.jpg",
includes:[],
packaging:"Premium retail packaging"
}

];