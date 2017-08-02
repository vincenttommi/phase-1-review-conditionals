# JavaScript Conditionals

## Objectives
1. Explain what constitutes an expression in JavaScript.
2. Organize code using block statements.
3. Describe the difference between truthy and falsy values.
4. Employ `if...else` statements to conditionally execute blocks of code.
5. Rewrite an `if...else` as a one-liner with the ternary operator.
6. Use a `switch` statement to selectively execute code based on the value of an expression.

## Overview
In all facets of life, we constantly make conditional choices:
- `if` hungry :arrow_right: make sandwich.
  + `else` :arrow_right: don't make sandwich.
- `if` light is green :arrow_right: press gas pedal.
  + `else` :arrow_right: press brake pedal.
- `if` it's the first of the month :arrow_right: pay rent.
  + `else` :arrow_right: don't pay rent.

Writing code involves the same type of logic — we only want an action to happen _if_ a certain condition is met. In the programming world, this is called **control flow** because, well, it helps _control_ the _flow_ of an application.

Before we dive into JavaScript's conditional structures, let's go over a few concepts that provide the syntactic underpinnings.

## Expressions
Can't phrase it any better than MDN's definition:
>An expression is any valid unit of code that resolves to a value.

Primitive values are expressions because they resolve to a value:
```js
9
//=> 9

'Hello, world!'
//=> "Hello, world!"

false
//=> false
```

So are arithmetic and string operations:
```js
// Resolves to the number 64
8 * 8
//=> 64

// Resolves to the string "Hello, world!"
'Hello, ' + 'world!'
//=> "Hello, world!"
```

Ditto for comparison and assignment operations:
```js
// Resolves to the boolean 'true'
2 > 1
//=> true

// Variable declarations are NOT expressions...
let answer;
//=> undefined

// ...but variable assignments ARE, resolving to the assigned value (42, in this case)
answer = 42;
//=> 42
```

And references to variables, as well:
```js
const fullName = 'Ada Lovelace';
//=> undefined

// Resolves to the value that the variable contains
fullName;
//=> "Ada Lovelace"
```

## Block statements
A block statement is a pair of curly braces (`{ }`) used to group JavaScript statements. It plays a featured role in conditional statements, loops, and functions.
```js
{
  'This line is a JavaScript statement nested inside a block statement!';

  // This is also a statement nested inside a block:
  5 * 5 - 5

  // And so are these:
  const weCan = 'group multiple statements';

  const suchAs = 'these variable declarations';

  const insideA = 'block statement.';
}
//=> 20
```

Block statements return the value of the last evaluated expression. In the above example, the variable declarations are _not_ expressions, so the value of `5 * 5 - 5` is returned.

## Truthiness and falsiness
Truthiness and falsiness indicate what happens when the value is converted into a boolean. If, upon conversion, the value becomes `true`, we say that it's a **truthy** value. If it becomes `false`, we say that it's **falsy**.

In JavaScript, the following values are **falsy**:
- `false`
- `null`
- `undefined`
- `0`
- `NaN`
- An empty string (` `` `, `''`, `""`)

***Every other value is truthy***.

To check whether a value is truthy or falsy in our browser's JS console, we can pass it to the global `Boolean` object, which converts the value into its boolean equivalent:
```js
Boolean(false);
//=> false

Boolean(null);
//=> false

Boolean(undefined);
//=> false

Boolean(0);
//=> false

Boolean(NaN);
//=> false

Boolean('');
//=> false

Boolean(true);
//=> true

Boolean(42);
//=> true

Boolean('Hello, world!');
//=> true

Boolean( { firstName: 'Brendan', lastName: 'Eich' } );
//=> true
```

***NOTE***: `document.all` is also falsy, but don't worry about it for now. (Or ever, really — it's an imperfect solution for legacy code compatibility.)

Ready to put that killer new vocabulary to the test? Here we go!

## Conditional statements
In JavaScript, we use three structures for implementing condition-based control flow: the `if...else` statement, ternary operator, and `switch` statement.

### `if` statement
`if` statements are the most common type of conditional, and they're pretty straightforward:
```js
if (condition) {
  // Block of code
}
```

