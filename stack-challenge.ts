//Implement a stack that has the following methods:
// • push ( val ) : push val onto the stack
// • pop: pop off and return the topmost element of the stack. If there are no elements in the stack, throw an error.
// • max: return the maximum value in the stack currently. If there are no elements in the stack, throw an error.


export class Stack<T>{
    private stack:T[] = []
    constructor(initArray:T[] = Array<T>()){
        this.stack = initArray
    }
    /**This is used to add a new element to that stack. The new element is added onto the end of the stack.*/
    public push(newElement:T){
        //check if there array already has any elements to avoid any errors
        if(this.stack.length>0) this.stack = [...this.stack,newElement ]
        // if the array is empty, create a new array with the single element inside
        else this.stack = [newElement]
    }

    public pop(){
        //Throws an error of there are no elements in the array.
        if(this.stack.length <1) throw new Error("pop called on stack. The stack currently has no elements")
        // remove the last element, splice returns an array of removed elements. 
        //Right after the splice, return the 0th index of the array returned from spice
        return (this.stack.splice(this.stack.length-1, 1))[0]
    }

    /**this will attempt to return the biggest element within the stack depending on the type*/
    public Max(){
        if(this.stack.length <1) return null
        if(typeof(this.stack[0])=='bigint') {
            let result:bigint = BigInt(0);
            this.stack.forEach((e)=>{
                if(BigInt(String(e)) >result) result = BigInt(String(e))
            })
            return result
        }
        if(typeof(this.stack[0])=='number'){
            const temp = this.stack.map((e)=>{return Number(e)})
            return Math.max(...temp)
        }
        if(typeof(this.stack[0])=='boolean'){
            this.stack.forEach((e)=>{
                if(Boolean(e) === true) return true
            })
            return false
        }
        if(typeof(this.stack[0])=='function') return this.stack[this.stack.length-1]
        if(typeof(this.stack[0])=='string') {
            let index =0;
            let test= "";
            this.stack.forEach((e,i)=>{ if(String(e)?.length > test.length){test =String(e), index=i} })
            return test
        }
        if(typeof(this.stack[0])=='object'){
            return this.stack[this.stack.length-1]
        }
        if(typeof(this.stack[0])=='symbol') return this.stack[this.stack.length-1]
        if(typeof(this.stack[0])=='undefined') return undefined
    }
    //Debug print
    public print(){
        console.log("Print stack of elements: ", this.stack.length)
        console.table(this.stack)
    }
}


function testingStack(){
    const stringStack = new Stack<string>()
    stringStack.push("hello")
    stringStack.push("testing")
    stringStack.push("pop")
    stringStack.print()
    console.log("Max: ", stringStack.Max())
    stringStack.pop()
    stringStack.print()

    const numberStack = new Stack<number>([1,2,3,4,5,6])
    numberStack.push(7)
    numberStack.push(8)
    numberStack.push(9)
    numberStack.print()
    console.log("Max: ", numberStack.Max())
    numberStack.pop()
    numberStack.print()

    const bigIntStack = new Stack<bigint>([BigInt(1),BigInt(1),BigInt(1),BigInt(1),BigInt(1),BigInt(1)])
    bigIntStack.push(BigInt(1))
    bigIntStack.push(BigInt(1))
    bigIntStack.push(BigInt(10000000000000000000000000000000000000000000000))
    bigIntStack.print()
    console.log("Max: ", bigIntStack.Max())
    bigIntStack.pop()
    bigIntStack.print()

    const objStack = new Stack<object>([{test:"hello"}])
    objStack.push({test:"hello",another:9})
    objStack.push({check:"hello"})
    objStack.push({pop:"hello"})
    objStack.print()
    console.log("Max: ", objStack.Max())
    objStack.pop()
    objStack.print()

    

}testingStack()