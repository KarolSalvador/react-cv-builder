export const formatPhone = (value: string): string => {
  const digitsOnly = value.replace(/\D/g, "");

  if (digitsOnly.length === 11) {
    return `(${digitsOnly.substring(0, 2)}) ${digitsOnly.substring(
      2,
      7
    )}-${digitsOnly.substring(7, 11)}`;
  }

  return value;
};
