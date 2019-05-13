var budgetController = (function() {
	//we need a place to store our data. so we're going to use Function Contructors( Classes )
	//Since it's a 'CLASS', it keeps track of all the incomes and expenses created.

	var Expense = function(id, description, val) {
		this.id = id;
		this.description = description;
		this.val = val;
	};

	var Income = function(id, description, val) {
		this.id = id;
		this.description = description;
		this.val = val;
	};

	// since we need a place to store he data received from the user, we can use a bunch 
	 // of lists..but why have multiple Data-Structures?...just use one! ( so i commented out the
	 // below variables):
	//                   var allExpenses = [];
	//					 var allIncomes = [];

	//so we can do this:
				//	var data = {
					//	allExpenses: [],
					//	allIncomes: [],
					//	totalExpenses: 0;
					//	};
			//	OR WE CAN BREAK IT DOWN EVEN FURTHER


//CONTINUE HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	var data = {
		allData: {exp: [],inc: []},
		totals: {exp: 0, inc: 0}
	};
	return { 
		getData: function(type, desc, val) {
			var newItem, id;

			// Gets the last item in the list.
			getLastItem = data.allData[type][data.allData[type].length + 1]; //length of list minus one
			
			ID = getLastItem++;

			if (type === 'inc') {newItem = new Income(ID, desc, val);
			 
			}
			else if (type === 'exp') {newItem = new Expense(ID, desc, val);
			 
			}

			data.allData[type].push(newItem);
			return newItem; // exposes newItem to Global so other modules can access.
		}
	};
})();


var dataController = (function() {


})();


var uiController = (function() {

	var domStrings = {
		inputType: '.add__type',
		inputdesc: '.add__description',
		inputVal: '.add__value',
		inputAddBtn: '.add__btn'
	};
	return { 
		getInput: function() {
			return {
				//we need to return these values at the same time..put it in an object.				
				inType: document.querySelector(domStrings.inputType).value, // will be either 'inc' or 'exp'
				description: document.querySelector(domStrings.inputdesc).value,
				value: document.querySelector(domStrings.inputVal).value,
				ab: domStrings.inputAddBtn
			};
		},
		exportDomStrings: function() {
			return {
				doms: domStrings.inputAddBtn
			};
		}
	};
})();


// Global app Controller
var  appController = (function(budgCtrl, uiCtrl) {

	var getDoms = uiController.exportDomStrings().doms;

	var getEventListeners = function() {

		// We also want the value to be coolected if someone hits the enter=key
		// they shouldn't only have to hit the button, whic is call a 'KeyPress Event'
		// we're adding the keypress to the global-scope because it should happen
		// on any part of the code. //'e' means 'event'
		// the 'which'method is for older browsers that dont have 'keyCode'propery.

		document.querySelector(getDoms).addEventListener('click', crtlAddItem);  
		document.addEventListener('keypress', function(e) {  
			if (e.keyCode === 13 || e.which === 13) { 
				crtlAddItem();
			}
		});
	};
		
	var crtlAddItem = function() {

		//1. Get the filed input data.
			var i = uiController.getInput().inType;
			var d = uiController.getInput().description;
			var v = uiController.getInput().value;
			budgCtrl.getData(i,d,v)
			

		//2. add item to budget controler
		//3. add item to user interface.
		//4. calculate the budget.
		//5. display the budget.
		
	};
	return {
		init: function() {
			getEventListeners();
		}
	};
})(budgetController, uiController);

appController.init();
