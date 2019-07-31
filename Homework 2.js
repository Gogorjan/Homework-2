
//       1





let arr = [ 6, 78, 'n', 0, 1, 'asd', true ] ;
let newArr = [] ;

if ( arr.length === 0 ) {
    console.log( 'Empty array' ) ;
} else {
    function delateFirstDigit ( arr = [] , iPrevious = 0 , iCurrent = 1 ) {
        debugger ;
    
        if ( iCurrent > arr.length - 1 ) {
            return newArr ;
        }
        newArr[iPrevious] = arr[iCurrent] ;
        return delateFirstDigit( arr , ++iPrevious , ++iCurrent ) ;
    }
    console.log( delateFirstDigit( arr ) ) ;
}







//      2







let arr = [1, [3, 4, [1, 2, 5], 10], 10] ;


function flattensArr (arr = []) {
    if(arr.length === 0) {
        return [];
    }
    if( Array.isArray( arr[0] )  ) {
        return flattensArr(arr.shift()).concat(flattensArr(arr)) ;
    }
    return [arr.shift()].concat(flattensArr(arr)) ;
}

console.log( flattensArr( arr ) ) ;






//       3






let CalcDigits = function ( number = 0 ) {
    debugger ;
    let lastDigits = 0 ;
    if ( number === 0 ) {
        return 0 ;
    }
    lastDigits = number % 10 ;
    number = ( number - lastDigits ) / 10 ;
    return lastDigits + CalcDigits( number ) ;
}


let calcSumDigits = function( number ) {
    debugger ;
    if ( number === 0 ) {
        return 0 ;
    }
    let lastDigits = 0 ;
    lastDigits = number % 10 ;
    number = ( number - lastDigits ) / 10 ;
    return 1 + calcSumDigits( number ) ;

}


function CalcDigitsOrSumDigits( number = 0 ) {
    debugger ;
    let newSum = CalcDigits(number) ;
    if ( newSum < 10 ) {
        return newSum ;
    }
    return calcSumDigits( number ) ;
}


console.log( CalcDigitsOrSumDigits( 58 ) ) ;






//        4





let obj = {
    a : '1' ,
    b : '2' ,
    c : '2' ,
    k : '2' ,
    d : '1' ,
    f : '3' ,
    t : '3' ,
}


// let obj = {
//     a : '1' ,
//     b : '2' ,
//     f : '3' ,
// }


console.log( createNewObj( divideNotSameDigits( crateArrIsObj( obj ) ) ) ) ;

function crateArrIsObj ( obj = {} ) {
    let newArr = [] ;
    for ( let key in obj ) {
        newArr.push( [obj[key] , key ] ) ;
    }
    return newArr ;
}

function divideNotSameDigits ( arr = [] ) {
    debugger ;
    for ( let i = 0 ; i < arr.length ; i++ ) {
        for ( let j = i + 1 ; j < arr.length ; j++ ) {
            if ( arr[i][0] === arr[j][0] ) {
                arr[i].push( arr[j][1] ) ;
                 arr.splice( j , 1 ) ;
                 j-- ;
            }
        }
    }
    return arr ;
}

function createNewObj( arr = [] ) {
    debugger ;
    newObj = {} ;
    let newArrOne = [] ;
    for ( let i = 0 ; i < arr.length ; i++ ) {
        for ( let j = 1 ; j < arr[i].length ; j++ ) {
            newArrOne.push( arr[i][j] ) ;
        }
        newObj[arr[i][0]] = newArrOne ;
        newArrOne = [] ;
    }
    return newObj ;
}