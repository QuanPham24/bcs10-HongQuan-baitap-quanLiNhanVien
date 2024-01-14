// show message " khong hop le"
function showMessage(idErr,message){
    var id = document.getElementById(idErr);
    if((id.style.display ==="none" || id.style.display ==="") && message!=""){
        id.style.display ="inline-block";
        id.innerText = message;
    }else{
        id.style.display ="none"
    }
    
}

function kiemTraRong(value,idErr){
    if(value.trim() != ""){
        showMessage(idErr,"");
        return true;
    }
    showMessage(idErr,"Khong duoc de trong");
    return false;
}

function kiemTraTrung(value,arr,idErr){
    // return index if value is inside array
    var index = arr.findIndex(function(item){
        return item.taiKhoan == value;
    })

    if(index != -1){
        showMessage(idErr,"noi dung da bi trung");
        return false;
    }
    showMessage(idErr,"");
    return true;
}

function kiemTraEmail(valueEmail){
    const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if(re.test(valueEmail)){
    showMessage("tbEmail","");
    return true;
  }
  showMessage("tbEmail","Email Khong hop le");
  return false;
}

// tbTen
function kiemTraTen(value){
    var regex = /[a-zA-Z]/;
    if(regex.test(value)){
        showMessage("tbTen","");
        return true;
    }
    showMessage("tbTen","Ten khong hop le");
    return false;
}

function kiemTraKySo(value){
    var regex = /^\d{4,6}$/;
    if(regex.test(value)){
        showMessage("tbTKNV","");
        return true;
    }
    showMessage("tbTKNV","tai khoan khong hop le");
    return false;
}

function kiemTraPassword(value){
    var regex = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{6,10}$/;
    if(regex.test(value)){
        showMessage("tbMatKhau","");
        return true;
    }
    showMessage("tbMatKhau","Mat khau khong hop le");
    return false;
}

function kiemTraNgay(value){
    var regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;

    if(regex.test(value)){
        showMessage("tbNgay","");
        return true;
    }
    showMessage("tbNgay","Ngay khong dung dinh dang mm/dd/yyyy");
    return false;
}

function kiemTraLuong(salary){
    if(salary >= 1000000 && salary <= 20000000){
        showMessage("tbLuongCB","");
        return true;
    }
    showMessage("tbLuongCB","Luong khong hop le");
    return false;
}

/**
 * <option>Sếp</option>
    <option>Trưởng phòng</option>
    <option>Nhân viên</option>
 */

function kiemTraChucVu(value){
    var validPositions = ["Sếp", "Trưởng phòng", "Nhân viên"];  
    if(validPositions.includes(value)){
        showMessage("tbChucVu","");
        return true;
    }
    showMessage("tbChucVu","Chuc vu khong hop le");
    return false;
}

function kiemTraGio(value){
    if(value >= 80 && value <= 200){
        showMessage("tbGiolam","");
        return true;
    }
    showMessage("tbGiolam","Gio khong hop le");
    return false;
}
