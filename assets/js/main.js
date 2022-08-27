/**
 * DOM
 */
// var user = document.getElementById('userName').value;
// console.log(userName);
var btnClick = document.getElementById('btnClick');
btnClick.onclick = function () {
    var userName = document.getElementById("userName");
    console.log(userName.value);
};

var sum = document.getElementById("sum");
sum.onclick = function () {
    // Đầu vào
    var numBer1 = document.getElementById("numBer1").value * 1;
    var numBer2 = document.getElementById("numBer2").value * 1;
    // Xử lý
    var Tong = numBer1 + numBer2;
    // Đầu ra 
    var ketQua = console.log('kết quả là: ' + Tong);

    // DOM tới id thongBao  
    document.getElementById("thongBao").innerHTML = ketQua;
};

var btnOn = document.getElementById('btnOn');
btnOn.onclick = function () {
    document.getElementById('picOff').src = "./assets/img/pic_bulbon.gif";
};

var btnOff = document.getElementById('btnOff');
btnOff.onclick = function () {
    document.getElementById('picOff').src = "./assets/img/pic_bulboff.gif";
};

var btnDisabled = document.getElementById('btnDisabled');
btnDisabled.onclick = function () {
    document.getElementById('btnOn').disabled = true;
};



var btnEnable = document.getElementById('btnEnable');
btnEnable.onclick = function () {
    document.getElementById('btnOn').disabled = false;
};


// Form Đăng Nhập

var btnDangNhap = document.getElementById('btnDangNhap');
btnDangNhap.onclick = function () {
    // imput
    var taiKhoan = document.getElementById('user').value;
    var matKhau = document.getElementById('password').value;
    // output
    var thongBao = '';
    // progress
    thongBao = 'Tài khoản: ' + taiKhoan + ' - Mật khẩu: ' + matKhau;
    var ketQuaDangNhap = document.getElementById('ketQuaDangNhap');
    ketQuaDangNhap.innerHTML = thongBao;
    // console.log('Tai khoan', taiKhoan);
    // console.log('Mat khau', matKhau);

    ketQuaDangNhap.style.color = '#fff';
    ketQuaDangNhap.style.padding = '15px';
    ketQuaDangNhap.style.margin = '15px';

    ketQuaDangNhap.style.backgroundColor = '#28a745';


};

var btnTaoThe = document.getElementById('btnTaoThe');
btnTaoThe.onclick = function () {
    // var tagP = '<p>Cybersoft</p>';
    // console.log(tagP);
    // document.getElementById('myDiv').innerHTML = tagP;
    // tạo thẻ p 
    var tagP = document.createElement('p'); // <p></p>
    //tạo nội dung cho thẻ
    tagP.innerHTML = 'Cybersoft'; //<p>Cybersoft</p>
    //gắn thẻ p đã tạo vào thẻ div
    document.getElementById('myDiv').appendChild(tagP);
};


//  100000;


var btnTinhTien = document.getElementById('btnTinhTien');
btnTinhTien.onclick = function () {
    const luong1Ngay = document.getElementById('luong1Ngay').value = 100000;
    var soNL = document.getElementById('soNL').value;
    var ketQuaLuongNhanVien = luong1Ngay * soNL;
    // format VN 

    var tagP = '<p>Cybersoft</p>';
    document.getElementById('ketQuaLuongNhanVien').innerHTML = ketQuaLuongNhanVien;
};



var btnThanhToan = document.getElementById('btnThanhToan');
btnThanhToan.onclick = function () {
    var tenPhim = document.getElementById('tenPhim').value;
    //input
    var veNgLon = document.getElementById('veNgLon').value * 1;
    var veTreEm = document.getElementById('veTreEm').value * 1;
    var soNgLon = document.getElementById('soNgLon').value * 1;
    var soTreEm = document.getElementById('soTreEm').value * 1;
    var phanTram = document.getElementById('phanTram').value * 1;
    //progress
    var soVeDaBan = soNgLon + soTreEm;
    var doanhThu = (veNgLon * soNgLon) + (veTreEm * soTreEm);
    var trichTuThien = doanhThu * phanTram / 100;
    var tongThu = doanhThu - trichTuThien;
    //output
    var ketQua = document.createElement('p');
    ketQua.innerHTML =
        'Tên phim: ' + tenPhim
        + '<br>Số vé đã bán ' + soVeDaBan
        + '<br>Doanh thu: ' + doanhThu
        + '<br>Trích % từ thiện: ' + phanTram + ' %'
        + '<br>Tổng tiền trích từ thiện: ' + trichTuThien
        + '<br>Tổng thu được sau khi trừ: ' + tongThu;
    document.getElementById('myForm').appendChild(ketQua);

};


document.getElementById('btnCong').onclick = function () {
    var nhapSo1 = document.getElementById('nhapSo1').value * 1;
    var nhapSo2 = document.getElementById('nhapSo2').value * 1;
    var nhapSo3 = document.getElementById('nhapSo3').value * 1;
    var nhapSo4 = document.getElementById('nhapSo4').value * 1;
    var nhapSo5 = document.getElementById('nhapSo5').value * 1;
    var trungBinhCong = (nhapSo1 + nhapSo2 + nhapSo3 + nhapSo4 + nhapSo5) / 5;
    var ketQua = document.createElement('p');
    ketQua.innerHTML = 'Giá trị trung bình là: ' + trungBinhCong;
    document.getElementById('boxSum').appendChild(ketQua);
};





