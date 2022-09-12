# TypeScript Thursday

TypeScript workshop

# Getting started

## Editor

Recommended editor is [VSCode](https://code.visualstudio.com/) because it has excellent TypeScript support.
And it has a very useful plugin: [TypeScript Error Translator](https://github.com/mattpocock/ts-error-translator),
which helps us translate TypeScript errors into something more readable and understandable.

Feel free to use another editor if you are more comfortable with that.

## Setup

1. Run `yarn`.

## How to

The workshop is split into exercises. Each exercise is split into a `*.problem.ts` and a `*.solution.ts`.

All the exercises are nested under sections. These sections refer to the sections in the [TypeScript Tutorial](https://www.typescripttutorial.net/)

### Workshop workflow

1. Read the section in the tutorial.
2. Find and solve the exercises associated with the section in the `src/0X-XXX/` folder.
3. Attempt to solve the problems in the exercise, using things you learned in the tutorial.

### Exercises

To take an exercise:

1. Go into `*.problem.ts`.
2. Run `yarn exercise 01 03`, where `01` is the section number and `03` is the number of the exercise you're on.

The `exercise` script will run TypeScript typechecks and a test suite on the exercise.

You'll know if you've succeeded because the tests will pass.

You can run `yarn solution 01 03` to run the tests and typechecking on the solution.

## Commands

### `yarn exercise 01 03`

Alias: `yarn e 01 03`

Run the corresponding `*.problem.ts` file.

### `yarn solution 01 03`

Alias: `yarn s 01 03`

Run the corresponding `*.solution.ts` file.

# Useful links

- [TypeScript Tutorial](https://www.typescripttutorial.net/)
- [TypeScript Docs](https://www.typescriptlang.org/docs/handbook/intro.html)
