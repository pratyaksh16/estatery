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
    img_src:``,
    isPopular:true,
    isFav:false,
    address:"2699 Green Valley, Highland Lake, FL",
    cost:2095,
    noOfBeds:"",
    noOfBathrooms:"",
    dimensions:""
  },
  {
    id:2,
    name:"Beverly Springfield",
    img_src:``,
    isPopular:true,
    isFav:false,
    address:"2699 Green Valley, Highland Lake, FL",
    cost:2700,
    noOfBeds:"",
    noOfBathrooms:"",
    dimensions:""
  },
  {
    id:3,
    name:"Faulkner Ave",
    img_src:``,
    isPopular:true,
    isFav:false,
    address:"2699 Green Valley, Highland Lake, FL",
    cost:4550,
    noOfBeds:"",
    noOfBathrooms:"",
    dimensions:""
  }
//   {
//     id:4,
//     name:"Palm Harbor",
//     img_src:``,
//     isPopular:true,
//     isFav:false,
//     address:"2699 Green Valley, Highland Lake, FL",
//     cost:2700,
//     noOfBeds:"",
//     noOfBathrooms:"",
//     dimensions:""
//   },
//   {
//     id:5,
//     name:"Palm Harbor",
//     img_src:``,
//     isPopular:true,
//     isFav:false,
//     address:"2699 Green Valley, Highland Lake, FL",
//     cost:2700,
//     noOfBeds:"",
//     noOfBathrooms:"",
//     dimensions:""
//   },
//   {
//     id:6,
//     name:"Palm Harbor",
//     img_src:``,
//     isPopular:true,
//     isFav:false,
//     address:"2699 Green Valley, Highland Lake, FL",
//     cost:2700,
//     noOfBeds:"",
//     noOfBathrooms:"",
//     dimensions:""
//   },
//   {
//     id:7,
//     name:"Palm Harbor",
//     img_src:``,
//     isPopular:true,
//     isFav:false,
//     address:"2699 Green Valley, Highland Lake, FL",
//     cost:2700,
//     noOfBeds:"",
//     noOfBathrooms:"",
//     dimensions:""
//   },
//   {
//     id:8,
//     name:"Palm Harbor",
//     img_src:``,
//     isPopular:true,
//     isFav:false,
//     address:"2699 Green Valley, Highland Lake, FL",
//     cost:2700,
//     noOfBeds:"",
//     noOfBathrooms:"",
//     dimensions:""
//   },
]

export {properties,priceRangeList,houseTypeList};