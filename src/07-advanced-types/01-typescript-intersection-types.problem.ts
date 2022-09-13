import { expect, it } from "vitest";

interface Child1ComponentProps {
  width: number;
  backgroundColor: string;
  onClick: () => void;
}

interface Child2ComponentProps {
  width: number;
  color: string;
  onFocus: () => void;
  onBlur: () => void;
}

// Task: Create a ParentComponentProps type that is the intersection of both child component's interfaces

it("Should be able to create parent component props with all the props of it's children", () => {
  const props: ParentComponentProps = {
    width: 120,
    backgroundColor: "black",
    color: "hotpink",
    onClick: () => {
      console.log("CLICKED!");
    },
    onFocus: () => {
      console.log("FOCUSED!");
    },
    onBlur: () => {
      console.log("FOCUS LOST!");
    },
  };

  expect(Object.keys(props).length).toBe(6);
});

// Task: Create a ChildOfChild1ComponentProps that has all the properties of Child1ComponentProps and a `border` prop as an optional string, without repeating lines

it("Should be able to create a child of child component 1 with the same props and its own", () => {
  const props: ChildOfChild1ComponentProps = {
    width: 200,
    backgroundColor: "yellow",
    onClick: () => {
      alert("I was clicked! :O");
    },
    border: "1px solid black",
  };

  expect(Object.keys(props).length).toBe(4);
});
