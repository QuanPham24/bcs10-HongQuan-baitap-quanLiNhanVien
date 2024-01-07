function NhanVien(account,ten,email,pass,date,luong,chucVu,gioLam){
    this.taiKhoan = account;
    this.name= ten;
    this.email = email;
    this.password = pass;
    this.ngayLam = date;
    this.luong = luong;
    this.chucVu = chucVu;
    this.gioLam = gioLam;
    this.tongLuong = function(){
        if(this.chucVu == "Sếp"){
            return this.luong * 3;
        }else if(this.chucVu == "Trưởng phòng"){
            return this.luong * 2;
        }else{
            return this.luong;
        }
    };
    this.xepLoai = function(){
        if(this.gio >= 192){
            return "excellence";
        }else if(this.gio >= 176){
            return "gioi";
        }else if(this.gio >= 160){
            return "kha";
        }else{
            return "trung binh";
        };
    }
}