readline = require('readline-sync'); // for user prompt
colours = require('colors'); // applies colour to specified font

var current_balance = 0; 
var change; 
var total_items = [];

// display balance
function display_balance() {
    console.log('\n' + 'Your new balance is:'.green.bold + ' £' + current_balance.toFixed(2) + '\n');
}

// product constructor 
function Item(number, product, price) {
    this.number = number;
    this.product = product;
    this.price = price;
}

// products -  objects created from constructor
var option1 = new Item('1', 'Chocolate Bar', 0.80);
var option2 = new Item('2', 'Soda Can', 0.70);
var option3 = new Item('3', 'Soda Bottle', 1.25);
var option4 = new Item('4', 'Crisps', 0.50);
var option5 = new Item('5', 'Cookies', 1.10);

// menu options
function display_menu() {
    
    console.log('*---------------------------*'.blue.bold);
    console.log('|                           |'.blue.bold);
    console.log('|      EHU Vending Ltd      |'.blue.bold);
    console.log('|                           |'.blue.bold);
    console.log('*---------------------------*'.blue.bold);
    console.log('*---------------------------*'.blue.bold);
    console.log('| Product          | Price  |'.blue.bold);
    console.log('*---------------------------*'.blue.bold);
    console.log('| 1. Chocolate Bar | £0.80  |'.blue.bold);
    console.log('| 2. Soda Can      | £0.70  |'.blue.bold);
    console.log('| 3. Soda Bottle   | £1.25  |'.blue.bold);
    console.log('| 4. Crisps        | £0.50  |'.blue.bold);
    console.log('| 5. Cookies       | £1.10  |'.blue.bold);
    console.log('*---------------------------*'.blue.bold);  
}

display_menu();

// add credits to machine
function add_credit() {

    // prompt user to add credit. Convert string to a floating number
    var insert_credit = parseFloat(readline.question('\n' + 'Please insert credit up to a maximum of £10: £'));
    console.clear();

    // if inserted credit is not a number or is less than 0.05 or greater than 10 then prompt user to add a numeric amount
    if (isNaN(insert_credit) || insert_credit == '' || insert_credit < 0.05 || insert_credit > 10) {
        console.log('\n' + 'Entry not recognised.'.red.bold);
        add_credit();
    } else {
        // otherwise current balance is updated to amount of credit inserted and displayed to user
        current_balance += insert_credit;
        console.clear();
        display_balance();
        select_product();
    }
}

add_credit();

