function getEle(id) {
    return document.getElementById(id);
}

var dsnv = new DanhSachNhanVien();
var validator = new Validator();

// Bỏ nút cập nhật
getEle('btnThem').onclick = function() {
    getEle('btnCapNhat').style.display = ' none';
    getEle('btnThemNV').style.display = ' block';
    getEle('myForm').reset();
    clearErrMess();
}

// get + setlocalstorage

function setLocalstorage() {
    localStorage.setItem ('DSNV', JSON.stringify(dsnv.arr))
}

function getLocalstorage() {
    if (localStorage.getItem('DSNV')) {
        dsnv.arr = JSON.parse(localStorage.getItem('DSNV'))
        hienThiNhanVien(dsnv.arr);
    }
    
}

getLocalstorage()

// get all element value

function getAllElementsValue() {
    accountNV = getEle('tknv').value;
    nameNV = getEle('name').value;
    emailNV = getEle('email').value;
    password = getEle('password').value;
    ngayLam = getEle('datepicker').value;
    luongCB = getEle('luongCB').value;
    chucVu = getEle('chucvu').value;
    gioLamTrongThang = getEle('gioLam').value;
 }
 

// Validator

function validate(accountNV, nameNV, emailNV, password, ngayLam, luongCB, chucVu, gioLamTrongThang,isCheckTKNV) {

    var isValid = true;   
    
    isValid &= validator.kiemTraRong(accountNV, 'tbTKNV', '(*) Vui lòng nhập tài khoản nhân viên') 
            && validator.kiemTraDoDai(accountNV, 'tbTKNV', 4, 6, `(*) Vui lòng nhập tài khoản nhân viên gồm 4-6 kí tự`)
            && validator.kiemTraSoVaChu(accountNV, 'tbTKNV', `(*) Vui lòng nhập tài khoản nhân viên gồm số và chữ`)

    if(isCheckTKNV === true && isValid) {              
        isValid &= validator.kiemTraTKNV(accountNV, dsnv.arr,'tbTKNV', `(*)Tài khoản nhân viên đã tồn tại`)
    }        

    isValid &= validator.kiemTraRong(nameNV, 'tbTen', `(*) Vui lòng nhập tên nhân viên`) 
            && validator.kiemTraTen(nameNV, 'tbTen',`(*) Vui lòng nhập tên nhân viên chỉ chứa kí tự`)

    isValid &= validator.kiemTraRong(emailNV, 'tbEmail', `(*) Vui lòng nhập email nhân viên`)
            && validator.kiemTraEmail(emailNV, 'tbEmail', `(*) Vui lòng nhập đúng định dạng email`)

    isValid &= validator.kiemTraRong(password, 'tbMatKhau', `(*) Vui lòng nhập mật khẩu`)
            && validator.kiemTraDoDai(password, 'tbMatKhau',6, 10, `(*) Vui lòng nhập mật khẩu gồm 6-10 kí tự`)
            && validator.kiemTraMatKhau(password, 'tbMatKhau', `(*) Vui lòng nhập mật khẩu chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt`)

    isValid &= validator.kiemTraRong(ngayLam, 'tbNgay', `(*) Vui lòng nhập ngày làm nhân viên`)
            && validator.kiemTraNgayThang(ngayLam, 'tbNgay', `(*) Vui lòng nhập theo định dạng mm/dd/yyyy`)

    isValid &= validator.kiemTraRong(luongCB, 'tbLuongCB', `(*) Vui lòng nhập lương cơ bản`)
            && validator.kiemTraGiaTri(luongCB, 'tbLuongCB', 1000000 , 20000000, `(*) Lương cơ bản từ 1 000 000 - 20 000 000 vnd`)
            && validator.kiemTraSo(luongCB, 'tbLuongCB', `(*) Vui lòng nhập lại lương cơ bản`)


    isValid &= validator.kiemTraChucVu (chucVu, 'tbChucVu', `(*) Vui lòng nhập chức vụ nhân viên`)

    isValid &= validator.kiemTraRong(gioLamTrongThang, 'tbGiolam', `(*)Vui lòng nhập giờ làm`)
            && validator.kiemTraGiaTri(gioLamTrongThang, 'tbGiolam', 80, 200, `(*)Giờ làm trong tháng từ 80 - 200 giờ`)    
    
    return isValid;
}


