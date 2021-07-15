// //creeer array
const items = ["nice", "awesome", "tof"];

// //A voeg item toe met .push
const addCool = items.push("cool");
console.log(items);

//B return aantal items
console.log(items.length);

//C return eerste item
console.log(items[0]);

//D return laatste item
const laatsteItem = items.length;
console.log(items[laatsteItem - 1]);

//E verwijder eerste item met splice en return de rest, mutates
const verwijderEerste = items.splice(0, 1);
console.log(items);

// verwijder eerste met slice en return de rest, not mutates
const eersteItemNot = items.slice(1, items.length);
console.log(eersteItemNot);
console.log(items);

//F items in array samenvoegen tot 1 string met .join
const items2 = ["Winc", "Academy", "is", "leuk", ";-}"];
console.log(items2.join(" "));

//G 2 arrays samenvoegen
const samenVoegen = items.concat(items2);
console.log(samenVoegen);
