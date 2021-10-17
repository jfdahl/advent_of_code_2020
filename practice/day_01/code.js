#!/usr/bin/env node

// Puzzle URL: 

var lib = require('./lib'),
    // filename = 'input_sample.txt',
    filename = 'input.txt',
    input = lib.readFile(filename),
    print = console.log,
    table = console.table;
    

/*
 *  Main
 */ 
print( part1() );


/*
 * FUNCTIONS 
 */

function cleanData( input ){
    /** 
     * Given the puzzle raw input, 
     * split the input into an array,
     * sort the array in descending order,
     * convert the elements to integers, and
     * return the result.
    */
    return input
        .split( '\n' )
        .sort( ( a, b ) => b-a )
        .map( num => { return parseInt( num ); } );
}
        
function isAddend( num, total, data ){
    /**
     * Given a number,
     * subtract the number from the total,
     * check if the result is in the data.
     * If the result is found in the data, return the result, otherwise
     * return a boolean false.
     */

    var tmpMatch = total - num;
    return data.indexOf( tmpMatch ) >=0 ? tmpMatch : false;
}

function part1(){
    var num1, num2,
        total = 2020,
        data = cleanData( input );

    for( var i=0, l=data.length; i<l; i++ ){
        num1 = data[i];
        num2 = isAddend( num1, total, data );
        if( num2 ){
            return num1 * num2;
        }
    }
}