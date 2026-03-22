import { assetUrl } from "../utils/assets";

const ProjectDetails = ({
  title,
  description,
  subDescription = [],
  href,
  image,
  tags = [],
  closeModal,
}) => {
  return (
    <article className="grid gap-8 py-10 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="space-y-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-3xl font-semibold">{title}</p>
            <p className="mt-3 max-w-2xl text-neutral-300">{description}</p>
          </div>
          <button
            type="button"
            onClick={closeModal}
            className="rounded-md border border-white/10 px-3 py-2 text-sm text-neutral-300 transition-colors hover:border-white/30 hover:text-white"
          >
            Close
          </button>
        </div>

        <div className="flex flex-wrap gap-3 text-sand">
          {tags.map((tag) => (
            <span
              key={tag.id}
              className="rounded-full border border-sand/30 px-3 py-1 text-sm"
            >
              {tag.name}
            </span>
          ))}
        </div>

        {subDescription.length > 0 && (
          <div className="space-y-3">
            {subDescription.map((item, index) => (
              <p key={`${title}-${index}`} className="text-neutral-300">
                {item}
              </p>
            ))}
          </div>
        )}

        {href && (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sand transition-colors hover:text-white"
          >
            View project
            <img
              src={assetUrl("assets/arrow-up.svg")}
              alt=""
              className="h-4 w-4"
            />
          </a>
        )}
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <img
          src={image}
          alt={title}
          className="h-full max-h-[28rem] w-full object-cover"
        />
      </div>
    </article>
  );
};

export default ProjectDetails;
