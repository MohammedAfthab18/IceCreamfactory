// function one(call_two) {
//   console.log('Step one complete');
//   call_two();
// }

// function two() {
//   console.log('S tep two');
// }

// one(two);

// Object Stocks

let stocks = {
  Fruits: ['Strawberry', 'Grapes', 'Banana', 'Apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'Peanuts'],
};

// Use of Boolean is a must for creating Promises
let is_shop_open = false;

// Creation of Promises (Resolve and Reject)

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work()); // Execute the work function and resolve with its result
      }, time);
    } else {
      reject(console.log('Our shop is closed'));
    }
  });
};

// Promise Chaining (Then)

order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
  .then(() => {
    return order(0, () => console.log('Production has started'));
  })
  .then(() => {
    return order(2000, () => {
      console.log('Th fruit was chopped ');
    })
      .then(() => {
        return order(1000, () => {
          console.log(`Added ${stocks.liquid[0]} and ${stocks.liquid[1]}`);
        });
      })
      .then(() => {
        return order(2000, () => {
          console.log(`Selected the ${stocks.holder[0]} as the container`);
        });
      })
      .then(() => {
        return order(3000, () => {
          console.log(`Selected ${stocks.toppings[0]}as the toppings`);
        });
      })
      .then(() => {
        return order(2000, () => {
          console.log('The Ice Cream is served');
        });
      })
      .finally(() => {
        console.log('Promised Finished Successfully');
      });
  })

  // if the resolve isn't matching the condition it turns to reject thus closing the code

  .catch(() => {
    console.log('Customer is Left');
  });
//////////////   Callback function Method   ////////////////////////
///////////////////////////////////////////////////////////////////
//////////////   This Causes Callback Hell  ////////////////////////
// let order = (Fruit_name, call_production) => {
//   setTimeout(() => {
//     console.log(`Ordered ${stocks.Fruits[Fruit_name]} was selected`);
//     call_production();
//   }, 2000);
// };

// let production = () => {
//   setTimeout(() => {
//     console.log('Production has started');

//     setTimeout(() => {
//       console.log('The food has been chopped');

//       setTimeout(() => {
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

//         setTimeout(() => {
//           console.log('The machine was started');
//           setTimeout(() => {
//             console.log(`The container ${stocks.holder[0]} has taken`);
//             setTimeout(() => {
//               console.log(`The toppings is choosed as ${stocks.toppings[1]}`);
//               setTimeout(() => {
//                 console.log('The Ice cream is ready ✨');
//               }, 2000);
//             }, 3000);
//           }, 2000);
//         }, 1000);
//       }, 1000);
//     }, 2000);
//   }, 0);
// };

// order(0, production);

////////  Using Async and Await /////////////////////////
// let stocks = {
//   Fruits: ['Strawberry', 'Grapes', 'Banana', 'Apple'],
//   liquid: ['water', 'ice'],
//   holder: ['cone', 'cup', 'stick'],
//   toppings: ['chocolate', 'Peanuts'],
// };

// let is_shop_open = false;

// let order = async (time, work) => {
//   return new Promise((resolve, reject) => {
//     if (is_shop_open) {
//       setTimeout(() => {
//         resolve(work());
//       }, time);
//     } else {
//       reject('Our shop is closed');
//     }
//   });
// };

// const main = async () => {
//   try {
//     await order(2000, () => console.log(`${stocks.Fruits[0]} was selected`));
//     await order(0, () => console.log('Production has started'));
//     await order(2000, () => console.log('The fruit was chopped'));
//     await order(1000, () => console.log(`Added ${stocks.liquid[0]} and ${stocks.liquid[1]}`));
//     await order(2000, () => console.log(`Selected the ${stocks.holder[0]} as the container`));
//     await order(3000, () => console.log(`Selected ${stocks.toppings[0]} as the toppings`));
//     await order(2000, () => console.log('The Ice Cream is served'));
//     console.log('Promised Finished Successfully');
//   } catch (error) {
//     console.log('Customer is Left');
//   }
// };

// main();
