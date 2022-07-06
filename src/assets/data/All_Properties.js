const priceRange = [
  {
    name:"All",     //All prices are in the range $500 - $10,000
    begin:500,
    end:10000
  },
  {
    name:"$500 - $2500",
    begin:2500,
    end:5000
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
    img_src:"%PUBLIC_URL%/assets/photo-id-1",
    isPopular:true,
    isFav:true,
    address:"2699 Green Valley, Highland Lake, FL",
    cost:2095,
    noOfBeds:4,
    noOfBathrooms:2,
    dimensions:"5x7m"
  },
  {
    id:2,
    name:"Beverly Springfield",
    img_src:"%PUBLIC_URL%/assets/photo-id-2",
    isPopular:true,
    isFav:true,
    address:"2821 Lake Sevilla, Palm Harbor, TX",
    cost:2700,
    noOfBeds:4,
    noOfBathrooms:2,
    dimensions:"6x7.5m"
  },
  {
    id:3,
    name:"Faulkner Ave",
    img_src:"%PUBLIC_URL%/assets/photo-id-3",
    isPopular:false,
    isFav:false,
    address:"909 Woodland St, Michigan, IN",
    cost:4550,
    noOfBeds:4,
    noOfBathrooms:2,
    dimensions:"8x10m"
  },
  {
    id:4,
    name:"Palm Harbor",
    img_src:"%PUBLIC_URL%/assets/photo-id-4",
    isPopular:false,
    isFav:false,
    address:"2699 Green Valley, Highland Lake, FL",
    cost:2700,
    noOfBeds:4,
    noOfBathrooms:2,
    dimensions:"6x7.5m"
  },
  {
    id:5,
    name:"Palm Harbor",
    img_src:"%PUBLIC_URL%/assets/photo-id-5",
    isPopular:false,
    isFav:false,
    address:"2699 Green Valley, Highland Lake, FL",
    cost:2700,
    noOfBeds:4,
    noOfBathrooms:2,
    dimensions:"6x7.5m"
  },
  {
    id:6,
    name:"Palm Harbor",
    img_src:"%PUBLIC_URL%/assets/photo-id-6",
    isPopular:false,
    isFav:false,
    address:"2699 Green Valley, Highland Lake, FL",
    cost:2700,
    noOfBeds:4,
    noOfBathrooms:2,
    dimensions:"6x7.5m"
  },
  {
    id:7,
    name:"Palm Harbor",
    img_src:"%PUBLIC_URL%/assets/photo-id-7",
    isPopular:true,
    isFav:false,
    address:"2699 Green Valley, Highland Lake, FL",
    cost:2700,
    noOfBeds:4,
    noOfBathrooms:2,
    dimensions:"6x7.5m"
  },
  {
    id:8,
    name:"Palm Harbor",
    img_src:"%PUBLIC_URL%/assets/photo-id-8",
    isPopular:true,
    isFav:false,
    address:"2699 Green Valley, Highland Lake, FL",
    cost:2700,
    noOfBeds:4,
    noOfBathrooms:2,
    dimensions:"6x7.5m"
  }
]

export {properties,priceRange,priceRangeList,houseTypeList};