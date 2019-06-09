var budgetController = (function() {
	'use strict';
	//we need a place to store our data. so we're going to use Function Contructors( Classes )
	//Since it's a 'CLASS', it keeps track of all the incomes and expenses created.

	var Expense = function(id, description, val) {
		this.id = id;
		this.description = description;
		this.val = val;
		this.percentage = -1;
	};

	Expense.prototype.calcPercent = function(totalIncome) {
		if (totalIncome > 0) {
			this.percentage = Math.round((this.value / totalIncome)) * 100;
		} else {
			this.percentage = -1;
		}		
	};

	Expense.prototype.getPercent = function() {
		return this.percentage;
	}

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

		deleteItem: function(type, id) {
			var ids, index;
			ids = data.allData[type].map(function(args) {
				return args.id;
			});
			index = ids.indexOf(id);

			if (index !== -1) {
				data.allData[type].splice(index, 1);
			}
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

		calculatePercentages: function() {
			data.allData.exp.forEach(function(current) {
				current.calcPercent(data.totals.inc);
			});
		},

		getPercentages: function() {
			var allPerc = data.allData.exp.map(function(current) {
				return current.getPercent(data.totals.inc);
			});
			return allPerc;
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
	'use strict';
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
		displayPercent: '.budget__expenses--percentage',
		displayBudget: '.budget__value',
		container: '.container'
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
				doms: domStrings.inputAddBtn,
				delBtn: domStrings.container
			};
		},

		addListItem: function(obj, type) {
			var html, newHtml, element;

			// create HTML string with placeholder text.
			
			if (type === 'inc') {
				element = domStrings.incomeContainer;

			html = '<div class="item clearfix" id="inc-%id%"> \
			     	<div class="item__description">%description%</div> \
			     	<div class="right clearfix"><div class="item__value">+ %val%</div>\
			     	<div class="item__delete"><button class="item__delete--btn"> \
			     	<i class="ion-ios-close-outline"></i></button></div></div></div>';

			} else if (type === 'exp') {
				element = domStrings.expenseContainer;

			html =	'<div class="item clearfix" id="exp-%id%"> \
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

		deleteListItem: function(classSelectorItem) {
			// We can't remove an element in js, only the child. however
				//we have to know the parent to remove the child.

			//here we will remove the child.
			let parent = document.getElementById(classSelectorItem).parentNode;
			let child = document.getElementById(classSelectorItem);
			let rmvChild = parent.removeChild(child);

		},

		zeroOut: function() {
			document.querySelector(domStrings.displayInc).textContent = '0';
			document.querySelector(domStrings.displayExp).textContent = '0';
			document.querySelector(domStrings.displayBudget).textContent = '0';
			document.querySelector(domStrings.displayPercent).textContent = '---';
		},

		clearFields: function() {
			var fieldsArray, fields;

			fields = document.querySelectorAll(domStrings.inputdesc + ',' + domStrings.inputVal);

			fieldsArray = Array.prototype.slice.call(fields);

			fieldsArray.forEach(function(e,i,a) {
				e.value = '';
			});
			document.querySelector(domStrings.inputdesc).focus();
		},
		displayToUi: function(obj) {
			document.querySelector(domStrings.displayInc).textContent = '+ ' + obj.totalInc;
			document.querySelector(domStrings.displayExp).textContent = '- ' + obj.totalExp;
			document.querySelector(domStrings.displayBudget).textContent = '+ ' + obj.budget;

			if (obj.percentage === 0) {
				document.querySelector(domStrings.displayPercent).textContent = '---';
			} else {
				document.querySelector(domStrings.displayPercent).textContent = obj.percentage + '%';
			}
		},
		}
})();

// Global app Controller
var  appController = (function(budgCtrl, uiCtrl) {
	'use strict';
	var getDoms = uiController.exportDomStrings();

	var getEventListeners = function() {
		uiCtrl.zeroOut();
		// We also want the value to be coolected if someone hits the enter=key
		// they shouldn't only have to hit the button, whic is call a 'KeyPress Event'
		// we're adding the keypress to the global-scope because it should happen
		// on any part of the code. //'e' means 'event'
		// the 'which'method is for older browsers that dont have 'keyCode'propery.

		document.querySelector(getDoms.doms).addEventListener('click', crtlAddItem);  
		//Add Item

		document.querySelector(getDoms.delBtn).addEventListener('click', crtldeleteItem);

		document.addEventListener('keypress', function(e) {  
			if (e.keyCode === 13 || e.which === 13) { 
				crtlAddItem();
			}
		});
	};

	var updateBudget = function() {
		var budget;
		//1. Calculate the Budget
		budgCtrl.calculateBudget();

		//2. Return the budget
		budget = budgCtrl.getBudget();

		//3. Display the budget on the ui
		uiCtrl.displayToUi(budget);
		};

	var updatePercentage = function() {

		//1. calculate  percentages
		budgCtrl.calculatePercentages();

		//2. read percentages from budget controller.
		var percentages = budgCtrl.getPercentages();

		//3 update the ui with the new percentages.
		console.log(percentages);

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
			
			//3. add item to user interface.
			var output = uiCtrl.addListItem(newItem,t);
			
			//4. Clear Fields
			uiCtrl.clearFields();
					
			//5. Return the budget.
			updateBudget();

			//6. update Display

		} else if (d !== '' && isNaN(v)) {
			alert('Please Enter a Value amount!');
		} else if (d === '' && !isNaN(v)) {
			alert('Please Enter a Description!');
		} else {
			alert('Please Enter a Description and a Value Amount!');
		}
		updatePercentage();
	};

	var crtldeleteItem = function(event) {
		var itemID, ID, type, splitID;
		// Code for deleting a button
		itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
		
		if (itemID) {

			splitID = itemID.split('-');
			type = splitID[0];
			ID = parseInt(splitID[1]);

			//1. delete item from data structure
			
			budgCtrl.deleteItem(type, ID);

			//2. Delete the item from the UI
			uiCtrl.deleteListItem(itemID);

			//3. Update and show the new budget.
			updateBudget();

			//4. Calculate and update percentages.
		}
	};


	return {
		init: function() {
			getEventListeners();

		}
	};
})(budgetController, uiController);

appController.init();