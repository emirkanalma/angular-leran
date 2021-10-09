class Ev{
    public _odaSayidi:number;
    _pencere:number;
    _kat:number;
    constructor(odaSayisi:number,pencere:number,kat:number){
        this._odaSayidi = odaSayisi;
        this._kat = kat;
        this._pencere = pencere;
    }
    YemekYe(){
        console.log(this._kat + ". Katlı evde" + " Yemek yiyildi");
    }
}


let ev = new Ev(3,4,5);

ev.YemekYe();

console.log(ev._odaSayidi)


class Kisi{
    private _isim:string;

    get isim():string{
        return "Sayın: " + this._isim;
    }

    set isim(ad:string){
        this._isim = ad;
    }

    kaydet(){
        console.log("Kişi Kaydedildi");
    }
}

class Musteri extends Kisi{

    satisYap(){
        console.log("Satış Yapıldı");
    }
}

class Personel extends Kisi{

    maasOde(){
        console.log("Maaş ödendi");
    }

}

let musteri = new Musteri();
musteri.isim = "emir";
console.log(musteri.isim)
musteri.kaydet();
musteri.satisYap();

let personel = new Personel();

personel.kaydet();
personel.maasOde();