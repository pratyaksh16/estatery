const priceRange = [
  {
    name:"All",     //All prices are in the range $500 - $10,000
    begin:500,
    end:10000
  },
  {
    name:"$500 - $2500",
    begin:500,
    end:2500
  },
  {
    name:"$2500 - $5000",
    begin:2500,
    end:5000
  },
  {
    name:"$5000 - $10,000",
    begin:5000,
    end:10000
  }
]

const houseTypeList = ["All","House","Flat","Villa"]
const priceRangeList = ["All","$500 - $2500","$2500 - $5000","$5000 - $10,000"]

const properties = [
  //id and name of a property must be unique
  {
    id:1,
    name:"Palm Harbor",
    house_type:"House",
    img_src:"assets/photo-id-1.png",
    isPopular:true,
    isFav:true,
    address:"2699 Green Valley, Highland Lake, FL",
    cost:2095,
    noOfBeds:3,
    noOfBathrooms:2,
    dimensions:"5x7m"
  },
  {
    id:2,
    name:"Beverly Springfield",
    house_type:"Flat",
    img_src:"assets/photo-id-2.png",
    isPopular:true,
    isFav:false,
    address:"2821 Lake Sevilla, Palm Harbor, TX",
    cost:2700,
    noOfBeds:4,
    noOfBathrooms:2,
    dimensions:"6x7.5m"
  },
  {
    id:3,
    name:"Faulkner Ave",
    house_type:"Villa",
    img_src:"assets/photo-id-3.png",
    isPopular:false,
    isFav:true,
    address:"909 Woodland St, Michigan, IN",
    cost:4550,
    noOfBeds:4,
    noOfBathrooms:3,
    dimensions:"8x10m"
  },
  {
    id:4,
    name:"Victory House",
    house_type:"House",
    img_src:"assets/photo-id-4.png",
    isPopular:false,
    isFav:false,
    address:"2699 Victory House, London, EN",
    cost:650,
    noOfBeds:4,
    noOfBathrooms:4,
    dimensions:"6x7.5m"
  },
  {
    id:5,
    name:"Hamilton Terrace",
    house_type:"Villa",
    img_src:"assets/photo-id-5.png",
    isPopular:false,
    isFav:true,
    address:"1696 St.Jhon's Wood, NW8, London, EN",
    cost:500,
    noOfBeds:4,
    noOfBathrooms:2,
    dimensions:"6x7.5m"
  },
  {
    id:6,
    name:"Carlyl Square",
    img_src:"assets/photo-id-6.png",
    isPopular:true,
    isFav:false,
    address:"Chelsea SW3, London, EN, United Kingdom",
    cost:4999,
    noOfBeds:4,
    noOfBathrooms:2,
    dimensions:"6x7.5m"
  },
  {
    id:7,
    name:"Wilton Place",
    house_type:"Villa",
    img_src:"assets/photo-id-7.png",
    isPopular:false,
    isFav:false,
    address:"Roehampton SW15, London, EN",
    cost:7550,
    noOfBeds:4,
    noOfBathrooms:2,
    dimensions:"6x7.5m"
  },
  {
    id:8,
    name:"Marlborough Place",
    img_src:"assets/photo-id-8.png",
    isPopular:false,
    isFav:true,
    address:"Mayfair W1J, London, EN, United Kingdom",
    cost:2500,
    noOfBeds:4,
    noOfBathrooms:2,
    dimensions:"6x7.5m"
  }
]

export {properties,priceRange,priceRangeList,houseTypeList};