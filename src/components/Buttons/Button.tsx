type ButtonProps = {
  hasBg: boolean;
  children: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export const Button = ({
  hasBg,
  onClick,
  children,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`text-white text-[14px] my-2 px-4 py-2 text-sm rounded-lg transition-colors
    duration-300 transform
    ${
      hasBg
        ? "bg-[#d6b56e] hover:bg-opacity-80"
        : "border border-solid border border-[#d6b56e] text-[#ba8638] hover:bg-[#d6b56e] hover:text-white"
    }
    ${
      disabled
        ? "border-none pointer-events-none"
        : "bg-[#d6b56e] hover:bg-opacity-80"
    }
    cursor-pointer"`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
