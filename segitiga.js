function hitung() {
    let alas = parseFloat(document.getElementById("alas").value);
    let tinggi = parseFloat(document.getElementById("tinggi").value);
    let sisiMiring = Math.sqrt((alas * alas) + (tinggi * tinggi));
    let keliling = alas + tinggi + sisiMiring;
    let luas = 0.5 * alas * tinggi;

    document.getElementById("luas").value = luas.toFixed(2);
    document.getElementById("keliling").value = keliling.toFixed(2);
}
        