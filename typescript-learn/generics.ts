function deger(x: number): number {
    return x;
}
function deger2(x: string): string {
    return x;
}


let sayi: any = deger(10);
console.log(sayi)

let sehir: any = deger2("Ankara");
console.log(sehir)



function deger3<T>(x: T): T {
    return x;
}

let deneme = deger3<number>(1);
let deneme2 = deger3<string>("Ankara");



class GenericClass<T> {
    degisken: T;
    fonksiyon(parametre: T): T {
        return parametre;
    }
}

let sinif = new GenericClass<string>();

sinif.fonksiyon("ankara")