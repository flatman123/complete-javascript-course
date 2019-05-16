var budgetController = (function() {
	//we need a place to store our data. so we're going to use Function Contructors( Classes )
	//Since it's a 'CLASS', it keeps track of all the incomes and expenses created.

	var Expense = function(eipId, description, val) {
		this.eipId = eipId;
		this.description = description;
		this.val = val;
	};

	var Income = function(eipId, description, val) {
		this.eipId = eipId;
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

	var data = {
		allData: {exp: [],inc: []},
		totals: {exp: 0, inc: 0}
	};
	return { 
		getData: function(type, desc, val) {
		var newItem, ID;
		
		if (data.allData[type].length > 0) {
			ID = data.allData[type][data.allData[type].length - 1].eipId + 1;
		} else {
			ID = 0;
		}
		if (type === 'inc') {
		 	newItem = new Income(ID, desc, val);
		 } else if (type === 'exp') {
		 	newItem = new Expense(ID, desc, val);
		 }
		 data.allData[type].push(newItem);
		 return newItem;
		}
	};
})();


var dataController = (function() {

})();



var uiController = (function() {
	var domStrings;
	
	domStrings = {
		inputType: '.add__type',
		inputdesc: '.add__description',
		inputVal: '.add__value',
		inputAddBtn: '.add__btn',
		incomeContainer: '.income__list',
		expenseContainer: '.expenses__list'
	};

	return { 
		getInput: function() {
			return {
				//we need to return these values at the same time..put it in an object.				
				inType: document.querySelector(domStrings.inputType).value, // will be either 'inc' or 'exp'
				description: document.querySelector(domStrings.inputdesc).value,
				value: document.querySelector(domStrings.inputVal).value
			};
		},
		exportDomStrings: function() {
			return {
				doms: domStrings.inputAddBtn
			};
		},
		addListItem: function(obj, type) {
			var html, newHtml, element;

			// create HTML string with placeholder text.
			
			if (type === 'inc') {
				element = domStrings.incomeContainer;

			html = '<div class="item clearfix" id="income-%eipId%"> \
			     	<div class="item__description">%description%</div> \
			     	<div class="right clearfix"><div class="item__value">%val%</div>\
			     	<div class="item__delete"><button class="item__delete--btn"> \
			     	<i class="ion-ios-close-outline"></i></button></div></div></div>';

			} else if (type === 'exp') {
				element = domStrings.expenseContainer;

			     	'<div class="item clearfix" id="expense-%eipId%"> \
                    <div class="item__description">%description%</div> \
                    <div class="right clearfix"><div class="item__value">%val%</div> \
                    <div class="item__percentage">21%</div><div class="item__delete"> \
                    <button class="item__delete--btn"><i class="ion-ios-close-outline"></i> \
                    </button></div></div></div>';
			};

			// Replace placeholder with object.value
			newHtml = html.replace('%eipId%', obj.eipId);
			newHtml = newHtml.replace('%description%', obj.description);
			newHtml = newHtml.replace('%val%', obj.val);

			// Insert  changes into HTML
			document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
			return newHtml;
		}
		}
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
		var t,d,v, newItem;
		//1. Get the filed input data.
		t = uiController.getInput().inType;
		d = uiController.getInput().description;
		v = uiController.getInput().value;
			
		//2. Add New item to budget controler
		newItem = budgCtrl.getData(t,d,v);

		//3. add item to user interface.
		var output = uiCtrl.addListItem(newItem,t);
		console.log(output);

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