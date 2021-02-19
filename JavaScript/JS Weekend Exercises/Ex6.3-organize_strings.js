/*
    Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters, each taken only once - coming from s1 or s2.
*/

const longest = (str1, str2) => {
    str1 = str1.split("").sort();
    str2 = str2.split("").sort();

    let result = [], i = 0, j = 0, k =0;

    if(str1[0] < str2[0]) {
        result.push(str[1]);
        i++; 
    }
    else{
        result.push(str2[0]);
        j++;
    }

    while(i < str1.length || j < str2.length){
        if(str1[i] < str2[j] || str2[j] === undefined){
            if (str1[i] > result[k]){
                result.push(str1[i]);
                k++;
            }
            i++;
        }
        else {
            if (str2[j] > result[k]){
                result.push(str2[j]);
                k++;
            }
            j++;
        }
    }

    return result.join("");
}

// Examples 
console.log(longest('xyaabbbccccdefww', 'xxxxyyyyabklmopq'));
console.log(longest('abcdefghijklmnopqrstuvwxyz', 'abcdefghijklmnopqrstuvwxyz'));