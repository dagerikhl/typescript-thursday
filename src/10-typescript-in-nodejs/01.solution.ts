import { expect, it } from "vitest";

/*
 If you've made it this far, you've been through most of TypeScript's features!
 This workshop has been through most of the basic features, but hasn't touched
 that much upon the more advanced features or advanced usage of the basic
 features. For more resources, please refer to the README.

 And: WELL DONE! :D

 For more information about the author, check out https://dagerikhl.github.io/
 */

/*
 If you're still up for setting up a project in TypeScript, I leave it in your
 now capable hands. Follow the instructions in the Tutorial section to set up
 your own Node TS project and make what ever you like! Try to explore the
 possibilities and limitations of TypeScript, and challenge the things you've
 learned, and how you can use those building blocks to build more advanced
 type safety in your project.
 */

it("Should be completed", async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  expect("Participant has completed the course").toBeTruthy();
});

(async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  console.log(
    "For an example of a TypeScript app, check out the author's small component library"
  );

  const open = require("open");
  await open("https://github.com/dagerikhl/primors");
})();
