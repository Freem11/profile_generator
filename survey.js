const { stdin } = require('process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable?", (answer) => {
   console.log(`Thank you for your valuable feedback: ${answer}`);
   let Var1 = answer
    
   rl.question("What's an activity you like doing?", (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    let Var2 = answer
    
    rl.question("What do you listen to while doing that?", (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
      let Var3 = answer
      
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);
        let Var4 = answer

        rl.question("What's your favourite thing to eat for that meal?", (answer) => {
          console.log(`Thank you for your valuable feedback: ${answer}`);
           let Var5 = answer

          rl.question("Which sport is your absolute favourite?", (answer) => {
            console.log(`Thank you for your valuable feedback: ${answer}`);
            let Var6 = answer

            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {
              console.log(`Thank you for your valuable feedback: ${answer}`);
              let Var7 = answer

              console.log(`${Var1} loves listening to ${Var3} while ${Var2}, devouring ${Var5} for ${Var4}, prefers ${Var6} over any other sport, and is amazing at ${Var7}.`) 
              rl.close();

            });
          });
        });
      });
    });
  });
});