If the condition evaluates to a **truthy** value, run the code inside the **block**:
```js
const age = 30;
//=> undefined

let isAdult;
//=> undefined

if (age >= 18) {
  isAdult = true;
}
//=> true

isAdult;
//=> true
```

If the condition evaluates to a **falsy** value, do nothing:
```js
const age = 14;
//=> undefined

let isAdult;
//=> undefined

if (age >= 18) {
  isAdult = true;
}
//=> undefined

isAdult;
//=> undefined
```

#### `else`
If we want to run some code when the condition evaluates to a `falsy` value, we can use an `else` clause:
```js
const age = 14;
//=> undefined

let isAdult;
//=> undefined

if (age >= 18) {
  isAdult = true;
} else {
  isAdult = false;
}
//=> false

isAdult;
//=> false
```

#### `else if`
We can also chain multiple conditions with `else if` clauses:
```js
const age = 20;
//=> undefined

let isAdult, canVote, canEnlist, canDrink;
//=> undefined

if (age >= 21) {
  isAdult = true;
  canVote = true;
  canEnlist = true;
  canDrink = true;
} else if (age >= 18) {
  isAdult = true;
  canVote = true;
  canEnlist = true;
  canDrink = false;
} else if (age >= 16) {
  isAdult = false;
  canVote = true;
  canEnlist = false;
  canDrink = false;
} else {
  isAdult = false;
  canVote = false;
  canEnlist = false;
  canDrink = false;
}
//=> false

isAdult;
//=> true

canVote;
//=> true

canEnlist;
//=> true

canDrink;
//=> false
```

As soon as one of the conditions evaluates to a truthy value, the attached code block runs and the conditional exits. If none of the conditions evaluate to a truthy value, then the `else` code block runs (or, in the absence of an `else` clause, the conditional simply exits).

### Ternary operator
The ternary operator is a good way to represent an `if...else` statement in a single line of code:
```js
condition ? expression1 : expression2;
```

If the condition evaluates to a truthy value, run the code in `expression1`. If the condition evaluates to a falsy value, run the code in `expression2`.

```js
const age = 45;
//=> undefined

let isAdult;
//=> undefined

age >= 18 ? isAdult = true : isAdult = false;
//=> true

isAdult;
//=> true
```

In the above example, we assign `isAdult` as `true` if the condition evaluates to a truthy value and as `false` otherwise. We can simplify that a bit and assign the result of the ternary statement directly to a variable:
```js
const age = 60;
//=> undefined

const isAdult = age >= 18 ? true : false;
//=> undefined

isAdult;
//=> true
```

If it helps you visualize what's going on, you can wrap the condition, the expressions, or the entire statement in parentheses:
```js
const age = 17;
//=> undefined

const isAdult = (age >= 18) ? true : false;
//=> undefined

const canVote = age >= 16 ? (1 === 1) : (1 !== 1);
//=> undefined

const canEnlist = (isAdult ? true : false);
//=> undefined

isAdult;
//=> false

canVote;
//=> true

canEnlist
//=> false
```

### `switch`
The `switch` statement is the final piece of the conditional puzzle. The general structure is as follows:
```js
switch (expression) {
  case value1:
    // Statements
    break;
  case value2:
    // Statements
    break;
  default:
    // Statements
    break;
}
```

The JavaScript engine evaluates the expression and then compares the returned value against each of the `case` values _using strict equality_ (`===`).

```js
const hunger = 'famished';
//=> undefined

let food;
//=> undefined

switch (hunger) {
  case 'light':
    food = 'grapes';
    break;
  case 'moderate':
    food = 'sushi';
    break;
  case 'famished':
    food = 'lasagna';
    break;
}
//=> "lasagna"

food;
//=> "lasagna"
```

We can also assign the same set of statements to multiple cases:
```js
const age = 15;
//=> undefined

let isTeenager;

switch (age) {
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
  case 18:
  case 19:
    isTeenager = true;
    break;
  default:
    isTeenager = false;
    break;
}
```

The `default` and `break` keywords are both optional but useful.

