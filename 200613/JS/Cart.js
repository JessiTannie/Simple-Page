class Product{
    constructor(name, price, productNumber){
        this.name = name;
        this.price = price;
        this.productNumber = productNumber;
    }
}


class UI {
    static displayProducts(){
        const products = Store.getProducts();
        products.forEach((product) => UI.addProductToCart(product));
    }

    static addProductToCart(product){
        const list = document.querySelector('#cart');
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.name}</td>
            <td> </td>
        `;

        list.appendChild(row);
    }

    
}


class Store{
    static getProducts(){
        let products;
        if(localStorage.getItem('products') === null ){
            products = []
        } else{
            products = JSON.parse(localStorage.getItem(products));
        }

        return products;
    }   
    
    static addProduct(product){
        const products = Store.getProducts();
        products.push(product);
        localStorage.setItem('products'. JSON.stringify(products));
    }
}


document.addEventListener('DOMContentLoaded', UI.displayProducts);

document.querySelectorAll('.chart').addEventListener('click', (e) => {
    button.forEach(element => {
        const name =  document.querySelector('#title');
        const price = document.querySelector('#price');

        const product =  new Product(name, price);

        UI.addProductToCart(product);
        Store.addProduct(product);
        
    });
})