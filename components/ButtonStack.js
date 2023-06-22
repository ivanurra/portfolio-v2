export const ButtonStack = ({ stack }) => {
  return (
    <button className="rounded-full bg-green-secondary text-green-primary mt-6 mr-2 p-2">
      <span className="text-xs">{stack}</span>
    </button>
  );
};