#### `break`
When the JavaScript engine reaches a `break`, it exits the entire `switch` statement. By leaving a `break` at the end of each `case`'s set of statements, we ensure that the `switch` statement will match at most a single `case`. Once it matches the first `case`, it will run that `case`'s statements and then exit. In addition to not accidentally matching multiple `case`s, this also provides a small performance boost because the JavaScript engine doesn't always have to check every single `case`.

#### `default`
The `default` keyword specifies a set of statements to run after all of the `switch` statement's `case`s have been checked. The only time the `default` statements do _not_ run is if the engine hits a `break` in one of the `case` statements.

```js
const mood = 'quizzical';
//=> undefined

let response;
//=> undefined

switch (mood) {
  case 'happy':
    response = 'Heck yea; be happy!';
  case 'sad':
    response = "You're awesome; keep your head up!";
  default:
    response = "Sorry, I don't know how to respond to that mood.";
}
//=> "Sorry, I don't know how to respond to that mood."

response;
//=> "Sorry, I don't know how to respond to that mood."
```

It's typically safer to include `break` statements because it helps avoid bugs like this:
```js
const mood = 'happy';
//=> undefined

let response;
//=> undefined

switch (mood) {
  case 'happy':
    response = 'Heck yea; be happy!';
  case 'sad':
    response = "You're awesome; keep your head up!";
  default:
    response = "Sorry, I don't know how to respond to that mood.";
}
//=> "Sorry, I don't know how to respond to that mood."

response;
//=> "Sorry, I don't know how to respond to that mood."
```

The `'happy'` case matches and assigns the string `'Heck yea; be happy!'` to `response`. However, since we didn't `break` after that assignment, the `default` case _also_ runs and reassigns `"Sorry, I don't know how to respond to that mood."` to `response`. Whoops!

## Flatbook examples
There are tons of control flow structures in the Flatbook code base.

### `if...else`
When a guest tries to log in, check whether the provided email and password match an active account:
```js
let errorMessage = '';
let loggedIn = false;

// *User enters a valid email and password and clicks the Login button*
const email = 'avi@flatbook.com';
const password = 'j4v45cr1pt 15 4w350m3';

// *The Flatbook app then checks whether the provided email and password are valid*
const accountFound = true;
const passwordMatches = false;

if (email === '') {
  errorMessage = 'Please provide an email.';
} else if (password === '') {
  errorMessage = 'Please provide a password.';
} else {
  if (accountFound) {
    if (passwordMatches) {
      loggedIn = true;
    } else {
      errorMessage = "Sorry, that password doesn't match our records.";
    }
  } else {
    errorMessage = 'Sorry, no account matching the provided email address was found.';
  }
}
//=> "Sorry, that password doesn't match our records."

loggedIn;
//=> false

errorMessage;
//=> "Sorry, that password doesn't match our records."
```

### Ternary operator
When a user logs in, check whether it's their birthday. If it is, set a celebratory message to appear in a banner; _else_, set the message to an empty string:
```js
const userBirthday = 'Dec 10';
//=> undefined

const userFullName = 'Ada Lovelace';
//=> undefined

let todaysDate = 'Dec 10';
//=> undefined

const birthdayMessage = (todaysDate === userBirthday) ? `Happy birthday, ${userFullName}!` : '';
//=> undefined

birthdayMessage;
//=> "Happy birthday, Ada Lovelace!"
```

### `switch`
Once the user logs in, set their permissions based on the account type:
```js
const accountType = 'admin';

let permissionsLevel;
let canViewProfiles = false;
let canImpersonateUsers = false;

switch (accountType) {
  case 'guest':
    permissionsLevel = 0;
    break;
  case 'user':
    permissionsLevel = 10;
    canViewProfiles = true;
    break;
  case 'admin':
    permissionsLevel = 20;
    canViewProfiles = true;
    canImpersonateUsers = true;
    break;
}
//=> true

permissionsLevel;
//=> 20
```

It's easy to imagine hundreds of other conditionals that go into the functioning of a large site like Flatbook. They're ubiquitous, so study up!

## Resources
- MDN
  + [Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions)
  + [Block statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block)
  + [Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) and [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
  + [Conditional statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#Conditional_statements)
    * [`if...else` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
    * [Conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
    * [`switch` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
