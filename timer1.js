// const argstimer = process.argv.slice(2).sort();
// //console.log(args);
// for (let num of argstimer) {
//   if (num >= 0 && !Number.isNaN(num)) {
//     setTimeout(() => {
//       process.stdout.write('\x07');
//     }, num);
//   }
// }

/********************************************** */
let timers = [10, 3, 5];

// // EDGE CASES
// //let timers = [];
// //let timers = [-1];
// //let timers = ['a'];

  for(const num of timers) {
    if (num < 0) {
      console.log("negative number...... so skip");
    } else if (typeof(num) === "string") {
      console.log("non-number......so skip")
    } else {
        setTimeout(() => {
          console.log(num + 's');
          result = process.stdout.write('***** \n');
          process.stdout.write('\x07');    
      }, num * 1000);
    }  
  }