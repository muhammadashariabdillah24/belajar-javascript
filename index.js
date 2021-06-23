function panggil() {
    let santri = {
        nama : "Ashari",
        umur : 20,
        jurusan : "Back-End Developer",
    }

    for(let x in santri){
        console.log(santri[x])
    }
}

panggil();