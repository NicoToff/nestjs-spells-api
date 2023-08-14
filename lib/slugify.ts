export function slugify(str: string): string {
  const normalizedKey = str
    .replace(/[^\w\s]/g, "") // Remove all characters that are not letters, numbers, underscores or spaces, tabs and newlines.
    .toLowerCase()
    .trim();
  const slug = normalizedKey.replace(/[_\s+]/g, "-"); // All underscores, tabs, new lines or spaces become "-"
  return slug;
}
