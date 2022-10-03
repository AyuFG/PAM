function halo(nama) {
    alert('halo,${usia}');
}

function outputpesan(callback){
    const usia = prompt ('Usia anda adalah : ');
    callback(usia);
}
outputpesan(halo);

function outputpesan(callback){
    const usia = prompt ('Usiamu adalah : ' );
    callback(usia);
}
outputpesan(nama => alert('halo,${usia}'))