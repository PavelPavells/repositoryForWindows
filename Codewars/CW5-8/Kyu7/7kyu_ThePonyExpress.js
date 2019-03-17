// 7kyu - The Pony Express

// A History Lesson

// The Pony Express was a mail service operating in the US in 1859-60.

// [Pony Express]

// It reduced the time for messages to travel between the Atlantic and Pacific 
// coasts to about 10 days, before it was made obsolete by the transcontinental
// telegraph.
// How it worked

// There were a number of stations, where:

//     The rider switched to a fresh horse and carried on, or
//     The mail bag was handed over to the next rider

// Kata Task

// stations is a list/array of distances (miles) from one station to the next 
// along the Pony Express route.

// Implement the riders method/function, to return how many riders are necessary 
// to get the mail from one end to the other.

// NOTE: Each rider travels as far as he can, but never more than 100 miles.

// Good Luck.
// DM.

function riders(stations) {  
  let n = 1, x = 0;
  for(let s of stations)
    if(x + s > 100)
      [n, x] =  [n+1, s];
    else x += s;
  return n;
}
