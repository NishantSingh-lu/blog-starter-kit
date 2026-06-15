import { type Author } from "@/interfaces/author";
import Link from "next/link";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({ title, coverImage, date, excerpt, slug }: Props) {
  return (
    <Link href={`/posts/${slug}`} className="group block rounded-2xl border border-neutral-200 dark:border-slate-700 overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <CoverImage title={title} src={coverImage} />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:underline">{title}</h3>
        <div className="text-sm text-neutral-500 dark:text-slate-400 mb-3">
          <DateFormatter dateString={date} />
        </div>
        <p className="text-sm leading-relaxed text-neutral-600 dark:text-slate-400 line-clamp-3">{excerpt}</p>
      </div>
    </Link>
  );
}
