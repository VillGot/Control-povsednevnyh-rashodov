var ctx = document.getElementById("myChart");

let db = {
	"groups": ["Продукты", "Рестораны", "Электроника", "Мебель"],
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
		  "item-name": "Хлеб",
		  "cost": 32.90,
		  "group": 0,
		  "necessary": true
		},
		{"date": "12.02.2022",
		 "time": "14:28",
		 "item-name": "Соль",
		 "cost": 7.99,
		 "group": 0,
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

		}]
	}
}
//var db = ...


	var myChart = new Chart(ctx, {
	type: 'bar',
	data: {
		labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
		datasets: [{
			label: 'Расходы',

			data: [12, 19, 3, 5, 2],
			backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(153, 102, 255, 0.2)',
				'rgba(255, 159, 64, 0.2)', 
				rgba()
			],
			borderColor: [
				'rgba(255,99,132,1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)'
			],
			borderWidth: 1
		}]
	},
	options: {
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero:true
				}
			}]
		}
	}
	});