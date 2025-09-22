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

export const formatDate = (dateString: string): string => {
  if (!dateString) {
    return "";
  }

  const [year, month] = dateString.split("-");
  const monthNames = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const monthIndex = parseInt(month, 10) - 1;
  return `${monthNames[monthIndex]} de ${year}`;
};
