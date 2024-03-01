export const User = ({
  name,
  email,
  dob,
}: {
  name: string;
  email: string;
  dob?: number;
}) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>
        {email} • {dob ? new Date().getFullYear() - dob : null}
      </p>
    </div>
  );
};
