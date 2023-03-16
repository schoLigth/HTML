// Membuat object for angkot

function Kuliah(mahasiswa, mataKuliah, sks, biaya){
    this.mahasiswa = mahasiswa;
    this.mataKuliah =   mataKuliah;
    this.sks = sks; 
    this.biaya = biaya; 

    this.tambahSks = function(mataKuliah){
        this.sks.push(mataKuliah);
        return  this.sks;
    }
}

var mahasiswa = new Kuliah('Lusia Juliana', ['IMK', 'ASA', 'PAD'], [], 0);

