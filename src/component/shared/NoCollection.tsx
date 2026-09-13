import { CollectionIcon, Img } from "../../icons/Icons";

export default function NoCollection({
  icon,
  title,
  className,
}: {
  icon: string;
  title: string;
  className: { container: string; icon: string };
}) {
  return (
    <div className={`icon-btn ${className.container}`}>
      {icon === "img" ? (
        <Img className={className.icon} />
      ) : (
        <CollectionIcon className={className.icon} />
      )}
      <p>there is no {title} to show</p>
    </div>
  );
}
