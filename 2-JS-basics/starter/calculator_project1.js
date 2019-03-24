/*John and his fam went to 5 differtn restuarants. the bills were $124, $48,$268,$180 and $42
He likes to tip 20% when less than $50, 15% when between $50 and $200, and 10% when more than $200*/

// CALCULATING JOHN'S TIPS

var johnTips = {
		totalTips: [],
		tipAmount:[],
		bill: [124, 48, 268, 180, 42],
		percent: [.20, .50, .15, .10],
		tipCalculator: function(amt, percentage){

			// Calculate and append the lists for the tipstotal and tips plus bill
			this.tipAmount.push(amt * percentage);
			this.totalTips.push(amt + (percentage * amt));
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
		return this.totalTips;
		}
	}



// CALCULATING MARK'S TIPS

var marksTips = {
		totalTips: [],
		tipAmount:[],
		bill: [20, 448, 98, 1180, 142],
		percent: [.20, .50, .15, .10],
		tipCalculator: function(amt, percentage){

			// Calculate and append the lists for the tipstotal and tips plus bill
			this.tipAmount.push(amt * percentage);
			this.totalTips.push(amt + (percentage * amt));
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
		return this.totalTips;
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
console.log(johnTips.tipAmount);

console.log(marksTips);
console.log(marksTips.calculate());
console.log(marksTips.tipAmount);


console.log(averageTips(johnTips.totalTips));
console.log(averageTips(marksTips.totalTips));
