abstract class KrediBase {
    constructor() {
        
    }

    kaydet():void{
        console.log("Kredi Kaydedildi")
    }
    
    abstract hesapla():void;

}

class TuketiciKredi extends KrediBase {
    constructor() {
        super();
    }
    hesapla(): void {
        console.log("Tüketici kredisine göre hesap yapıldı");
    }
}

class KonutKredi extends KrediBase {
    constructor() {
        super();
    }
    hesapla(): void {
        console.log("Konut kredisine göre hesap yapıldı");
    }

    baskabisi(){
        
    }
}

let tuketiciKredisi = new TuketiciKredi();

tuketiciKredisi.hesapla();
tuketiciKredisi.kaydet();

let konutKredisi = new KonutKredi();

konutKredisi.hesapla();
konutKredisi.kaydet();

let kredi : KrediBase;

kredi = new TuketiciKredi();
kredi = new KonutKredi();



