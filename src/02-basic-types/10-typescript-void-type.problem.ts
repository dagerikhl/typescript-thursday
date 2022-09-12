// Note: Both functions should have a return type in this exercise

const logMessage = (message) => {
  console.log(message);
};

const logAndReturnMessage = (message: string): void => {
  console.log(message);

  return message;
};

// Needed to make this a module
export {};
