function stampa (n) {
    for (let i = 0; i < n; i++) {
      
      if (i % 15 === 0) {
        console.log('fizzBuzz');
        
      } else if ( i % 5 === 0) {
        console.log('Buzz');
        
      } else if (i % 3 === 0) {
        console.log('Fizz');
       
      } else {
        console.log(i);
        
      }
    }
}

stampa(50)