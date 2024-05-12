class StringBuilder {
    #value;
    constructor(initialValue ){
        this.#value = initialValue
    }
    getValue(){
        return this.#value
    }
    padEnd(str){
        this.#value=this.getValue()+ str;
    }
    padStart(str){
        this.#value= str + this.getValue();
    }
    padBoth(str){
        this.#value= str + this.getValue() + str;
    }
}







const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
