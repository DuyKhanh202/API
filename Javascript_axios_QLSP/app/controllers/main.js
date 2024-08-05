/**
/get: Endpoint này dùng để lấy danh sách tất cả các sản phẩm hiện có trong hệ thống.
/get/id: Endpoint này được sử dụng để lấy thông tin chi tiết của một sản phẩm cụ thể, xác định bởi ID của sản phẩm đó.
/post: Endpoint này dùng để thêm một sản phẩm mới vào hệ thống. Thông thường, dữ liệu của sản phẩm mới sẽ được gửi trong body của yêu cầu HTTP.
/put/id: Endpoint này dùng để cập nhật thông tin của một sản phẩm có sẵn. ID của sản phẩm cần cập nhật được chỉ định trong URL, và dữ liệu mới sẽ được gửi trong body của yêu cầu.
/delete/id: Endpoint này dùng để xóa một sản phẩm khỏi hệ thống. ID của sản phẩm cần xóa được chỉ định trong URL.
*/



//dòng này chạy khi user refresh trang
//render ra danh sách sản phẩm từ api
function renderProduct(listProduct) {
  // console.log(listProduct);
  // var listProduct = res.data;
  var contentHTML = "";
  for (var i = 0; i < listProduct.length; i++) {
    var trString = `
            <tr>
              <td>${listProduct[i].id}</td>
              <td>${listProduct[i].name}</td>
              <td>${listProduct[i].price}</td>
              <td><img width=100 src="${listProduct[i].img}"></td>
              <td>${listProduct[i].description}</td>
              <td>  <button class="btn btn-danger" onclick="deleteProduct(${listProduct[i].id})">
                Xóa
              </button>
              <button class="btn btn-primary" onclick="editProduct(${listProduct[i].id})">
                Sửa
              </button>
              </td>
            </tr>`;
    contentHTML += trString;
  }
  document.getElementById("tblDanhSachSP").innerHTML = contentHTML;
}

function fetchListProduct() {
  onLoading();
  getlistService()
    .then(function (res) {

      // thành công
      renderProduct(res.data);
      offLoading();
    })
    .catch(function (err) {
      // thất bại
      offLoading();
    });
}
fetchListProduct();

//phương thức post
function addProduct() {
  var newProduct = getDataForm();
  addService()
    .then(function (res) {
      // thành công
      // đóng modal sau khi thêm thành công
      $("#myModal").modal("hide");
      //gọi lại api lấy danh sách SP sau khi thêm()
      fetchListProduct();
      console.log("thêm thành công sản phẩm");
    })
    .catch(function (err) {
      // thất bại
      console.error(err);
    });
};

function deleteProduct(id) {
  console.log("🚀 ~ deleteProduct ~ id:", id)
  onLoading();
  deleteService(id)
    .then(function (res) {
      // thành công
      fetchListProduct();
      offLoading();
    })
    .catch(function (err) {
      console.log("🚀 ~ deleteProduct ~ err:", err)
      // thất bại
      offLoading();
    });

}
//loading : bật 1 lần, tắt 2 lần

function editProduct(id) {
  editService(id)
    .then(function (res) {
      var product = res.data;
      // hiện modal
      $("#myModal").modal("show");
      // thành công
      // renderProduct(res.data);
      // đưa data lên 
      var name = document.getElementById("TenSP").value = product.name;
      var price = document.getElementById("GiaSP").value = product.price;
      var img = document.getElementById("HinhSP").value = product.img;
      var description = document.getElementById("MoTaSP").value = product.description;
      //gán id vào modal title
      document.getElementById("product-id").innerHTML = product.id;
      document.querySelector(".modal-title").innerHTML = product.id;
    })
    .catch(function (err) {
      // thất bại
    });
}

//cập nhật SP
function updateProduct() {
  var id = document.getElementById("product-id").innerHTML;
  console.log(id);

  var newProduct = getDataForm();
  updateService(id,newProduct)
    .then(function (res) {
      var product = res.data;
      // hiện modal
      $("#myModal").modal("hide");
      // thành công
      // renderProduct(res.data);
      fetchListProduct();
    })
    .catch(function (err) {
      // thất bại
    });
}


