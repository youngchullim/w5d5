class Clock {
  constructor() {
    // 1. Create a Date object.
    const d = new Date();
    
    // 2. Store the hours, minutes, and seconds.
    this.hour = d.getHours();
    this.min = d.getMinutes();
    this.sec = d.getSeconds();
    // 3. Call printTime.
    // const wow = this;
    this.printTime();
    // 4. Schedule the tick at 1 second intervals.  
    setInterval(this._tick.bind(this), 1000)
    // setInterval(this._tick, 1000)
    // window.setInterval(function() { 
    //   wow._tick()}, 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    let h = this.format(this.hour);
    let m = this.format(this.min);
    let s = this.format(this.sec);

    // Use console.log to print it.
    console.log(`${h}:${m}:${s}`)
  }

  format(time) {
    if (time < 10) {
      return "0" + time;
    }
    return time;
  }

  _tick() {
    // debugger
    // 1. Increment the time by one second.
    if (this.sec < 59){
      this.sec++;
    } else if (this.min < 59) { // sec is 59
      this.sec = 0;
      this.min ++;
    } else if (this.hour < 23){ // min is 59 
      this.sec = 0;
      this.min = 0;
      this.hour++;
    } else { // hour is 23
      this.sec = 0;
      this.min = 0;
      this.hour = 0;
    }
    this.printTime();
    // 2. Call printTime.
  }
}
const addNumbers = function(sum, numsLeft, completionCallback) {

  if (numsLeft === 0){
    completionCallback(sum);
    reader.close();
    return;
  } 

  reader.question("give me a number: ", function(res){
    const num = parseInt(res);
    sum += num;
    console.log(sum);
    addNumbers(sum, numsLeft - 1, completionCallback);
  });
}




// #############################################################


const askIfGreaterThan = function(el1, el2, callback) {
  reader.question(`Is ${el1} > ${el2}?`, function (res) {
    // console.log('huh..')
    if(res === "yes") {
      callback(true);
    } else {
      callback(false);
    }
    // reader.close();
  });
}


const innerBubbleSortLoop = function(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  if(i === arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps)
  } else {
    // console.log("ask if greater")

    askIfGreaterThan(arr[i], arr[i + 1], (isGreater) => {  
      if (isGreater){
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    })
  }
}

  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.


const absurdBubbleSort = function(arr, sortCompletionCallback) {

  const outerBubbleSortLoop = function(madeAnySwaps) {
    
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr)
    } 
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
  }
  outerBubbleSortLoop(true);
}



// const normalBubbleSort = function(arr, sortCompletionCallback){
//   let result = arr.slice();
//   let not_sorted = true;
//   while (not_sorted){
//     not_sorted = false
//     for (let i = 0; i < result.length-1; i++){
//       if (result[i] > result[i+1]){
//         [result[i], result[i+1]] = [result[i+1], result[i]];
//         not_sorted = true;
//       }
//     }
//   }
//   sortCompletionCallback([result]);
// }
// #############################################################

// const myBind = function(context) {
//   return () => {
//     Function.prototype.apply(context, Array.from(arguments))
//   }
// }

Function.prototype.myBind = function (context) {
  // debugger
  return () => {
    this.apply(context, Array.from(arguments))
    // this.call(context, ...arguments)
  }
}
Function.prototype.myBind2 = function (context) {
  // debugger
  const wow = this;
  return function(){
    wow.apply(context, Array.from(arguments))
    // this.call(context, ...arguments)
  }
}




// fn.
// fn.apply(ctx,[])

// fn.myBind(ctx,ar1, ar2)

// #############################################################

class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function () {
  console.log("Turning on " + this.name);
};

const lamp = new Lamp();

turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);
const myBound2TurnOn = turnOn.myBind2(lamp);

boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"
myBound2TurnOn(); 
// const readline = require("readline");

// reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// #############################################################

// const clock = new Clock();
// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

// normalBubbleSort([4, 3, 2, 1], result => console.log(`Array: ${result}`));

// askIfGreaterThan(1, 2, (bool) => { return bool });

// innerBubbleSortLoop([3,2,1,0],0,true, () => {});

// absurdBubbleSort([3, 2, 1], function (arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });



