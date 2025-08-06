// Q1.
const MAX_LIMIT=3;
const current_usage=0;

const fn3 = async () => {
  return new Promise((resolve) => {
    console.log("Starting task");
    setTimeout(
      async () => {
        console.log("Completed task");
        resolve();
      },
      Math.random() * 1000 * 2,
    );
  });
};
const fnInput = [fn3, fn3, fn3, fn3];

fnInput.map((callback, index)=>{
    if((index +1 % MAX_LIMIT !== 0)){
        callback();
    }
})





// Q2:
// let iterations = 0;
// // 1. Manage topic registration
// // 2. Store the list of consumer
// // 3. On event get the subscurbed consumer and send the event
// let consumerTopicList = [];
// const consume = function(topic=""){
//     consumerTopicList.push(topic);

// }

// const produce = function(topic=""){

// }


// const myProducer = setInterval(() => {
//   produce("iteration", iterations);
//   iterations++;
//   if (iterations > 10) {
//     clearInterval(myProducer);
//   }
// }, 1000);
// const consumer = consume("iteration")

// consumer.on("data", (data) => {
//   console.log("got data", data);
// })