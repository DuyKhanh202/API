function onLoading() {
  document.getElementById("spiner").style.display = "block";
}
function offLoading() {
  document.getElementById("spiner").style.display = "none";
}

function getDataForm() {
  //lấy data từ form 
  var name = document.getElementById("TenSP").value;
  var price = document.getElementById("GiaSP").value;
  var img = document.getElementById("HinhSP").value;
  var description = document.getElementById("MoTaSP").value;
  // tạo object lấy data mới 
  return {
    name: name,
    price: price,
    img: img,
    description: description,
  }
}