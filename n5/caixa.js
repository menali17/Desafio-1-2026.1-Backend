function checkCashRegister(price, cash, cid) {
  const valores = {
    "PENNY": 1,
    "NICKEL": 5,
    "DIME": 10,
    "QUARTER": 25,
    "ONE": 100,
    "FIVE": 500,
    "TEN": 1000,
    "TWENTY": 2000,
    "ONE HUNDRED": 10000
  };

  const centavos = valor => Math.round(valor * 100);

  let troco = centavos(cash - price);
  let total = centavos(cid.reduce((soma, item) => soma + item[1], 0));

  if (total < troco) return { status: "INSUFFICIENT_FUNDS", change: [] };
  if (total === troco) return { status: "CLOSED", change: cid };

  let resposta = [];

  for (let i = cid.length - 1; i >= 0; i--) {
    let nome = cid[i][0];
    let disponivel = centavos(cid[i][1]);
    let usado = 0;

    while (troco >= valores[nome] && disponivel >= valores[nome]) {
      troco -= valores[nome];
      disponivel -= valores[nome];
      usado += valores[nome];
    }

    if (usado > 0) resposta.push([nome, usado / 100]);
  }

  return troco === 0
    ? { status: "OPEN", change: resposta }
    : { status: "INSUFFICIENT_FUNDS", change: [] };
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);