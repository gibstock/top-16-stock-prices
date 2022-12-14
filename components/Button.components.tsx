type Props = {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  rounded?: string;
  route?: URL;
  version?: string;
  size?: string;
  px?: string;
  py?: string;
};

export const Button = ({ children, rounded, version, onClick, size, px, py }: Props) => {
  const buttonVersion = () => {
    switch (version) {
      case 'clear':
        return (
          <button
            className="bg-transparent text-black dark:text-white px-5 py-3 rounded-full font-medium border border-black dark:border-white dark:hover:text-black hover:bg-slate-200"
            style={{ borderRadius: rounded, fontSize: size, paddingLeft: px, paddingRight: px, paddingTop: py, paddingBottom: py }}
            onClick={onClick}
          >
            {children}
          </button>
        );
      default:
        return (
          <button
            className="bg-blueBtn text-white px-5 py-3 rounded-xl font-medium"
            style={{ borderRadius: rounded, fontSize: size, paddingLeft: px, paddingRight: px, paddingTop: py, paddingBottom: py }}
            onClick={onClick}
          >
            {children}
          </button>
        );
    }
  };

  return (
    <>{buttonVersion()}</>
  );
};
