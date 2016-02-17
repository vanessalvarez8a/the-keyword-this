//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      // its a shorcut to refer to the object 
      //allows to use reusable code 

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //explicit binding: call apply or bind 
      //implicit binding you dont tell it to bind javascript binds it for you 
      //new binding: constructor binding the this keyword becomes the object im creating
      //window binding bind to the window object worse that a global scope 


  // 3) What is the difference between call and apply?

      //apply receives as array of arguments 

  // 4) What does .bind do?

      //creates and returns new function with the same body and it would be permanently bound


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. 
  //*Don't use 'user' instead use the 'this' keyword*

    user = {
      username: 'vanessalvarez',
      email: 'vanessa@gmail.com',
      getUsername: function () {
        return this.username;
      }
    }

//Now, invoke the getUsername method and verify you got the username of the
// object and not anything else.


user.getUsername();


// Write the function definitions which will make the following function 
//invocations function properly.

//methods are functions inside an object so the moveCar is a method 
 
function Car(make, model, year) {
  this.make = make,
  this.model = model,
  this.year = year,
  this.move = 0,
  this.moveCar = function() {
    this.move += 10;
    return this.move;
  }
}

var prius = new Car('Toyota', 'Prius', 2011); //prius is the context of this in the constructor
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added 
//to every object that is being returned from the Car function. 
//You'll also need to use the 'this' keyword properly in order to make sure
// you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and 
//mustang objects from above, use the proper syntax that will allow 
//for you to call the getYear function with the prius then the mustang 
//objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  getYear.call(prius);


//New Problem



var myUser = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getMyUsername = function(){
  console.log(this.username);
};

setTimeout(getMyUsername.bind(myUser), 5000); //.bind will make setTimeout as a function
// so it would make setTimeOut work //sets up the function with the object ready

//Above you're given an object, a function, and a setTimeout invocation. 
//After 5 seconds, what will the getUsername function return?
//Note(no tests)
  //undefined

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  // to nothing yet 

//Fix the setTimeout invocation so that the user object will be the focal object
 //when getUsername is ran.
