const numbers = [4, 7, 1, 3,8, 9,2,5];
const shortedNumbers = numbers.sort();
console.log(shortedNumbers);
const friends = ['kabli', 'josim', 'razzak', 'anwer', 'dibjol','badsa'];
// const shortedFriends = friends.sort();
const reverseFriends = friends.reverse();
console.log(reverseFriends);
// number shorting fun 
const bigNumbers = [66,58,81,92,9,6,37,13,2 ];
const shortedBigNumbers = bigNumbers.sort(function(a,b){
    return a - b;
});
console.log(shortedBigNumbers);