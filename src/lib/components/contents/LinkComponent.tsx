interface Props {
  ariaLabel: string;
  children: React.ReactNode;
  href: string;
}

const LinkComponent = ({ ariaLabel, children, href }: Props) => {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className="justify-center hover:text-primary"
      target="_blank"
      rel="noreferrer noopener"
    >
      {children}
    </a>
  );
};

export default LinkComponent;
