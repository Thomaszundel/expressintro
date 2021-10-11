var myArr = [1,5,4,13,24,3,0];

// es6 - ECMA Script
console.log(`My array contains ${myArr.length}`);

//filter numbers lower then 10 -- should be (13 and 24)
var filteredArr = myArr.filter((val,index,array)=>{
    return val > 9;

});

console.log(`My array contains`, filteredArr);
//expected [2,10,8,13,48,6,0]
var mappedArr = myArr.map((val,index,arr)=>{
    return val * 2;
});

console.log(`My mapped array contains ${mappedArr.length} elements`,mappedArr);

var data = {
    "channel1":[
        { message:"one", author:"bob" },
        { message:"two", author:"alice" }
    ],"channel2":[
        { message:"toast", author:"bob" },
        { message:"jam", author:"bob" }
    ],
    "news":[
        { message:"one", author:"bob" }
    ]
    
}

var mappedData = data.channel1.map((val,index,arr)=>{
    val.id = index;
    return val;
});

console.log(`my data contains ${mappedData.length}`,mappedData);

var chat = {
    "channel1":[
        { message:"one", author:"bob",date_created:Date.now() },//number of milliseconds elapsed since 1970
        { message:"two", author:"alice",date_created:Date.now() }
    ],"channel2":[
        { message:"toast", author:"bob" },
        { message:"jam", author:"bob" }
    ],
    "news":[
        { message:"one", author:"bob" }
    ]
    
}

console.log(`my chat contains`, chat);

var chat2 = [
    {message:"one",author: "bob",channel:"news"},
    {message:"two",author: "alice",channel:"news"},
    {message:"three",author: "bob",channel:"tech"},
    {message:"four",author: "tim",channel:"news"},
    {message:"five",author: "tim",channel:"tech"}
];

console.log(`chat2 has ${chat2.length}`,chat2);

var news = chat2.filter((val)=>{
    return val.channel == "news";
})

console.log(`news channel of chat2 ${news.length}`,news);

