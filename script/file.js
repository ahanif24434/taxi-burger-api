const loadCatagory =() =>{
    const url ="https://taxi-kitchen-api.vercel.app/api/v1/categories";
    fetch(url)
    .then(response => response.json())
    .then(data => displayCategory(data.categories))
}
// {
//       "id": 52850,
//       "title": "Chicken Couscous",
//       "catId": 2,
//       "foodImg": "https://www.themealdb.com/images/media/meals/qxytrx1511304021.jpg",
//       "price": 569,
//       "category": "Chicken"
//     },
const loadFood =(id)=>{
//console.log("load food called", id)
const url = `https://taxi-kitchen-api.vercel.app/api/v1/categories/${id}`;
//console.log(url)
fetch(url)
.then(res => res.json())
//.then((data) => console.log(data.foods))
.then((data) => displayFoods(data.foods))
}


    const displayCategory = (categories) =>{
        const cartContainer = document.getElementById("cate-Container")
cartContainer.innerHTML = "";
for(let cate of categories){
    const div = document.createElement('div')
    div.innerHTML = `<div>
    <button onclick ="loadFood(${cate.id})" class="btn btn-block shadow btn-category">
                    <img src="${cate.categoryImg}" alt="" class="w-10">
                    ${cate.categoryName}</button></div>`
                    cartContainer.append(div)
}
    }
const displayFoods =(foods)=>{
    //console.log(foods)
    const foodContainer = document.getElementById("food-container")
    foodContainer.innerHTML = "";
    foods.forEach((food)=>{
//console.log(food);
const foodCard = document.createElement('div')
foodCard.innerHTML =`<div class="bg-white rounded-xl flex gap-3 shadow-xl p-3">
    <div class="img flex-1">
        <!--src=-->
        
<img src="${food.foodImg}" 
alt="" class="w-[160px] h-[160px] rounded-xl object-cover">
    </div>
<div class="flex-2">
    <h1 class="font-bold text-xl">${food.title}</h1>
    <div class="badge badge-warning">${food.category}</div>
    <div class="divider divider-end">
        <h2 class="font-semibold text-yellow-600">$<span class="price">${food.price}</span>BDT</h2>
    </div>
<button class="btn btn-warning">
<i class="fa-regular fa-square-plus"></i> Add this item
</button>
</div>
</div> `
foodContainer.append(foodCard)
    })
        
    };

loadCatagory()