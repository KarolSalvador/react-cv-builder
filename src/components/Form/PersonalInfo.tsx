interface PersonalInfoProps {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    linkedin: string;
    city: string;
    summary: string;
  };
  onUpdate: (data: Partial<PersonalInfoProps["personalInfo"]>) => void;
}

export default function PersonalInfo({
  personalInfo,
  onUpdate,
}: PersonalInfoProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-bold mb-4">Dados Pessoais</h2>
      <div className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={personalInfo.name}
            onChange={(e) => onUpdate({ name: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:rind-indigo-500 sm:text-sm p-2 border"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={personalInfo.email}
            onChange={(e) => onUpdate({ email: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:rind-indigo-500 sm:text-sm p-2 border"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Telefone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={personalInfo.phone}
            onChange={(e) => onUpdate({ phone: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:rind-indigo-500 sm:text-sm p-2 border"
          />
        </div>
        <div>
          <label
            htmlFor="linkedin"
            className="block text-sm font-medium text-gray-700"
          >
            Linkedin
          </label>
          <input
            type="url"
            id="linkedin"
            name="linkedin"
            value={personalInfo.linkedin}
            onChange={(e) => onUpdate({ linkedin: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:rind-indigo-500 sm:text-sm p-2 border"
          />
        </div>
        <div>
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700"
          >
            Cidade
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={personalInfo.city}
            onChange={(e) => onUpdate({ city: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:rind-indigo-500 sm:text-sm p-2 border"
          />
        </div>
        <div>
          <label
            htmlFor="summary"
            className="block text-sm font-medium text-gray-700"
          >
            Objetivo
          </label>
          <textarea
            id="summary"
            name="summary"
            rows={4}
            value={personalInfo.summary}
            onChange={(e) => onUpdate({ summary: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
          ></textarea>
        </div>
      </div>
    </div>
  );
}
