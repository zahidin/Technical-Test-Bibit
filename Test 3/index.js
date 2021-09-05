function findFirstStringInBracket(str) {
    const indexFirstBracketFound = str.indexOf("(")
    if (indexFirstBracketFound < 0) {
        return ""
    }
    const indexClosingBracketFound = str.indexOf(")");
    if (indexClosingBracketFound < 0){
        return ""
    }

    return str.substring(indexFirstBracketFound + 1, indexClosingBracketFound)
}

console.log(findFirstStringInBracket("TEST (3)"))
