/**
 * for a given string tell me weather it has even number of characters or not
 */

function evenSizedString(str){
    const size =str.length;
    if(size % 2=== 0){
        console.log('even size');
        return true;
    }
    else{
        console.log('odd size')
        return false;
    }
    console.log(str);
}
    evenSizedString('dhaka');
    evenSizedString('faka');

function doubleOrTriple(number, doDouble){
    if (doDouble === true){
        const result = number * 2;
        return result;
    }
    else{
        const result = number * 3;
        return result;
    }
}

    console.log(doubleOrTriple(5,true));
    console.log(doubleOrTriple(10,true));