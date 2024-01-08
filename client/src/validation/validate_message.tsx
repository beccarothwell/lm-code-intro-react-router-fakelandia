function validateMessage(value: string) {
  const errorMessages: string[] = [];

  if (value.length === 0) {
    errorMessages.push("Please provide a message");
  }
  if (value.length > 280) {
    errorMessages.push("Message cannot be more that 280 characters");
  }

  return errorMessages;
}

export default validateMessage;
