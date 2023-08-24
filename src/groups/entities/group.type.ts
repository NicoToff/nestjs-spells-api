export const GROUPS = ["Elemental Torrents"] as const;
export type GroupName = (typeof GROUPS)[number];
export const isGroupName = (value: unknown): value is GroupName => {
  return GROUPS.includes(value as GroupName);
};
