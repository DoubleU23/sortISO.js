# isoSort()
## sort german vowel mutations

The Script changes the vowel mutaions ASCCI code to halfsteps of their original vowel  
and sorts the Array based on that fake ASCII-Codes

## Example
```javascript
var arr 	= ['abc', 'äbc', 'Äbc', 'Abc']
,	sorted	= arr.sort( isoSort )
;
console.log( sorted );
```

## Output
```javascript
["Abc", "Äbc", "abc", "äbc"]
```

> or try for yourself in the console


## toDo
*) attach to Array prototype for better usage - ['abc', 'äbc', 'Äbc', 'Abc'].isoSort()

## License
copyleft by Stefan Friedl (k) all rights reversed  
[Attribution-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-sa/4.0/)