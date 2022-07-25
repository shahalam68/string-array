function megaFriend(friends){
    if (Array.isArray(friends)== false){
       return 'Please provide an array'
    }
    let mega = friends[0];
    for(const friend of friends){
        if(friend.length > mega.length){
            mega = friend;
        }
    }
    return mega;
}
const friends = ['Kutub','Liton','Shamol','Sabbir'];
const myBigBuddy = megaFriend(132);
// console.log(myBigBuddy);
if(friends.indexOf('Liton') != -1){
    console.log('Lion exists')
};
if(friends.includes('Liton')== true){
    console.log('Lion exists using includes')
}