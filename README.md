# eko-final-stage

## code instruction
### concept
```js
function sortBy (a, b) {
  return a - b
}
input.sort(sortBy)
```
1. Sorted the Input item by ascending technique. ()

```js
for (var i = 0; i < inputs.length; i++) {
    if (inputs[i+1] === inputs[i]) {
```
2. Start on the first element and the next element to compare that.

```js
if (inputs[i+1] === inputs[i]) {
  result.push(inputs[i])
}
```
3. If 2 items has been equalled. the result was gathered the current result into the collection variable.

4. Repeat it again unti the end of the last array element.
