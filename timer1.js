
let bob = process.argv.slice(2)
console.log(bob)


const timer = (time) => {
  if (!bob || bob < 0){
    console.log(undefined)
  } else {
    for(let i = 0; i <= time; i++){
      setTimeout(() => {
        console.log(i)
        bob.forEach(boby => {
          if (boby == i){
            process.stdout.write('\x07');
          }
        });
      }, i * 500 )
      
    }
  }
}

timer(10)

