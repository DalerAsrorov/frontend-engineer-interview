## Text Editor Coding Challenge

Your task is to implement a simplified version of text editor. All operations that should be supported are listed below. Partial credit will be given for each implemented operation. Please submit often to ensure partial credits are captured.

_Implementation tips:_

Implement operations and provided steps one by one, and not all together, keeping in mind that you will need to make refactors to support each additional step.
In the first four steps you can initially ignore the first array element ("0", "1", "2", etc). It will be used starting from the fifth step, but is passed in to all test cases for consistency.

1. __APPEND__ should append the provided string to the current text:

```js
input = [
    ["0", "APPEND", "Hey"],
    ["1", "APPEND", " there"],
    ["2", "APPEND", "!"]
]

// returns: "Hey there!"
```

2. __BACKSPACE__ should remove the last character of the current text:

```js
input = [
    ["0", "APPEND", "Hey you"],
    ["1", "BACKSPACE"]
]

// returns: "Hey yo"
```

and

```js
input = [
    ["0", "APPEND", "Hey you"],
    ["1", "BACKSPACE"],
    ["2", "BACKSPACE"]
]

// returns: "Hey y"
```

__BACKSPACE__ should do nothing if there are no characters to delete:

```js
input = [
    ["0", "APPEND", "!"],
    ["1", "BACKSPACE"],
    ["2", "BACKSPACE"]
]

// returns: ""
```

3. __UNDO__ should undo the previous APPEND or BACKSPACE operation:

```js
input = [
    ["0", "APPEND", "Hey"],
    ["1", "APPEND", " there"],
    ["2", "APPEND", "!"],
    ["3", "UNDO"],
    ["4", "UNDO"]
]

// returns: "Hey"
```
and should do nothing if there are more __UNDOs__' than __APPEND__ and __BACKSPACE__ operations:

```js
input = [
    ["0", "APPEND", "Hey"],
    ["1", "UNDO"],
    ["2", "UNDO"]
]

// returns: ""
```

4. __REDO__ should redo the previous __UNDO__ operation:

```js
input = [
    ["0", "APPEND", "Hey"],
    ["1", "APPEND", " there"],
    ["2", "UNDO"],
    ["3", "REDO"]
]

// returns: "Hey there"
```
and should do nothing when there are more __REDOs__ than __UNDOs__:
```js
input = [
    ["0", "APPEND", "Hey"],
    ["1", "UNDO"],
    ["2", "REDO"],
    ["3", "REDO"]
]

// returns: "Hey"
```
and should only work immediately after an __UNDO__ or __REDO__ operation:
```js
input = [
    ["0", "APPEND", "Hey"],
    ["1", "UNDO"],
    ["2", "APPEND", " there"],
    ["3", "REDO"]
]

// returns: " there"
```

5. input should be applied in chronological order according to the UNIX timestamp provided in the first array element.
```js
input = [
    ["1548185072722", "APPEND", "ey"],
    ["1548185072721", "APPEND", "H"]
]

// returns: "Hey"
```

6. __SELECT__ should perform the operation following it on the range from start to end. Start index is inclusive and end index is exclusive. If the selection is greater than length of the current text, select up to the end. If __SELECT__ operation is followed by another __SELECT__, the most recent should be used. If the start of the __SELECT__ is outside the range of the current text, the entire operation should be ignored. The different uses of __SELECT__ are further described below.

__SELECT__ and __BACKSPACE__ should remove the selected characters:
```js
input = [
    ["1548185072721", "APPEND", "Hello"],
    ["1548185072722", "SELECT", "1", "3"],
    ["1548185072723", "BACKSPACE"]
]

// returns: "Hlo"
```

__SELECT__ and __APPEND__ should replace the selected characters with the appended characters:
```js
input = [
    ["1548185072721", "APPEND", "Hello"],
    ["1548185072722", "SELECT", "2", "5"],
    ["1548185072723", "APPEND", "y there"]
]

// returns: "Hey there"
```

7. __BOLD__ should __APPEND__ * characters before the first selected character and after the last selected character when characters are selected:
```js
input = [
    ["1548185072721", "APPEND", "Hello"],
    ["1548185072722", "SELECT", "1", "3"],
    ["1548185072723", "BOLD"]
]

// returns: "H*el*lo"
```
Example

```js
// For
input = [["0", "APPEND", "Hey"],
         ["1", "APPEND", " there"],
         ["2", "APPEND", "!"]]
// the output should be textEditor(input) = "Hey there!".

// For
input = [["0", "APPEND", "This"],
         ["1", "APPEND", " is "],
         ["2", "BACKSPACE"],
         ["3", "APPEND", " a "],
         ["4", "APPEND", "second test"]]
// the output should be textEditor(input) = "This is a second test".
```

Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.string input

An array of operations need to be applied to the text editor. It is guaranteed that each operation is one of the operations described in the description, all operation parameters are given in correct format, and the text editor will never be in an incorrect state that is not described in the description.

[output] string