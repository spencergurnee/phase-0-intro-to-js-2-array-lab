const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(){
    cats.push("Ralph");

}

function destructivelyPrependCat(){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(){
    const copyofCats = cats.slice();
    copyofCats.push("Broom");
    return copyofCats;
}

function prependCat(){
    const copyofCats = cats.slice();
    copyofCats.unshift("Arnold");
    return copyofCats;
}

function removeLastCat(){
    const copyofCats = cats.slice(0, cats.length - 1);
    return copyofCats;
}

function removeFirstCat(){
    const copyofCats = cats.slice(1);
    return copyofCats;
}


