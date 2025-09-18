import type { CVData } from "../types/cv.types";

interface CVPreviewProps {
  cvData: CVData;
}

export default function CVPreview({ cvData }: CVPreviewProps) {
  const { personalInfo } = cvData;

  return (
    <div className="p-8 font-sans">
      <div className="bg-blue-200 p-6 rounded-t-lg mb-6">
        <h1 className="text-4xl font-bold text-gray-800">
          {personalInfo.name}
        </h1>
        <p className="text-gray-600">
          {personalInfo.email} | {personalInfo.phone} | Fortaleza - Ce
        </p>
        <p className="text-blue-500 hover:underline">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            {personalInfo.linkedin}
          </a>
        </p>
      </div>

      <div className="flex">
        <div className="w-2/3 pr-6">
          <section className="mb-6">
            <h2 className="text-2xl font-bold border-b-2 border-blue-300 pb-2 mb-4">
              OBJETIVO
            </h2>
            <p className="text-gray-700">{personalInfo.summary}</p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-bold border-b-2 border-blue-300 pb-2 mb-4">
              EXPERIÊNCIA
            </h2>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-bold border-b-2 border-blue-300 pb-2 mb-4">
              FORMAÇÃO ACADÊMICA
            </h2>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-bold border-b-2 border-blue-300 pb-2 mb-4">
              HABILIDADES
            </h2>
          </section>
        </div>
      </div>
    </div>
  );
}