// Xóa thông báo lỗi khi bật

function clearErrMess () {    
    document.querySelectorAll('.form-group>span').forEach(function(mess) {
        mess.style.display = 'none';
    })
}

// Hiển thị nhân viên 

function hienThiNhanVien(dsnv) {
    var contentDSNV = '';    
    
    dsnv.map(function(nhanVien) {
       contentDSNV += 
    `
    <tr>
        <td>${nhanVien.taiKhoanNV}</td>
        <td>${nhanVien.hoTenNV}</td>
        <td>${nhanVien.emailNV}</td>            
        <td>${nhanVien.ngayLam}</td>
        <td>${nhanVien.chucVu}</td>
        <td>${nhanVien.tongLuong}</td>
        <td>${nhanVien.loaiNV}</td>

        <td>
            <button class="btn btn-primary" onclick = "capNhatNV('${nhanVien.taiKhoanNV}')">Cập nhật</button>
            <button class="btn btn-danger" onclick = "xoaNV('${nhanVien.taiKhoanNV}')">Xóa</button>

        </td>

    </tr>
    `
    })    
    
    getEle('tableDanhSach').innerHTML = contentDSNV;

}

// Xóa nhân viên 

function xoaNV(taiKhoanNV) {
    var viTri = dsnv.timViTri(taiKhoanNV, 'taiKhoanNV');
    dsnv.xoaNhanVien(viTri);
    hienThiNhanVien(dsnv.arr);
    setLocalstorage();
}

// Hiển thị nhân viên lên form
function showNhanVienLenForm (viTri) {
    getEle('tknv').value = dsnv.arr[viTri].taiKhoanNV;
    getEle('name').value = dsnv.arr[viTri].hoTenNV; 
    getEle('email').value = dsnv.arr[viTri].emailNV;
    getEle('password').value = dsnv.arr[viTri].matKhau;
    getEle('datepicker').value = dsnv.arr[viTri].ngayLam;
    getEle('luongCB').value = dsnv.arr[viTri].luongCB;
    getEle('chucvu').value = dsnv.arr[viTri].chucVu;
    getEle('gioLam').value = dsnv.arr[viTri].gioLamTrongThang;
}

// Cập nhật nhân viên
function capNhatNV (tkNV) {
    getEle('btnThem').click();
    getEle('btnCapNhat').style.display = ' block';
    getEle('btnThemNV').style.display = ' none';
    var viTri = dsnv.timViTri(tkNV, 'taiKhoanNV'); 
    showNhanVienLenForm (viTri);

    getEle('btnCapNhat').onclick = function() {
    getAllElementsValue();
    var isValid = validate(accountNV, nameNV, emailNV, password, ngayLam, luongCB, chucVu, gioLamTrongThang, false);
    if (!isValid) return;
    dsnv.arr[viTri] = new NhanVien(accountNV, nameNV, emailNV, password, ngayLam, luongCB, chucVu, gioLamTrongThang); 
    hienThiNhanVien(dsnv.arr);
    setLocalstorage();
    getEle('btnDong').click();
}
}


// Thêm nhân viên

getEle('btnThemNV').onclick = function() {

    getAllElementsValue();

    // Validation 

    var isValid = validate(accountNV, nameNV, emailNV, password, ngayLam, luongCB, chucVu, gioLamTrongThang, true);
    
    if (!isValid) return;

    var nhanVien = new NhanVien(accountNV, nameNV, emailNV, password, ngayLam, luongCB, chucVu, gioLamTrongThang);
    dsnv.themNhanVien(nhanVien);
    hienThiNhanVien(dsnv.arr);
    setLocalstorage()
    

}

// Search loai nhan vien

getEle('searchName').onkeyup = function() {
    var giaTriSearchLoaiNV = getEle('searchName').value;   
    hienThiNhanVien(dsnv.timViTriLoai(giaTriSearchLoaiNV))
   
}

