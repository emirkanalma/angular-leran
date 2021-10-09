function topla(x: number, y?: number): number {
    if (y) {
        return x + y
    }
    return x;
}

let toplama: number = topla(1, 40);


console.log(toplama)

function davetEt(ilkDavetli: string, ...digerleri: string[]): string {
    return ilkDavetli + "\n" + digerleri.join("\n");
}

console.log(davetEt("berkay","emir","emre","yalak"))