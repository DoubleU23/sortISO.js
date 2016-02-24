# sortISO.js - sort german umlauts

The Script changes the german umlauts (vowel mutations) ASCCI code to halfsteps of their original vowel and sorts the Array based on that fake ASCII-Codes

## Example
```javascript
var arr 	= ['abc', 'äbc', 'Äbc', 'Abc']
,	sorted	= arr.sort( sortISO )
;
console.log( sorted );
```

## Output
```javascript
["Abc", "Äbc", "abc", "äbc"]
```


## toDo
* attach to Array prototype for better usage - ['abc', 'äbc', 'Äbc', 'Abc'].sortISO()
