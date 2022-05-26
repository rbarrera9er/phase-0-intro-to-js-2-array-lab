
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    cats.push(name);
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
   const allCats = [...cats];
   allCats.push(name);
   return allCats
}
function prependCat(name){
    const allCats = [...cats];
    allCats.unshift(name);
    return allCats;
}
function removeLastCat(){
    const allcats = [...cats];
    allcats.pop();
    return allcats
}
function removeFirstCat(){
    const allcats = [...cats];
    allcats.shift();
    return allcats
}
