
let money,
 	name, 
 	time,
 	price;
function start(){
	money = prompt("Ваш бюджет?");
	while(isNaN(money) || money == "" || money == null){
		money = prompt("Ваш бюджет?");
	}
	name = prompt("Название вашего магазина?","").toUpperCase();
	time = 21;
	price = 500;

}

let mainList = {
	budget : money,
	shopName : name,
	shopGoods: [],
	employers: {},
	shopItems: [],
	open: false,
	discount: false,
	chooseGoods: function chooseGoods() {
	for (let i = 0; i < 3; i++){
		let a = prompt("Какой тип товаров будем продавать?","");

		 if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50){
		 	console.log("Все верно");
			mainList.shopGoods[i] = a;
		 } else {
				i = i - 1;
		 	}
		}
	},
	showShopItems: function showShopItems(){
		mainList.shopGoods.forEach(function(item,i,arr){
			alert("У нас вы можете купить:"+i+"-"+item);
		});

	},
	workTime: function workTime(time) {
		if (time < 0) {
			console.log("Такого не может быть!");
		}else if(time > 8 && time < 20) {
			console.log("Время работать");
			mainList.open = true;
		}else if (time < 24){
			console.log('Уже слишком поздно!');
		}else{
			console.log('В сутках только 24 часа');
			}
	},
	dayBudget: function dayBudget()
	{
		alert("Бюджет на день равен"+" "+(mainList.budget /30));
	},
	makeDiscount: function makeDiscount (){
		if(mainList.discount == true){
			price = price*0.8;
		}
	},
	GetEmployers: function GetEmployers(){
		for(i = 0; i<4; i++){

			let name= prompt("Имя сотрудника","");
			mainList.employers[i] = name;
			console.log(mainList.employers)
		}
	},
	chooseShopItem: function chooseShopItem(){
		let items = prompt("Перечислите через запятую ваши товары ","")
		mainList.shopItems = items.split(",");
		mainList.shopItems.push((prompt("Подождите, ещё ", "")));
		mainList.shopItems.sort();
	}	
}
for (let key in mainList){
	console.log("Наш магазин включает в себя "+key);
}
console.log(mainList);