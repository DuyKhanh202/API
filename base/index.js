// đồng bộ và bất đồng bộ 
// đồng bộ: chạy từ trên xuống dưới
// bất đồng bộ: chạy theo quy tắc => đợi những dòng code đồng bộ chạy xong thì mới chạy


// đồng bộ 
console.log(0);
console.log(1);
console.log(2);


// setTimeout(p1,p2) : hàm bất đồng bộ / có chức năng delay thời gian chạy của 1 hàm 
// p1: hàm cần chạy, p2: thời gian delay (ms)
setTimeout(function() {
  console.log(3);
}, 5000);

console.log(4);

// sử dụng axios để gọi api từ sever
// url của api
//param là tham số không cố định

var urlApi = "https://66a7892853c13f22a3d01ae2.mockapi.io/product";

// axios({
//     url: urlApi,
//     method: "GET",
//   })
//   .then(function (res) {
//     // thành công
//     console.log(res);
//   })
//   .catch(function (err) {
//     // thất bại
//     console.log(err);
//   });
  
//khi gọi api thì sẽ trả về 1 promise / có 2 trạng thái: resolve hoặc reject (thành công hoặc thất bại)
//promise có 3 trạng thái : pending đang chờ => resolve (thành công) => reject (thất bại)

axios.get('https://66a7892853c13f22a3d01ae2.mockapi.io/product')
  .then(function (response) {
    // Xử lý thành công
    console.log(response.data);
  })
  .catch(function (error) {
    // Xử lý lỗi
    console.error('Error:', error);
  });
