
const loadAllProduct = () =>{
    fetch('https://fakestoreapi.com/products')
    .then((res)=>res.json())
    .then((data)=>{
            displayProduct(data);
        });
};



const displayProduct = (products) => {
    const productContainer = document.getElementById("product-container");
    
    products.forEach((element) => {
        console.log(element);
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
            <img class="card-img" src=${element.image} alt="" />
            <h5>${element.title.slice(0,50)}</h5>
            <h3>price: ${element.price}</h3>
            <p>${element.description.slice(0,50)}</p>
            <button onclick="singleProduct('element.id')"> Details </button>
            <button onclick="handleAddToCart('${element.title}','${
            element.price}')"> Add to cart </button>
            `;
    
            productContainer.appendChild(div);
    });
};


const handleAddToCart = (name,price) => {
    const cartCount = document.getElementById("count").
    innerText;
    let convertedCount = parseInt(cartCount);
    convertedCount = convertedCount + 1;
    document.getElementById("count").
    innerText=convertedCount;

    const container = document.getElementById("cart-main-container"); 
    const div = document.createElement("div");
    div.classList.add("cart-info");
    div.innerHTML = `
        <p>${name.slice(0,10)}</p>
        <h3 class="price" >${price}</h3>
    `;
    container.appendChild(div);
    UpdateTotal();
};

const UpdateTotal = () => {
    const allPrice = 
    document.getElementsByClassName("price");
    let count = 0;
    for (const element of allPrice){
        count = count + parseFloat(element.innerText);
    }
    document.getElementById("total").innerText = count.toFixed(2);
};

const singleProduct = (id) => {

    fetch('https://fakestoreapi.com/products/${id}')
            .then(res=>res.json())
            .then(json=>console.log(json))
}

loadAllProduct();

