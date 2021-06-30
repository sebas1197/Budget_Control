'use strict';


class Budget{

    constructor( budget ){
        this.budget = Number(budget);
        this.remaining = Number(budget);
        this.expenses = [];
    }

    new_spending( spending ){
        this.expenses.push( spending );
    }

    calculate_remaining(){
        const spent = this.expenses.reduce( ( total, spending ) => total + spending.quantity, 0 );
        this.remaining = Number(this.budget - spent);
    }

    delete_spending(id){
        this.expenses = this.expenses.filter( spending => spending.id !== id);
        this.calculate_remaining();
    }

}