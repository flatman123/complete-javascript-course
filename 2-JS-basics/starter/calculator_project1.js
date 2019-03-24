var totalTips = [];
var tipAmount = [];

var johnTips = {
		bill: [124, 48, 268, 180, 42],
		percent: [.20, .50, .15, .10],
		tipCalculator: function(amt, percentage){

			// Calculate and append the lists for the tipstotal and tips plus bill
			tipAmount.push(amt * percentage);
			totalTips.push(amt + (percentage * amt));
		},
		calculate: function (){
			
			// Calculate the total tips each amount will incur
			for (i = 0; i < this.bill.length; i++){
				if (this.bill[i] < 50){
					this.tipCalculator(this.bill[i], this.percent[0]);
				} else if (this.bill[i] >= 50 && this.bill < 200){
					this.tipCalculator(this.bill[i], this.percent[2]);
				} else if (this.bill[i] > 200){
					this.tipCalculator(this.bill[i], this.percent[3]);
				} else {
					this.tipCalculator(this.bill[i], .01);
				}
			}
		return totalTips;
		}
	}


function averageTips(tips){

	//Get the average tips paid for a list of bills
	var amt = 0;
	for (i = 0; i < tips.length; i++){
		amt = amt + tips[i];
	return (amt / tips.length);
}
}

console.log(johnTips);
console.log(johnTips.calculate());
console.log(tipAmount);
console.log(averageTips(totalTips));
