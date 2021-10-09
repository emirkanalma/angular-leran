interface Product{
    id:number;
    name:string;
    price:number;
}
class Product2 {
    id:number;
    name:string;
    price:number;
}

function save(product:Product){
    console.log(product.name + " Kaydedildi!")
}

function save2(product2:Product2){
    console.log(product2.name + " Kaydedildi!")
}

save({id:1, name:"Laptop", price:1000});

let mouse = new Product2();
mouse.name = "Mouse";

save2(mouse);



interface PersonService{
    save();
}

class CostumerService implements PersonService {
    save() {
       
    }

}