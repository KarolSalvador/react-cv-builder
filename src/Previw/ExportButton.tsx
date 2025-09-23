import type React from "react";
import { exportCV } from "../services/pdfService";

interface ExportButtonProps {
  cvElementRef: React.RefObject<HTMLDivElement | null>;
  fileName: string;
}

export default function ExportButton({
  cvElementRef,
  fileName,
}: ExportButtonProps) {
  const handleExport = () => {
    if (cvElementRef.current) {
      console.log("Referência do elemento encontrada!");
      exportCV(cvElementRef.current, fileName);
    } else {
      console.log("Erro: Referência do elemento não encontrada!");
    }
  };

  return (
    <button
      onClick={handleExport}
      className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 font-bold"
    >
      Exportar para PDF
    </button>
  );
}
