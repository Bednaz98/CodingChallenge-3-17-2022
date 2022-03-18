// Given two singly linked lists that intersect at some point, find the intersecting node. Assume the lists are non-cyclical.
// For example, given A = 3 ➔ 7 ➔ 8 ➔ 10 and B = 99 ➔ 1 ➔ 8 ➔ 10, return the node with value 8. 
//In this example, assume nodes with the same value are the exact same node objects.
// Do this in 0( m + n) time (where m and n are the lengths of the lists) and constant space.


export interface LinkListNode{
    value:any
    pointer:any
}


export function makeNode(value:any, pointer:any=null){
    if(value === null) throw new Error("You can not add a new node to a linked list with a value of null")
    return {value,pointer}
}

export class LinkedList{
    private head:LinkListNode={value:undefined,pointer:null};
    /**Inserts value to the start of the linked list*/
    addNode(value:any){
        return this.head ={value,pointer:this.head}
    }
    /**tries to find and return the value of a specific node by index*/
    getNode(index:number){
        let counter =0;
        let node:LinkListNode = this.head
        do{
            try {
                if(counter === index) return node.value
                node = node.pointer
                counter++
            } catch (error) {
                counter++
            }
        }while(counter < index+1)
        return null
    }
    /**return the number of layers deep as an index*/
    getNodeCount(){
        let node= this.head
        let counter =0
        do{
            try {
                node = node.pointer
                counter ++
            } catch (error) {
                node ={value:null,pointer:null}
            }
        }while(node?.pointer !== null)
        return counter

    }
    /**Used to clearing the list*/
    clearList(){
        this.head ={value:undefined,pointer:null};
    }

    /**Used for debugging purposes*/
    printList(){
        let printout = this.head
        let counter =0
        console.log("\n\n ###########\nPrinting list: ")
        do{
            try {
                console.log("Index: ", counter, ", Data:", printout?.value)
                printout = printout.pointer
                counter ++
            } catch (error) {
                console.log("List End\n\n")
                printout ={value:null,pointer:null}
            }
        }while(printout?.pointer !== null)
        console.log("Print List: \n\n",this.head)
    }
    
}


function checkIntersection(listA:LinkedList,listB:LinkedList){
    const maxA= listA.getNodeCount()
    const maxB= listB.getNodeCount()
    let valuesA:any[] =[]
    let valuesB:any[] =[]
    let counter =0
    while(counter < maxA){
        valuesA.push(listA.getNode(counter))
        counter ++
    }
    counter=0
    while(counter < maxB){
        valuesB.push(listB.getNode(counter))
        counter ++
    }
    return valuesA.filter(x => valuesB.includes(x));
}

function test(){
    //Testing Functions Here
    //###########################################################
    // const list = new LinkedList()
    // list.addNode("StringFirst")
    // list.addNode(true)
    // list.addNode(3434)
    // list.addNode(undefined)
    // list.printList()
    // console.log("\n\n$$$$$\n get length:")
    // console.log("\n\nlength: ",list.getNodeCount())
    // console.log("\n\n$$$$$\ntesting index:")
    // console.log("\n\nGetting index: ",list.getNode(list.getNodeCount()-1))
    //###############################################################

    //Single Intersection Test
    const listA = new LinkedList()
    listA.addNode("TestString")
    listA.addNode(5)
    listA.addNode(true)
    listA.addNode("45g")

    const listB = new LinkedList()
    listB.addNode(false)
    listB.addNode(3)
    listB.addNode(-234)
    listB.addNode("TestString")
    console.log( checkIntersection(listA ,listB))

    // Multi intersection Test
    const listC = new LinkedList()
    listC.addNode(false)
    listC.addNode(5)
    listC.addNode(true)
    listC.addNode("45g")

    const listD = new LinkedList()
    listD.addNode(false)
    listD.addNode(5)
    listD.addNode(-234)
    listD.addNode("TestString")
    console.log( checkIntersection(listC ,listD))

    




}test()