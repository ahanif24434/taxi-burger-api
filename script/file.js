const loadCatagory =() =>{//1
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
const loadFood =(id)=>{  //2
//console.log("load food called", id)
const url = id
?`https://taxi-kitchen-api.vercel.app/api/v1/categories/${id}`
:`https://taxi-kitchen-api.vercel.app/api/v1/foods/random`;

const catBtns = document.querySelectorAll(".btn-category");
// console.log(catBtns)
catBtns.forEach(btn =>btn.classList.remove("active"))
if(id){
const currentBtn =document.getElementById(`cat-btn-${id}`);
if(currentBtn){
currentBtn.classList.add("active");
}


}
// console.log(currentBtn)

//console.log(url)
fetch(url)
.then(res => res.json())
//.then((data) => console.log(data.foods))
.then((data) => displayFoods(data.foods))
}


    const displayCategory = (categories) =>{ //1
        const cartContainer = document.getElementById("cate-Container")
cartContainer.innerHTML = "";
for(let cate of categories){
    const div = document.createElement('div')
    div.innerHTML = `<div>
    <button id="cat-btn-${cate.id}" onclick ="loadFood(${cate.id})" class="btn btn-block shadow btn-category">
                    <img src="${cate.categoryImg}" alt="" class="w-10">
                    ${cate.categoryName}</button></div>`
                    cartContainer.append(div)
}
    }

    
    const loadFoodsDetails =(id)=>{
        const url =`https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`;
        //console.log(url);
        fetch(url)
        .then(res =>res.json())
        .then(data => displayDetails(data.details))
    }
    const loadRandomData =()=>{ //3
        const url = `https://taxi-kitchen-api.vercel.app/api/v1/foods/random`;
        fetch(url)
        .then((res)=>res.json())
        .then((data) => displayFoods(data.foods))
    }
    
const displayFoods =(foods)=>{ //2 +3
    //console.log(foods)
    const foodContainer = document.getElementById("food-container")
    foodContainer.innerHTML = "";
    foods.forEach((food)=>{
//console.log(food);
const foodCard = document.createElement('div')
foodCard.innerHTML =`<div onclick="loadFoodsDetails(${food.id})" class="bg-white rounded-xl flex gap-3 shadow-xl p-3">
    <div class="img flex-1">
        
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

//   "details": {
//     "id": 52794,
//     "title": "Vegan Chocolate Cake",
//     "catId": 11,
//     "foodImg": "https://www.themealdb.com/images/media/meals/qxutws1486978099.jpg",
//     "price": 695,
//     "video": "https://www.youtube.com/watch?v=C3pAgB7pync",
//     "category": "Vegan",
//     "area": "American"
    const displayDetails = (food)=>{
        // console.log(food)
        const detailsContainer = document.getElementById("details-container")
        detailsContainer.innerHTML =`
        <div class="">
        <h2 class="text-xl font-bold">${food.title}</h2>
        </div>
        <div class="">
        <img src="${food.foodImg}" alt=""/>
    </div>
     <div class= "badge badge-primary"> 
     ${food.area}
     </div>
    <a href="${food.video}"class="btn btn-warning" alt="" target="_blank">watch video</a>
     `;
    document.getElementById("my_modal_3").showModal()
    }

loadCatagory()
loadFood(11)
//  loadRandomData()