
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
    
    dsNv.push(nv);
    // keep data when load page
    var dataJson = JSON.stringify(dsNv);
    localStorage.setItem("DSNV",dataJson);

    // render lai lay out sau khi them thanh cong
    renderDsNv();
}

function xoaNv(taiKhoan){
    var index;
    for(var i = 0; i < dsNv.length;i++){
        if(dsNv[i].taiKhoan == taiKhoan){
            index = i;
        }
    }
    dsNv.splice(index,1);
    renderDsNv();
}