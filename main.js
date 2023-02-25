////////// 1 - MASALA /////////////


function spelling(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        arr.push(str.substring(0, i + 1));
    }
    return console.log(arr);
}

spelling("bee");

spelling("happy");

spelling("eagerly");





////////////// 2 - MASALA /////////////



function testJackpot(result) {
    for (let i = 1; i < result.length; i++) {
        if (result[0] !== result[i]) {
            return console.log(false);
        }
    }
    
    return console.log(true);
}

testJackpot(["@", "@", "@", "@"]);

testJackpot(["abc", "abc", "abc", "abc"]);

testJackpot(["SS", "SS", "SS", "SS"]);

testJackpot(["&&", "&", "&&&", "&&&&"]);

testJackpot(["SS", "SS", "SS", "Ss"]);


/////////3 - MASALA /////////////

function toArray(obj) {
    let answer3 = [];
    for (let key in obj) {
        answer3.push([key, obj[key]]);
    }
    return console.log(answer3);
}

toArray({ a: 1, b: 2 }); //➞ [["a", 1], ["b", 2]]

toArray({ shrimp: 15, tots: 12 }); //➞ [["shrimp", 15], ["tots", 12]]

toArray({}); // ➞ []


///////// 4 - MASALA ////////////

function mapping(letters) {
    let letterObject = {};
    for (let i = 0; i < letters.length; i++) {
        letterObject[letters[i]] = letters[i].toUpperCase();
    }
    
    return console.log(letterObject);
}

mapping(["p", "s"]); // ➞ { "p": "P", "s": "S" }

mapping(["a", "b", "c"]); // ➞ { "a": "A", "b": "B", "c": "C" }

mapping(["a", "v", "y", "z"]); //  ➞ { "a": "A", "v": "V", "y": "Y", "z": "Z" }


////////////// 5 - MASALA ////////////////


function volumeOfBox(sizes) {
    return console.log(sizes.width * sizes.length * sizes.height);
}

volumeOfBox({ width: 2, length: 5, height: 1 }); // ➞ 10

volumeOfBox({ width: 4, length: 2, height: 2 }); // ➞ 16

volumeOfBox({ width: 2, length: 3, height: 5 }); // ➞ 30

