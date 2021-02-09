const numSiblings = '1';
const aNumber = Number(numSiblings)


if(aNumber === 1)
    console.log('1 sibling');
else if(aNumber > 1)
    console.log('More than 1 sibling');
else 
    console.log('No siblings');

/*
    conversion in this situation:
        *Double equals (==)  Comparing value only.
        *Triple equals (===) Comparing value and type.
*/