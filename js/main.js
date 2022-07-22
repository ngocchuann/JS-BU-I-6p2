
function songuyento() {
    var n = document.getElementById("nhapnguynto").value;
    var ketQua = '';

    for (var i = 1; i <= n; i++) {
        if (checknguyento(i)) {
            ketQua += "  " + i;
        }
        document.getElementById("txtResultbai5").innerHTML = ketQua;
    }

}
document.getElementById("btnb5").onclick = songuyento;

function checknguyento(num) {
    var kq = true;
    
    if (num < 2) {
        kq = false;
    } else if (num == 2) {
        kq = true;
    }else if (num % 2 == 0) {
        kq = false;
    }else {
        for (var i = 3; i <=  Math.sqrt(num); i += 2) {
            if (num % i == 0) {
                return  false;
                
            }
        }
    }
    return kq;
}