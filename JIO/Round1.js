
const promise = new Promise((resolve, reject) => {
    reject('Some Error Occurred');
    })
    .catch(error => {
    console.log(error)
     return error
    //throw error; //comment the above line
    })
    .then((error) => console.log('error',error), 
    (catchedError) => console.log('catchedError', catchedError))
        .then((a) => console.log('test'))
        .then(() => console.log('test2'))
        .catch(() => console.log('catch’));
    
    
    
    //'Some Error Occurred
    // catchedError Some Error Occurred
    //test
    //test2

    /////////////////////////////////////////////////////////////////
React 
if we set the value same value in Function and Class component in react will it re-render?
Ans: Class based one does not function one   
    9
    
    footer tag...if we put this in middle does it appear in center or bottom
    
    //inline, inline-block...can we give margin, height, width to inline? Ans is no
    
    //DOM
    
    //Reconcilation

    //VDOM1
    
    //update-> VDOM2
    
    // How reconcilation works
    
    // setState, best way to update a state
    
    //open a website, what browser does behind the scene DOM, CSSOM
    // What id does when found a script tag does it create the DOM tree again?
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //Prototypal inheritance
    //this object, we need to create inhertiance like class based one using Prototypal inhetance
    
    
    function Parent(name, type){
        this.name = "Parent";
      this.type = type;
    }
    
    Parent.prototype.printName = function(){
        console.log(this.name);
    }
    
    Parent.prototype.printType = function(){
        console.log(this.type);
    }
    
    function Child(name, type){
        Parent.call(this, name, type);
      this.name = "Child";
     
    }
    

    //Solution of the above problem

    function Parent(name, type){
      this.name = "Parent";
    this.type = type;
  }
  
  Parent.prototype.printName = function(){
      console.log(this.name);
  }
  
  Parent.prototype.printType = function(){
      console.log(this.type);
  }
  
  function Child(name, type){
      Parent.call(this, name, type);
      this.name = name;
  }
  Child.prototype = Object.create(Parent.prototype);
  
  let o = new Child("Child", "Testing");
  o.printType();
  
  console.log(o)
  
  

  /////////////////////////////////////////////////
    
    useEffect(function(){
        
      ///sad
      return () => {
    
        }
    });
    
    
    
    
    Child.prototype.printName = function(){
        console.log(this.name);
    }
    
    /* Child.prototype = Parent.prototype */
    
    /* Object.assign(Child.prototype, Parent) */
    
    let obj = new Child("Child", "Parent");
    
    /* obj.printType(); */
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /* Array.prototype.myReduce =  function(callback, acc){
        
        if(!callback){
          throw new Error("Callback is not prvoided!")
        }
        
        if(typeof callback !== "function"){
          throw new TypeError("Callback is not a function!");
        }
        
        let arr = this;
        
    
        let value = 0;
        
        if(arr.length === 0){
          return;
        }
     
        
        let i = 0;
        if(acc === undefined || acc  === null){
          value = arr[0];
          i = 1;
        }else{
          value = acc;
        }
        console.log(value, i)
        
        for(i; i< arr.length; i++){
          value = callback(value, arr[i], i);
        }
      
        return value;
    }
    //1 * 2 + 2 * 3 + 3 * 2 + 4*3 + 5*2 => 36
    
    function sum(acc, value, i){
      if(i % 2 === 0){
            return acc + (value * 2);  	
      }
      return acc + (value * 3);
    
    }
    
    let arr = [1,2,3,4,5] //15
    
    let res = arr.myReduce(sum, 0);
    console.log("Result:", res)
     */