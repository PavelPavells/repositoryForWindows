// 7kyu - Angle-a-trons and Phyllotaxy

// Many plants produce their leaves spiralling up the stem, with each successive leaf separated by an angle of approximately 137.5 degrees. This is known as Fibonacci Phyllotaxis and the angle is called the Golden Angle. It allows the plant to access as much sunlight as possible.

// But some plants follow a different phyllotaxy where successive leaves are separated by, say 100 degrees, and this works well for them too.

// The exercise:
// Write a function that:
// takes two inputs angleATron and leafNumber
// returns an object containing leaf numbers and angles. The expected angle is the angle between the first leaf and leafNumber==n, where n is a leaf from 1 to leafNumber
// The anlgeATron is an angle expressed in degrees. It represents the angle separating each successive leaf from its predecessor. So the anlgeATron for plants exhibiting Fibonacci Phyllotaxis is 137.5 degrees.

// The leafNumber is a whole number representing the nth leaf that grows from the stem.

// Example
// Test.assertSimilar(prediction(137.5,5) => { 'leaf 1': '0.0 degrees',
//   'leaf 2': '137.5 degrees',
//   'leaf 3': '275.0 degrees',
//   'leaf 4': '52.5 degrees',
//   'leaf 5': '190.0 degrees' })
// Angles should be to 1 decimal place and no greater than 360 degrees.

// The word angle-a-tron comes from this video https://www.youtube.com/watch?v=lOIP_Z_-0Hs

function prediction(angleATron, leafNo){
  let obj = {};
  for (let i = 0; i < leafNo; ++i)
    obj[`leaf ${i+1}`] = (i * angleATron % 360).toFixed(1) +  " degrees";
  
  return obj;
}