// select product
function select_product() {
    display_menu();

    // prompt user to select a product
    var selection = readline.question('\n' + 'Please select a product from options 1-5 on the menu. If you wish to cancel please select 0: ');
    console.clear();
    // check to make sure user has input a number between 0 and 5. While this is not true, keep prompting user to do so.
    while (isNaN(selection) || selection == '' || selection < 0 || selection > 5) {
        console.log('\n' + 'Entry not recognised. You must input a number between 0 and 5.'.red.bold + '\n');
        display_menu();
        selection = readline.question('\n' + 'Please select a product from options 1-5. If you wish to cancel please select 0 : ');
        console.clear();
    }

    if (selection == 0) {
        give_change();
    }

    // product selection
    else if (selection == 1) {

        // check that current balance is enough to purchase product
        if (current_balance >= option1.price) {
            current_balance = current_balance - option1.price;
            console.log('You have selected ' + option1.product + '\n');
            items_purchased();
            display_balance();

            // ask user if they want to buy another product
            selection = readline.question('Would you like to purchase another product? Please enter y for yes or n for no: ');

            // if user input is not n or y then prompt user to input correct command
            while (selection != 'n' && selection !== 'y' || !isNaN(selection)) { 
                console.clear();
                selection = readline.question('\n' + 'Incorrect command. Please enter y for yes or n for no: '.red.bold);
            } 
            // if the answer is yes then select product
            if (selection == 'y') {
                console.clear();
                select_product(); 
            } 
            // if the answer is no then give user their change
            else if (selection == 'n') {
                give_change();
            }
          // more credit needs to be inserted if balance is less than product price 
        } else {
            console.log('You have insufficient funds. The price of this product is '.red.bold + '£' + option1.price + ' and your current balance is '.red.bold + '£' + current_balance);
            console.log('\n' + 'Please add more credit if you would like to continue with your purchase.');
            add_credit();
        }
    }

    // product selection
    else if (selection == 2) {

        // check that current balance is enough to purchase product
        if (current_balance >= option2.price) {
            current_balance = current_balance - option2.price;
            console.log('You have selected ' + option2.product + '\n');
            items_purchased();
            display_balance();

            // ask user if they want to buy another product
            selection = readline.question('Would you like to purchase another product? Please enter y for yes or n for no: ');

            // if user input is not n or y then prompt user to input correct command
            while (selection != 'n' && selection !== 'y' || !isNaN(selection)) { 
                console.clear();
                selection = readline.question('\n' + 'Incorrect command. Please enter y for yes or n for no: '.red.bold);
            } 
            // if the answer is yes then select product
            if (selection == 'y') {
                console.clear();
                select_product(); 
            } 
            // if the answer is no then give user their change
            else if (selection == 'n') {
                give_change();
            }
          // more credit needs to be inserted if balance is less than product price 
        } else {
            console.log('You have insufficient funds. The price of this product is '.red.bold + '£' + option2.price + ' and your current balance is '.red.bold + '£' + current_balance);
            console.log('\n' + 'Please add more credit if you would like to continue with your purchase.');
            add_credit();
        }
    }

    // product selection
    else if (selection == 3) {

        // check that current balance is enough to purchase product
        if (current_balance >= option3.price) {
            current_balance = current_balance - option3.price;
            console.log('You have selected ' + option3.product + '\n');
            items_purchased();
            display_balance();

            // ask user if they want to buy another product
            selection = readline.question('Would you like to purchase another product? Please enter y for yes or n for no: ');

            // if user input is not n or y then prompt user to input correct command
            while (selection != 'n' && selection !== 'y' || !isNaN(selection)) { 
                console.clear();
                selection = readline.question('\n' + 'Incorrect command. Please enter y for yes or n for no: '.red.bold);
            } 
            // if the answer is yes then select product
            if (selection == 'y') {
                console.clear();
                select_product(); 
            } 
            // if the answer is no then give user their change
            else if (selection == 'n') {
                give_change();
            }
          // more credit needs to be inserted if balance is less than product price 
        } else {
            console.log('You have insufficient funds. The price of this product is '.red.bold + '£' + option3.price + ' and your current balance is '.red.bold + '£' + current_balance);
            console.log('\n' + 'Please add more credit if you would like to continue with your purchase.');
            add_credit();
        }
    }

    // product selection
    else if (selection == 4) {

        // check that current balance is enough to purchase product
        if (current_balance >= option4.price) {
            current_balance = current_balance - option4.price;
            console.log('You have selected ' + option4.product + '\n');
            items_purchased();
            display_balance();

            // ask user if they want to buy another product
            selection = readline.question('Would you like to purchase another product? Please enter y for yes or n for no: ');

            // if user input is not n or y then prompt user to input correct command
            while (selection != 'n' && selection !== 'y' || !isNaN(selection)) { 
                console.clear();
                selection = readline.question('\n' + 'Incorrect command. Please enter y for yes or n for no: '.red.bold);
            } 
            // if the answer is yes then select product
            if (selection == 'y') {
                console.clear();
                select_product(); 
            } 
            // if the answer is no then give user their change
            else if (selection == 'n') {
                give_change();
            }
          // more credit needs to be inserted if balance is less than product price 
        } else {
            console.log('You have insufficient funds. The price of this product is '.red.bold + '£' + option4.price + ' and your current balance is '.red.bold + '£' + current_balance);
            console.log('\n' + 'Please add more credit if you would like to continue with your purchase.');
            add_credit();
        }
    }

    // product selection
    else if (selection == 5) {

        // check that current balance is enough to purchase product
        if (current_balance >= option5.price) {
            current_balance = current_balance - option5.price;
            console.log('You have selected ' + option5.product + '\n');
            items_purchased();
            display_balance();

            // ask user if they want to buy another product
            selection = readline.question('Would you like to purchase another product? Please enter y for yes or n for no: ');

            // if user input is not n or y then prompt user to input correct command
            while (selection != 'n' && selection !== 'y' || !isNaN(selection)) { 
                console.clear();
                selection = readline.question('\n' + 'Incorrect command. Please enter y for yes or n for no: '.red.bold);
            } 
            // if the answer is yes then select product
            if (selection == 'y') {
                console.clear();
                select_product(); 
            } 
            // if the answer is no then give user their change
            else if (selection == 'n') {
                give_change();
            }
          // more credit needs to be inserted if balance is less than product price 
        } else {
            console.log('You have insufficient funds. The price of this product is '.red.bold + '£' + option5.price + ' and your current balance is '.red.bold + '£' + current_balance);
            console.log('\n' + 'Please add more credit if you would like to continue with your purchase.');
            add_credit();
        }
    }
    
}

// sum number of items purchased and store inside an array
function items_purchased() {
    basket = total_items.push(Item.product);
    console.log('Your basket contains ' + basket + ' item(s).');
}

// give user their change if they have cancelled/finished their purchase
function give_change() {
    console.clear();
    change = current_balance.toFixed(2);
    console.log('\n' + 'Your change is:'.green.bold + ' £' + change);
    console.log('\n' + 'Please collect your change. Thank you' + '\n');
}