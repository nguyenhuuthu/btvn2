// // 1.Nhập vào hai số a và b, và kiểm tra xem a có chia hết cho b hay khong
// let a = Number (prompt("nhap so thu nhat"));

// let b = Number (prompt("nhap so thu hai"));
// if (a%b===0){
//     console.log("so a chia het cho so b");
// }
// else
// console.log("so a khong chia het cho so b")

// //Bài 2: Nhập tuổi và in ra kết quả nếu tuổi học sinh đó không đủ điều kiện vào học lớp 10.
// let a = Number (prompt("nhap vao so tuoi"));
// if (a >= 15){
// console.log("hoc sinh do du tuoi hoc lop 10");}
// else 
// console.log("hoc sing do khong du tuoi hoc lop 10");


//3: Nhập một số nguyên bất kỳ và in kết quả ra màn hình để nói cho người dùng biết số đó là lớn hay nhỏ hơn 0
// let a = Number (Prompt("nhap mot so nguyen di"));
// if(a>0){
//     alert(`${a} lon hon 0`);
// }
// else
// alert(`${a} nho hon 0`);


// // 4: Nhập 3 số nguyên và tìm giá trị lớn nhất của ba số nguyên đó
//  let a = Number (prompt("nhập số"));
//  let b = Number (prompt("nhập số"));
//  let c = Number (prompt("nhập số"));
//  if (a>b && a>c){
//      console.log(`${a}là số max`);
//  }
//  else if (b>a && b>c){
//      console.log(`${b}là số max`);
//  }
//      else {
//          console.log(`${c}là số max`);
//      }


//5: Xếp hạng học lực của học sinh dựa trên các điểm bài kiểm tra, điểm
//thi giữa kỳ, điểm thi cuối kỳ

// let a = Number (prompt("nhập điểm kiểm tra"));
// let b = Number (prompt("nhập điểm thi giữa kì"));
// let c = Number (prompt("nhập điểm thi cuối kì"));
// let tbinh = Number (a + b + c)/3
// if (tbinh < 3.5){
//     alert(`${tbinh} hoc dot the`);
// }
// else if (tbinh > 3.5 && 5){
//     alert(`${tbinh} học cung tbinh thoi gà`);
// }
// else if (tbinh > 5 && 6.5){
//     alertc
// }
// else
//     alert(`${tbinh}  bạn học giỏi vậy`);



// 7 .Tính số cân nặng của cơ thể,
//Chỉ số khối cơ thể (Body mass index-BMI) là một thước đo sức khỏe
//dựa trên cân nặng và chiều cao. Nó được tính bằng cách lấy cân nặng
//đơn vị tính kilogam chia cho bình phương của chiều cao đơn vị tính mét.
//Công thức:
//bmi = weight / ( height ^ 2 )
//Chỉ số BMI đối với người trên 20 tuổi được phân loại và diễn giải theo
//bảng sau:Ví dụ: Một người có cân nặng là 65Kg và chiều cao là 1.75m thì BMI là
// 65 / 1.752 = 22.22. Chỉ số này nằm trong khoảng 18.5 đến 25.0 cho nên
//được phân loại là Normal (bình thường).
//Khối lệnh để phân loại chỉ số cơ thể:
//+ Nếu dưới 18: “Thiếu cân”
//+ Nếu dưới 25: “Bình thường”
// //+ Nếu dưới 30 cân: “Thừa cân”
// let a = Number (prompt("nhap can nang"));
// let b = Number (prompt("nhap chieu cao"));
// let bmi = a / b*b
// if (bmi < 18){
//     alert(`chỉ số bmi của bạn là ${bmi} bạn đang  thiếu cân` );
//  }
//  else if (bmi < 25) {
//      alert(`chỉ số bmi của bạn là ${bmi} bạn đang bình thường`);
//  }
 
//  else
//  alert(`chỉ số bmi của bạn là ${bmi} bạn đang bị thừa cân`);



//6: Tính hoa hồng nhận được tuỳ theo mức doanh số bán hàng
let a = Number (prompt("nhap vao doanh so"));
let b =(a*5)/100
