interface CardProps {
  name: string;
  role: string;
  text: string;
}

export const UserChallengeCard = ({ name, role, text }: CardProps) => (
  <div className="bg-[#FAFAFA] overflow-hidden rounded-3xl flex flex-col shadow-[0_0_16px_rgba(0,0,0,0.25)]">
    <div className="px-4 py-5 sm:p-4 flex-grow">
      <div className="flex items-center gap-3 mb-4">
        <div>
          <h3 className="text-lg font-medium">{name}</h3>
          <p className="text-sm text-wrap">{role}</p>
        </div>
      </div>
      <p>{text}</p>
    </div>
  </div>
);
