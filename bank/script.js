let n;
let k;
let card1 = {
  number: 1873598218,
  bank: "Privat",
  name: "Вася",
  surname: "Васин",
  code: 5829,
  account: 5000,
};

let card2 = {
  number: 2859282912,
  bank: "Ukr",
  name: "Петя",
  surname: "Петин",
  code: 9362,
  account: 3850,
};

let card3 = {
  number: 4895928292,
  bank: "Mono",
  name: "Петя",
  surname: "Васин",
  code: 1853,
  account: 11245,
};

// let bank = [card1 , card2];

let cashMashine1 = {
  getMoney: function (card, money , code) {
    code = prompt("Введите код:");
    while (true) {
    if(card.code == code) {
      alert("Код верный");
    }
    else {
      alert("Код не верный, ваша карта заблокирована");
      break;
    }
    money = prompt("Введите кол-во денег для снятия:");
    while (money > card.account) {
      alert("Невозможно снять данную сумму, так как она превышает ваш баланс на карте. Но если вы хотите оформить кредит, то можете связаться с нашим оператором.");
      money = prompt("Введите кол-во денег для снятия:");
    }
    document.write("У вас на счету: " + card.account + "$" + "<br>");
    card.account -= money;
    document.write("Вы сняли: " + money + "$" + "<br>");
    document.write("У вас осталось: " + card.account + "$");
    break;
  }
  },
  // checkBankAccount: function (card) {
  //   for (i = 0; i < bank.length; i++) {
  //     for (const key in bank[i]) {
  //       if (bank[i][key] !== card[key]) {
  //         i++;
  //         alert("Ошибка, бракованая карта");
  //         break;
  //       }
  //       else {
  //         i++;
  //         cashMashine1.getMoney(card,n,k);
  //         break;
  //       }
  //     }
  //   }
  // },
};
var a = prompt("Введите карту которой желаете воспользоваться:");
switch (a) {
  case 'card1':
     cashMashine1.getMoney(card1,n,k);
    break;
    case 'card2':
       cashMashine1.getMoney(card2,n,k);
    break;
    case 'card3':
     cashMashine1.getMoney(card3,n,k);
}