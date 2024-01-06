function validAnagram(str1, str2){
    let obj1 = {}
    
    if (str1.length !== str2.length) {
        return false
    }
    for (let char of str1) {
        obj1[char] > 0 ? obj1[char]++ : (obj1[char] = 1)
    }
    for (let char of str2) {
        if (!obj1[char]) {
            return false
        } else {
            obj1[char] -= 1
        }
    }
    return true
  }