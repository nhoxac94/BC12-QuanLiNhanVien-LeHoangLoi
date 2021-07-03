function NhanVien(taiKhoanNV, hoTenNV, emailNV, matKhau, ngayLam, luongCB, chucVu, gioLamTrongThang) {
    this.tinhTongLuong = function(chucVu) {
        var tongLuong = 0;
        if (chucVu === 'Giám đốc') {
            tongLuong =  luongCB*3
        }else if (chucVu === 'Trưởng phòng'){
            tongLuong = luongCB*2
        }else {
            tongLuong = luongCB
        }
        return tongLuong;
    }

    this.xetLoaiNV = function (gioLamTrongThang) {
       
        var loaiNV = '';
        if (gioLamTrongThang >= 192) {
            loaiNV = "Xuất sắc"
        } else if (gioLamTrongThang >= 176) {
            loaiNV = "Giỏi"
        }else if (gioLamTrongThang >= 160 ) {
            loaiNV = "Khá"
        } else {
            loaiNV = "Kém"
        }
        return loaiNV;
    }
     
    
    this.taiKhoanNV = taiKhoanNV;
    this.hoTenNV = hoTenNV;
    this.emailNV = emailNV;
    this.matKhau = matKhau;
    this.ngayLam = ngayLam;
    this.luongCB = luongCB;
    this.chucVu = chucVu;
    this.gioLamTrongThang = gioLamTrongThang;
    this.tongLuong = this.tinhTongLuong(this.chucVu);
    this.loaiNV = this.xetLoaiNV(this.gioLamTrongThang);

    
}