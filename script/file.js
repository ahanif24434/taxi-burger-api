const loadCatagory =() =>{
    const url ="https://taxi-kitchen-api.vercel.app/api/v1/categories";
    fetch(url)
    .then(response => response.json())
    .then(data => displayCategory(data.categories))

    const displayCategory = (categories) =>{
        const cartContainer = document.getElementById("catCategories")
cartContainer.innerHTML = "";
for(cart of categories){
    const catagoryContainer = document.createElement('div')
    catagoryContainer.innerHTML = ``
}
    }
}
loadCatagory()