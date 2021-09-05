function findAnagram(param){
    const result = {}
    for(const d in param){
        const sortWord = param[d].split("").sort().join()
        if(result[sortWord]){
            result[sortWord] = [...result[sortWord], param[d]]
        }else{
            result[sortWord] = [param[d]]
        }
    }
    return Object.values(result)
}

console.log(findAnagram(['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']))

