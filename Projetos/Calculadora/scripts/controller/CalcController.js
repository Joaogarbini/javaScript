class CalcController{
    constructor(){
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector('#data');
        this._timeEl = document.querySelector('#hora');
        this.currentDate;
        this.initialize();

    }

    initialize(){

               
        this.dateEl.innerHTML = '01/05/2020';
        this.timeEl.innerHTML = '00:00';



    }

    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }  

    set displayCalc(valor){
        this._displayCalcEl.innerHTML= valor;
    }  

    get dataAtual(){
        return this.currentDate;
    }

    set dataAtual(valor){
        this._currentDate = valor;
    }
}