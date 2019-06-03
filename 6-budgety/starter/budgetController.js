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

	var data = {
		allData: {
			exp: [],
			inc: []
		},
		totals: {
			exp: 0,
			inc: 0
		},
		bugdet: 0,
		percentage: -1
	};

	var calculateTotal = function(type) {
		var sum, tots;
		sum = 0;

		data.allData[type].forEach(function(e) {
			sum += e.val;
			data.totals[type] = sum;
			return tots;
		});
		};

	return { 
		getData: function(type, desc, val) {
		var newItem, ID;
		
		if (data.allData[type].length > 0) {

			ID = data.allData[type][data.allData[type].length -1].id + 1;
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
		},
		calculateBudget : function() {
			calculateTotal('exp');
			calculateTotal('inc');			

			// Calculate the budget
			data.budget = data.totals.inc - data.totals.exp;

			//Calculate the percentage of income that we spent
			if (data.totals.inc > 0) {
				//Calculate the percentage
				data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
			} else {
				data.percentage = -1;
			}

		},
		getBudget: function() {
			return {
				budget: data.budget,
				totalInc: data.totals.inc,
				totalExp: data.totals.exp,
				percentage: data.percentage
			}
		},
		testPublicAccess: function() {
			console.log(data);
		}
	};
})();


var uiController = (function() {
	var domStrings;
	
	domStrings = {
		inputType: '.add__type',
		inputdesc: '.add__description',
		inputVal: '.add__value',
		inputAddBtn: '.add__btn',
		incomeContainer: '.income__list',
		expenseContainer: '.expenses__list',
		displayExp: '.budget__expenses--value',
		displayInc: '.budget__income--value',
		container: '.container clearfix'

	};

	return { 
		getInput: function() {
			return {
				//we need to return these values at the same time..put it in an object.				
				inType: document.querySelector(domStrings.inputType).value, // will be either 'inc' or 'exp'
				description: document.querySelector(domStrings.inputdesc).value,
				value: parseFloat(document.querySelector(domStrings.inputVal).value)
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

			html = '<div class="item clearfix" id="income-%id%"> \
			     	<div class="item__description">%description%</div> \
			     	<div class="right clearfix"><div class="item__value">+ %val%</div>\
			     	<div class="item__delete"><button class="item__delete--btn"> \
			     	<i class="ion-ios-close-outline"></i></button></div></div></div>';

			} else if (type === 'exp') {
				element = domStrings.expenseContainer;

			html =	'<div class="item clearfix" id="expense-%id%"> \
                    <div class="item__description">%description%</div> \
                    <div class="right clearfix"><div class="item__value">- %val%</div> \
                    <div class="item__percentage">21%</div><div class="item__delete"> \
                    <button class="item__delete--btn"><i class="ion-ios-close-outline"></i> \
                    </button></div></div></div>';
			};

			// Replace placeholder with object.value
			newHtml = html.replace('%id%', obj.id);
			newHtml = newHtml.replace('%description%', obj.description);
			newHtml = newHtml.replace('%val%', obj.val);

			// Insert  changes into HTML
			document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
			return newHtml;
		},
		deleteItem: function(obj,type) {
			var dInc;

		},
		clearFields: function() {
			var fieldsArray, fields;

			fields = document.querySelectorAll(domStrings.inputdesc + ',' + domStrings.inputVal);

			fieldsArray = Array.prototype.slice.call(fields);

			fieldsArray.forEach(function(e,i,a) {
				e.value = '';
			});
		},

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
		
		//Add Item
		document.addEventListener('keypress', function(e) {  
			if (e.keyCode === 13 || e.which === 13) { 
				crtlAddItem();
			}
		});

		//Delete Item
		document.querySelector(getDoms.container).addEventListener('click', function(e){
			const dInc
		});

	};

	var updateBudget = function() {
		var budget;
		//1. Calculate the Budget
		budgCtrl.calculateBudget();

		//2. Return the budget
		budget = budgCtrl.getBudget();

		//3. Display the budget on the ui
		//console.log(budget);
		console.log(budget);
	};

	var crtlAddItem = function() {
		var t,d,v, newItem, budget;
		//1. Get the filed input data.
		t = uiController.getInput().inType;
		d = uiController.getInput().description;
		v = uiController.getInput().value;

		if (d !== '' && !isNaN(v)) {

			//2. Add New item to budget controler
			newItem = budgCtrl.getData(t,d,v);
			console.log(newItem)
						

			//3. add item to user interface.
			var output = uiCtrl.addListItem(newItem,t);
			
			//4. Clear Fields
			uiCtrl.clearFields();
			
			//5. Return the budget.
			updateBudget();

			//6. Display Budget
			

		} else if (d !== '' && isNaN(v)) {
			alert('Please Enter a Value amount!');
		} else if (d === '' && !isNaN(v)) {
			alert('Please Enter a Description!');
		} else {
			alert('Please Enter a Description and a Value Amount!');
		}

		//6. Display the budget

		//delete Item
		
		
	};
	return {
		init: function() {
			getEventListeners();
		}
	};
})(budgetController, uiController);

appController.init();