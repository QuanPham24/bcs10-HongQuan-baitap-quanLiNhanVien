
var dsNv =[];

let dataJson = localStorage.getItem("DSNV");

var arratNv = JSON.parse(dataJson);

for(var i = 0; i < arratNv.length;i++){
    var data = arratNv[i];
    var nv = new NhanVien(data.taiKhoan,
        data.name,
        data.email,
        data.password,
        data.ngayLam,
        data.luong,
        data.chucVu,
        data.gioLam);
    dsNv.push(nv);
};
renderDsNv();



function themNv(){
   var nv = getInfoFromWeb();
    
    // Validate data truoc khi them
    var isValid = true;

    // kiem tra tai khoan
    isValid = kiemTraRong(nv.taiKhoan,"tbTKNV") && kiemTraKySo(nv.taiKhoan) && kiemTraTrung(nv.taiKhoan,dsNv,"tbTKNV");

    // kiem tra Ten
    isValid = isValid & (kiemTraRong(nv.name,"tbTen") && kiemTraTen(nv.name));

    // kiem tra email
    isValid = isValid & (kiemTraRong(nv.email,"tbEmail") && kiemTraEmail(nv.email));

    // Kiem Tra Mat Khau
    isValid = isValid & (kiemTraRong(nv.password,"tbMatKhau") && kiemTraPassword(nv.password));

    // Kiem tra ngay
    isValid &= (kiemTraRong(nv.ngayLam,"tbNgay") && kiemTraNgay(nv.ngayLam));

    // kiem tra luong
    isValid &= (kiemTraRong(nv.luong,"tbLuongCB") && kiemTraLuong(nv.luong));

    // kiem tra Chuc vu
    isValid &= (kiemTraRong(nv.chucVu,"tbChucVu") && kiemTraChucVu(nv.chucVu));

    // Kiem tra gio lam
    isValid &= (kiemTraRong(nv.gioLam,"tbGiolam") && kiemTraGio(nv.gioLam));
    

    if(isValid){

        dsNv.push(nv);
        // keep data when load page
        var dataJson = JSON.stringify(dsNv);
        localStorage.setItem("DSNV",dataJson);
        
        // render lai lay out sau khi them thanh cong
        renderDsNv();
    }
}

function xoaNv(taiKhoan){
    var index;
    for(var i = 0; i < dsNv.length;i++){
        if(dsNv[i].taiKhoan == taiKhoan){
            index = i;
        }
    }
    dsNv.splice(index,1);

    // luu lai du lieu data trong array sau khi xoa
    var dataJson = JSON.stringify(dsNv);
    localStorage.setItem("DSNV",dataJson);

    renderDsNv();
}

function EditNv(taiKhoan){
    var index;

    for(var i = 0;i < dsNv.length;i++ ){
        if(dsNv[i].taiKhoan == taiKhoan){
            index = i;
        }
    }

    // tu index => NV duoc click
    var Nv = dsNv[index];
    // show thong tin len form khi click edit
    document.getElementById("tknv").value = Nv.taiKhoan;
    document.getElementById("name").value = Nv.name;
    document.getElementById("email").value = Nv.email;
    document.getElementById("password").value = Nv.password;
    document.getElementById("datepicker").value = Nv.ngayLam;
    document.getElementById("luongCB").value = Nv.luong;
    document.getElementById("chucvu").value = Nv.chucVu;
    document.getElementById("gioLam").value = Nv.gioLam;
}

function capNhat(){
    var Nv = getInfoFromWeb();
    var index;
    for(var i = 0;i < dsNv.length;i++ ){
        if(dsNv[i].taiKhoan == Nv.taiKhoan){
            index = i;
        }
    }
    // cap nhat lai vi tri
    dsNv[index] = Nv;

    renderDsNv();
}