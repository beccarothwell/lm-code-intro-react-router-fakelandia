function validateSubject(value: string) {
  const errorMessages: string[] = [];

  if (value.length === 0) {
    errorMessages.push("Please provide a subject");
  }
  if (value.length > 20) {
    errorMessages.push("Subject cannot be more than 20 characters");
  }
  if (!/\p{Extended_Pictographic}/u.test(value)) {
    errorMessages.push("Please include an emoji");
  }

  return errorMessages;
}

export default validateSubject;
