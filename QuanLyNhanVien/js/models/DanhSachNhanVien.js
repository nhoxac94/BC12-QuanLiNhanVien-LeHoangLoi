function DanhSachNhanVien () {
    this.arr = [];

    this.themNhanVien = function (nhanVien) {
        this.arr.push(nhanVien);
    }
}

DanhSachNhanVien.prototype.timViTri = function(value, truongTimKiem) {
    return this.arr.findIndex(function (nhanVien) { 
        return value === nhanVien[truongTimKiem]
    })
}

DanhSachNhanVien.prototype.xoaNhanVien = function (vitri) {
    this.arr.splice(vitri, 1)
}

DanhSachNhanVien.prototype.timViTriLoai = function(tenLoaiNV) {
    return this.arr.filter(function (nhanVien) {       
        return nhanVien.loaiNV.toLowerCase().includes(tenLoaiNV.toLowerCase());
        
    })
}