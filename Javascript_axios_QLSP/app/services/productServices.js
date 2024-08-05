// lấy data
var urlApi = "https://66a7892853c13f22a3d01ae2.mockapi.io/product";
function getlistService() {
    return axios({
        url: urlApi,
        method: "GET",
    })
}

//xóa sản phẩm
function deleteService(id) {
    return axios({
        url: `${urlApi}/${id}`,
        method: "DELETE",
    })
}

//thêm sản phẩm
function addService() {
    return axios({
        url: urlApi,
        method: "POST",
        data: newProduct,
    })
}
//sửa sản phẩm (get details)
function editService(id) {
    return axios({
        url: `${urlApi}/${id}`,
        method: "GET",
    })
}
//update service
function updateService(id, data) {
    return axios({
        url: `${urlApi}/${id}`,
        method: "PUT",
        data: data,
    })
}
