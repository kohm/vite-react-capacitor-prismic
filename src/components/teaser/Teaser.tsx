type TeaserProps = {
  img?: string;
  title?: string | null;
  subtitle?: string | null;
  description?: string | null;
  clickAction?: () => void;
};

function Teaser({
  img,
  title,
  subtitle,
  description,
  clickAction,
}: TeaserProps) {
  return (
    <button
      className="flex w-full items-stretch gap-4 text-slate-400"
      onClick={clickAction}
    >
      <img
        className="h-20 w-20"
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
