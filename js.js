
var location1 = Math.floor(Math.random() *5);
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
var arrayHit = [];
while (isSunk == false) {
	guess = prompt("Привет!!! Ты попал на Морской Бой! У тебя 7 ячеек по горизонтали (от 0 до 6), любые 3 из них - это авианосец врага. Уничтожь его!!! Стреляй! Введи число от 0 до 6");
	if (guess <0 || guess>6) {
	alert("Надо вводить от 0 до 6!!!!");
}
	
	else {
	guesses = guesses + 1;
	if (arrayHit.indexOf(guess) == -1) {
	if (guess == location1 || guess == location2 || guess == location3) {
    arrayHit.push(guess);
	alert("Попал");
    hits = hits + 1;
	if (hits == 3) {
	isSunk = true;
	alert("Убит");
	}  
	} else { alert("Промазал");
	}
		} else {
	alert("Cюда ты уже стрелял");

     }

	}
	}


var stats = "Ты справился за " + guesses + " попытки. Твоя точность равна " + (3 / guesses);
alert(stats);


