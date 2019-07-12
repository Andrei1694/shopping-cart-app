import { Injectable } from '@angular/core';
import { EventEmitter } from 'events';


interface Product {
   id: number;
   category: string;
   productName: string;
   imagePath: string;
   price: number;
   description: string;
   stock: number
}

interface Category {
   id: number;
   name: string;
}

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {
   categoryName = '';
   cart: Product[] = [];
   private totalPrice: number = 0;
   private products: Product[] = [
      {id: 0, category: "Televizoare", productName: "Televizor Samsung", imagePath: "https://picsum.photos/id/237/300/300", price:1,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique repellat inventore, magnam quos veritatis obcaecati! Nemo, repellendus quod error voluptates, ut facere sapiente tempore numquam obcaecati provident eaque temporibus veniam quasi velit quibusdam, culpa ipsum odio odit est voluptatibus sequi.", stock: 5},
      {id: 1, category: "Frigidere", productName: "Frigider Samsung", imagePath: "https://picsum.photos/id/238/300/300", price:2,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique repellat inventore, magnam quos veritatis obcaecati! Nemo, repellendus quod error voluptates, ut facere sapiente tempore numquam obcaecati provident eaque temporibus veniam quasi velit quibusdam, culpa ipsum odio odit est voluptatibus sequi.", stock: 1},
      {id: 2, category: "Laptop", productName: "Laptop Lenovo", imagePath: "https://picsum.photos/id/239/300/300", price:3,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique repellat inventore, magnam quos veritatis obcaecati! Nemo, repellendus quod error voluptates, ut facere sapiente tempore numquam obcaecati provident eaque temporibus veniam quasi velit quibusdam, culpa ipsum odio odit est voluptatibus sequi.", stock: 12},
      {id: 3, category: "Smartwatch", productName: "Smartwatch Samsung", imagePath: "https://picsum.photos/id/240/300/300", price:4,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique repellat inventore, magnam quos veritatis obcaecati! Nemo, repellendus quod error voluptates, ut facere sapiente tempore numquam obcaecati provident eaque temporibus veniam quasi velit quibusdam, culpa ipsum odio odit est voluptatibus sequi.", stock: 7},
      {id: 4, category: "Tablete", productName: "Ipad Nano", imagePath: "https://picsum.photos/id/241/300/300", price:5,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique repellat inventore, magnam quos veritatis obcaecati! Nemo, repellendus quod error voluptates, ut facere sapiente tempore numquam obcaecati provident eaque temporibus veniam quasi velit quibusdam, culpa ipsum odio odit est voluptatibus sequi.", stock: 1},
      {id: 5, category: "Masini de spalat", productName: "Masina de Spalat", imagePath: "https://picsum.photos/id/242/300/300", price:6,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique repellat inventore, magnam quos veritatis obcaecati! Nemo, repellendus quod error voluptates, ut facere sapiente tempore numquam obcaecati provident eaque temporibus veniam quasi velit quibusdam, culpa ipsum odio odit est voluptatibus sequi.", stock: 3},
      {id: 6, category: "Laptop", productName: "Danone", imagePath: "https://picsum.photos/id/243/300/300", price:7,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique repellat inventore, magnam quos veritatis obcaecati! Nemo, repellendus quod error voluptates, ut facere sapiente tempore numquam obcaecati provident eaque temporibus veniam quasi velit quibusdam, culpa ipsum odio odit est voluptatibus sequi.", stock: 18},
      {id: 7, category: "Laptop", productName: "Danone", imagePath: "https://picsum.photos/id/243/300/300", price:7,description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique repellat inventore, magnam quos veritatis obcaecati! Nemo, repellendus quod error voluptates, ut facere sapiente tempore numquam obcaecati provident eaque temporibus veniam quasi velit quibusdam, culpa ipsum odio odit est voluptatibus sequi.", stock: 18},

   ]

   private categories: Category[] = [
      {id: 0,name: "Televizoare"},
      {id: 1,name: "Iaurt"},
      {id: 2,name: "Tablete"},
      {id: 2,name: "Frigidere"},
      {id: 2,name: "Smartwatch"},
      {id: 2,name: "Laptop"},
      {id: 2,name: "Masini de spalat"}
   ]
  

   constructor(){

   }
    
   getProducts(){
     return this.products;
   }

   getProduct(id: number){ 
      return this.products.find(e => e.id === id);
     
   }

   public addProductToCart(product: Product) {
      this.cart.push(product);
      this.totalPrice += product.price;
      console.log(this.totalPrice)
    }

    getNumberOfProducts(): number{
       let count = 0;
      for(let i; i < this.cart.length; i++){
         count++;
      }
      return count;
    }

    getTotalPrice(): number {
       return this.totalPrice;
    }

    getCategories() {
       return this.categories;
    }

    setCategory(category: string){
       this.categoryName = category;
    }

    resetCategories(){
       this.categoryName = '';
    }
}
