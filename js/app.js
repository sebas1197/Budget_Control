
const list_budget = document.querySelector('#spendings ul');
const form_budget = document.querySelector('#form_budget');
const container = document.querySelector('.container');
const modal_budget = document.querySelector('#modal_budget');
const insert_budget = document.querySelector('#insert_budget');
const add_spending = document.querySelector('#add_spending');
const remaining = Number( document.querySelector('#remaining').value );

let budget;
let ui;

event_listeners();

function event_listeners(){
    form_budget.addEventListener('submit', ask_budget);
    add_spending.addEventListener('submit', insert_spending);
}

function ask_budget(e){
    e.preventDefault(); 

    modal_budget.style.display = 'none';
    container.style.display = 'block'; 

    budget = new Budget (insert_budget.value);
    ui = new UI (budget, list_budget);
}

function insert_spending(e){
    e.preventDefault();

    const name = document.querySelector('#spending').value;
    const quantity = Number( document.querySelector('#quantity').value );

    if( quantity > budget.remaining ){
        alert('Valor de gasto incorrecto');
    }else{
        const spending = { name, quantity, id: Date.now() };
        budget.new_spending( spending );
        
        ui.print_alert( 'alert-success', 'Agregado correctamente' );
        ui.add_to_list();
        budget.calculate_remaining();
        ui.update_remaining();

    }
    add_spending.reset();
}

























