var ctx = document.getElementById("myChart");

let db = {
	"groups": [{"name": "Продукты", "bgColor":"rgba(255, 99, 132, 0.2)", "borderColor": "rgba(255,99,132,1)"}, {"name": "Рестораны", "bgColor":"rgba(153, 102, 255, 0.2)", "borderColor": "rgba(153, 102, 255, 1)"}],
	"users": [
	  {
		"name": "Efim",
		"email": "efim-sys@yandex.ru",
		"password": "H895R$EV12$",
		"reg-date": "12.02.2022",
		"last-ip": "54.133.118.96",
		"balance": 1789.23,
		"expenses": [
		 {"date": "12.02.2022",
		  "time": "14:28",
		  "itemName": "Хлеб",
		  "cost": 32.90,
		  "group": 0,
		  "necessary": true
		},
		{"date": "12.02.2022",
		 "time": "14:28",
		 "itemName": "Соль",
		 "cost": 7.99,
		 "group": 1,
		 "necessary": false
		 }
	   ],
	   "earnings":[
		 {"date": "12.02.2022",
		  "time": "14:28",
		  "name": "Зарплата",
		  "amount": 2125.98
		 }
	   ]
	 }
	]
  }


const objToChar = {
	type: 'bar',
	data: {
		labels: [],
		datasets: [{
			label: 'Расходы',
			data: [], 
			backgroundColor: [],
			borderColor: [],
			borderWidth: 1
		}]
	}
}

//var db = ...

//этот код распарсивает db и помещает нужные данные в объект диаграммы
for(let i = 0; i<db.users[0].expenses.length; i+=1){
	objToChar.data.labels.push(db.users[0].expenses[i].itemName + ' ' + db.users[0].expenses[i].date + ' ' + db.users[0].expenses[i].time)
	objToChar.data.datasets[0].backgroundColor.push(db.groups[db.users[0].expenses[i].group].bgColor)
	objToChar.data.datasets[0].borderColor.push(db.groups[db.users[0].expenses[i].group].borderColor)
	objToChar.data.datasets[0].data.push(db.users[0].expenses[i].cost)
}  

	var myChart = new Chart(ctx, objToChar);