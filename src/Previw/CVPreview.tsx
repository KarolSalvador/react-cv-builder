import type { CVData } from "../types/cv.types";
import {
  formatPhone,
  formatDate,
  formatDescription,
} from "../utils/textProcessing";

interface CVPreviewProps {
  cvData: CVData;
}

export default function CVPreview({ cvData }: CVPreviewProps) {
  const { personalInfo, skills, experiences, education, languages } = cvData;

  return (
    <div className="p-8 font-sans bg-white">
      <div className="p-6 rounded-t-lg mb-6">
        <h1 className="text-4xl font-bold text-gray-800">
          {personalInfo.name}
        </h1>
        <p className="text-gray-600">
          Email: {personalInfo.email} | Tel: {formatPhone(personalInfo.phone)} |
          Local: {personalInfo.city}
        </p>
        <div className="flex flex-row justify-start gap-2">
          <p className="text-gray-600">
            Linkedin:
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {personalInfo.linkedin}
            </a>
          </p>
          <p>|</p>
          <p className="text-gray-600">
            GitHub:
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {personalInfo.github}
            </a>
          </p>
        </div>
      </div>

      <div className="w-3/3 pr-6">
        <section className="mb-6">
          <h2 className="text-2xl font-bold border-b-2 border-blue-300 pb-2 mb-4">
            OBJETIVO
          </h2>
          <p
            className="text-gray-700"
            dangerouslySetInnerHTML={{
              __html: formatDescription(personalInfo.summary),
            }}
          ></p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold border-b-2 border-blue-300 pb-2 mb-4">
            HISTÓRICO PROFISSIONAL
          </h2>
          <ul className="space-y-4">
            {experiences.map((exp, index) => (
              <li key={index} className="relative">
                <h3 className="text-lg font-semibold">{exp.company}</h3>
                <p className="text-gray-600">{exp.position}</p>
                <p className="text-sm text-gray-500">
                  Período: {formatDate(exp.startDate)} -
                  {exp.isCurrent ? "Trabalho Atual" : formatDate(exp.endDate)}
                </p>
                <p
                  className="text-gray-700 mt-2"
                  dangerouslySetInnerHTML={{
                    __html: formatDescription(exp.description),
                  }}
                ></p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold border-b-2 border-blue-300 pb-2 mb-4">
            FORMAÇÃO ACADÊMICA
          </h2>
          <ul className="space-y-4">
            {education.map((edu, index) => (
              <li key={index}>
                <p className="font-semibold text-lg ">{edu.course}</p>
                <h3 className="text-gray-700">{edu.institution}</h3>
                <p className="text-sm text-gray-500">
                  {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                </p>
                <p className="text-sm text-gray-500">Status: {edu.status}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold border-b-2 border-blue-300 pb-2 mb-4">
            HABILIDADES
          </h2>
          <ul className="list-disc list-inside space-y-2 grid grid-cols-3">
            {skills.map((skill, index) => (
              <li key={index}>
                <span className="font-semibold">{skill.name}</span> -{" "}
                {skill.level}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold border-b-2 border-blue-300 pb-2 mb-4">
            Idiomas
          </h2>
          <ul className="list-disc list-inside space-y-2 grid grid-cols-3">
            {languages.map((lang, index) => (
              <li key={index}>
                <span className="font-semibold">{lang.name}</span> -{" "}
                {lang.level}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
