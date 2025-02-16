let user = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

//console.log(user.friends[0] ?? "Non-existent Property"); //throw error

user = JSON.parse(user);
console.log(user);

var json = '{ "name": "John", "birth": "2017-11-30T12:00:00.000Z", "city": "Caxias"}';

var obj = JSON.parse(json, function (key, value) {
    if(key == "birth"){
        return new Date(value);
    }
    return value;
});

console.log("Name: " + obj.name);
console.log("Birth: " + obj.birth);