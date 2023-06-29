// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here

const fruitArray = [
    { name: "apple", color: 'red',pricePerKg:126 },
    { name: "orange", color: 'orange',pricePerKg:52 },
    { name: "lemon", color: 'yellow',pricePerKg:35.5 },
    { name: "mango", color: 'green',pricePerKg:70 },
    { name: "grapes", color: 'black',pricePerKg:40.25 }
    
  ];

  const convert2obj = (fruitArray1, keyField) => 
	// Write your code here
    fruitArray1.reduce((obj, item) => {
        obj[item[keyField]] = item;
        return obj;
      }, {});

 const fruitObj = convert2obj(fruitArray, 'name');
  console.log(fruitObj); 
  console.log(fruitObj.mango); 