function Validator() {

    this.kiemTraRong = function (value, showID, mess) {
        if (value) {
            getEle(showID).style.display = 'none';
            return true;
        }
        getEle(showID).style.display = 'block';
        getEle(showID).innerHTML = mess;
        return false;
    }

    this.kiemTraSo = function (value, showID, mess) {
        regexNum = /^[0-9]+$/
        if (regexNum.test(value)) {
            getEle(showID).style.display = 'none';
            return true;
        }
        getEle(showID).style.display = 'block';
        getEle(showID).innerHTML = mess;
        return false;
    }

    this.kiemTraSoVaChu = function (value, showID, mess) {
        regexNumAndChars = /^[a-zA-Z0-9_]+$/
        if (regexNumAndChars.test(value)) {
            getEle(showID).style.display = 'none';
            return true;
        }
        getEle(showID).style.display = 'block';
        getEle(showID).innerHTML = mess;
        return false;
    }

    this.kiemTraDoDai = function (value, showID, min, max, mess) {
        if (value.length >= min && value.length <= max) {
            getEle(showID).style.display = 'none';
            return true;
        }
        getEle(showID).style.display = 'block';
        getEle(showID).innerHTML = mess;
        return false;
    }

    this.kiemTraTKNV = function (value, dsnv, showID, mess) {
        var isDuplicate = false;
        for (var i = 0; i < dsnv.length && !isDuplicate; i++) {            
            isDuplicate = (dsnv[i].taiKhoanNV.includes(value)) ? true : false;                         
        }       
        if (!isDuplicate) {
            getEle(showID).style.display = 'none';
            return true;
        }        
        getEle(showID).style.display = 'block';
        getEle(showID).innerHTML = mess;
        return false;
         
    }




    this.kiemTraTen = function (value, showID, mess) {
        var regexName = /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$/;

        if (regexName.test(value)) {
            getEle(showID).style.display = 'none';
            return true;
        }
        getEle(showID).style.display = 'block';
        getEle(showID).innerHTML = mess;
        return false;

    }

    this.kiemTraEmail = function (value, showID, mess) {
        var regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (regexEmail.test(value)) {
            getEle(showID).style.display = 'none';
            return true;
        }
        getEle(showID).style.display = 'block';
        getEle(showID).innerHTML = mess;
        return false;

    }

    this.kiemTraMatKhau = function (value, showID, mess) {
        var regexMatKhau = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*\d)(?=.*?[#?!@$%^&*-])/;

        if (regexMatKhau.test(value)) {
            getEle(showID).style.display = 'none';
            return true;
        }
        getEle(showID).style.display = 'block';
        getEle(showID).innerHTML = mess;
        return false;
        
    }

    this.kiemTraNgayThang = function (value, showID, mess) {
        var regexNgayThang = /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/;

        if (regexNgayThang.test(value)) {
            getEle(showID).style.display = 'none';
            return true;
        }
        getEle(showID).style.display = 'block';
        getEle(showID).innerHTML = mess;
        return false;
        
    }

    this.kiemTraGiaTri = function (value, showID, min, max, mess) {
        if (value>=min && value<=max) {
            getEle(showID).style.display = 'none';
            return true;
        }
        getEle(showID).style.display = 'block';
        getEle(showID).innerHTML = mess;
        return false;
    }

    this.kiemTraChucVu = function (value, showID, mess) {
        if (value !== "Chọn chức vụ") {
            getEle(showID).style.display = 'none';
            return true;
        }
        getEle(showID).style.display = 'block';
        getEle(showID).innerHTML = mess;
        return false;
        
    }
} 