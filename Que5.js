//Create an array of objects “array” with properties, names, and categories:

const array =[
    {name:"Apple",category:"Fruits"},
    {name:"Banana",category:"Fruits"},
    {name:"Watermelon",category:"Fruits"},
    {name:"Orange",category:"Color"},
    {name:"Mango",category:"Fruits"},
    {name:"Peach",category:"Color"},
    {name:"Grapes",category:"Fruits"},
    {name:"Yellow",category:"Color"},
]

const groupArrayObject = array.reduce((group,arr)=>{
    const{category} = arr;
    group[category] = group[category] ?? [];
    group[category].push(arr);
    return(group);
},{})
console.log(groupArrayObject)

// The code processes an array of objects, where each object has a name and category property.
// It uses the reduce method to group these objects by their category property into a new object.
// An empty object called groupArrayObject is initialized to store the grouped objects.
// In each iteration of the reduce loop:
// The category property is extracted from the current object.
// The code checks if group[category] exists in the group object. If not, it creates an empty array for that category.
// The current object is added to the array corresponding to its category.
// After all iterations, groupArrayObject contains objects grouped by their category. Each category is a property in groupArrayObject, and its value is an array of objects belonging to that category.
// The final groupArrayObject is logged to the console, showing the result of grouping the objects by their categories.