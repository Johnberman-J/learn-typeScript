var Shoes;
(function (Shoes) {
    Shoes[Shoes["Nike"] = 0] = "Nike";
    Shoes[Shoes["Adidas"] = 1] = "Adidas";
    Shoes[Shoes["Converse"] = 2] = "Converse";
})(Shoes || (Shoes = {}));
var myShoes = Shoes.Converse;
console.log(myShoes); // 이때 myShoes의 값은 2가 출력됨
