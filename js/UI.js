'use strict';

class UI{

    constructor( Budget, list_budget, add_spending ){
        this.Budget = Budget;
        this.list_budget = list_budget;
        this.add_spending = add_spending;
        this.html_remaining = document.querySelector('#remaining');
        this.calculate();
    }    

    calculate(){
        document.querySelector('#total').textContent = this.Budget.budget;
        this.html_remaining.textContent = this.Budget.remaining;
    }

    print_alert( style_class, text ){
        const message = document.createElement('div');
        message.classList.add('text-center', 'alert');
        message.classList.add(style_class);
        message.textContent = text;

        document.querySelector('.primary').insertBefore(message, this.add_spending);
        setTimeout( () => message.remove(), 3000);
    }

    add_to_list(){

        this.clear_html();

        this.Budget.expenses.forEach( i => {
            const { quantity, name, id } = i;
            const new_spending = document.createElement('li');
           
            new_spending.className = 'list-group-item d-flex justify-content-between align-items-center';
            new_spending.dataset.id = id;
            new_spending.innerHTML = `${name} <span class='badge-primary badge-pill'> $${quantity} </span>`;           

            const btn_delete = document.createElement('button');
            btn_delete.classList.add( 'btn', 'btn-danger', 'delete-spending' );
            btn_delete.innerHTML = 'Eliminar &times';
            btn_delete.onclick = () => this.delete_spending( id );
            new_spending.appendChild( btn_delete );

            this.list_budget.appendChild( new_spending );
        });
    }

    clear_html(){
        while( this.list_budget.firstChild )
            list_budget.removeChild( list_budget.firstChild );
    }

    update_remaining(){
        const percent_50 = 0.5 * this.Budget.budget;
        const percent_25 = 0.25 * this.Budget.budget;

        if( this.Budget.remaining <= percent_50 && this.Budget.remaining > percent_25){
            this.html_remaining.parentNode.parentNode.className = 'alert alert-warning';
        
        }else if( this.Budget.remaining <= percent_25 ){
            this.html_remaining.parentNode.parentNode.className = 'alert alert-danger';

        }else{
            this.html_remaining.parentNode.parentNode.className = 'alert alert-success';
        }
        
        this.html_remaining.textContent = this.Budget.remaining;        
    }

    delete_spending( id ){
        this.Budget.delete_spending( id );
        this.add_to_list();
        this.update_remaining();
    }

}


















