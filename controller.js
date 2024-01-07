
function getInfoFromWeb(){
    var account = document.getElementById("tknv").value;
    var ten =document.getElementById("name").value;
    var email =document.getElementById("email").value;
    var pass =document.getElementById("password").value;
    var date =document.getElementById("datepicker").value;
    var luong =document.getElementById("luongCB").value;
    var chucVu =document.getElementById("chucvu").value;
    var gioLam =document.getElementById("gioLam").value;

    var nv = {
        taiKhoan: account,
        name: ten,
        email: email,
        password: pass,
        ngayLam: date,
        luong: luong,
        chucVu: chucVu,
        gioLam: gioLam,
        tongLuong: function(){
            
            if(this.chucVu == "Sếp"){
                return this.luong * 3;
            }else if(this.chucVu == "Trưởng phòng"){
                return this.luong * 2;
            }else{
                return this.luong;
            }
        },
        xepLoai:function(){
            if(this.gio >= 192){
                return "excellence";
            }else if(this.gio >= 176){
                return "gioi";
            }else if(this.gio >= 160){
                return "kha";
            }else{
                return "trung binh";
            }
        }
    };

    return nv;
}


function renderDsNv(){
    var contentHtml = "";
    for(var i = 0; i < dsNv.length;i++){
        var data = dsNv[i];
        var trString = `<tr>
        <td>${data.taiKhoan}</td>
        <td>${data.name}</td>
        <td>${data.email}</td>
        <td>${data.ngayLam}</td>
        <td>${data.chucVu}</td>
        <td>${data.tongLuong()}</td>
        <td>${data.xepLoai()}</td>
        <td><button class='btn btn-danger' onclick="xoaNv('${data.taiKhoan}')">X</button></td>
        </tr>`;
        contentHtml = contentHtml + trString;
    }
    document.getElementById("tableDanhSach").innerHTML = contentHtml;
}