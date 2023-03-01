# JS Activity: Refactor into pure functions
The following files contain code that runs in the global scope of the file on hard-coded variables. Refactor each of these files so that the code is _reusable_ and _portable_ using a pure function.

<dl>
    <dt>Pure function</dt>
    <dd>A function that takes arguments as the only inputs and returns the result as its only output. Pure functions don't make any changes to variables outside of the function or store internal variables as state (aka. side-effects).</dd>
</dl>

## Instructions
For ONE of the `.js` files in this Gist, refactor the following code into a function so that it:
1. accepts the variables (defined at the top of the script) as a parameter(s);
    - Note: the variable(s) defined at the top of each script should remain _outside_ the declared function.
2. returns the result outside of the function using a `return` statement;
3. logs the returned result to the console from _outside_ the function.

You may need to remove irrelevant `<script>` elements in the provided `index.html` file.

## Bonus Activities
- Using the [`window.prompt()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt) method, define your arguments based on user input;
    - Note: `prompt()` will convert numbers to strings. Keep this in mind when performing arithmetic.
- Use [`Number.prototype.toFixed()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) to round numbers as needed.
- Once you're done with your chosen `.js` file, repeat the process for the rest of the files.
