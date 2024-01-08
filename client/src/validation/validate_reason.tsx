function validateReason(value: string) {
  const errorMessages: string[] = [];

  if (value.length === 0) {
    errorMessages.push("Please provide a reason for contact");
  }

  return errorMessages;
}

export default validateReason;
