// Note: Both functions should have a return type in this exercise

const logMessage = (message: string): void => {
  console.log(message);
};

const logAndReturnMessage = (message: string): string => {
  console.log(message);

  return message;
};

// Needed to make this a module
export {};
