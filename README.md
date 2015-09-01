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

## License
sortISO by [Stefan Friedl](https://github.com/DoubleU23/) is licensed under a  
[Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).