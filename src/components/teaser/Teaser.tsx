type TeaserProps = {
  img?: string | null | undefined;
  title?: string | null;
  subtitle?: string | null;
  description?: string | null;
  className?: string;
  clickAction?: () => void;
};

function Teaser({
  img,
  title,
  subtitle,
  description,
  clickAction,
  className,
}: TeaserProps) {
  return (
    <button
      className={`flex w-full items-stretch gap-4 text-slate-400 ${className}`}
      onClick={clickAction}
    >
      <img
        className="h-24 w-24 rounded"
        src={img || 'https://ionicframework.com/docs/img/demos/thumbnail.svg'}
        alt="thumbnail"
      />
      <div className="flex flex-col justify-center">
        {title && <span>{title}</span>}
        {subtitle && <span>{subtitle}</span>}
        {description && <span>{description}</span>}
      </div>
    </button>
  );
}

export default Teaser;
