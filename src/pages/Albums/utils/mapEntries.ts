import { Entry, EntryApi } from '../../../types/Entry';

export const mapEntries = (entries: EntryApi[]): Entry[] =>
  entries.map((entry) => ({
    name: entry['im:name'].label,
    title: entry.title.label,
    image: entry['im:image'][0].label,
    price: entry['im:price'].label,
    link: entry.link.attributes.href,
    id: entry.id.attributes['im:id'],
    artist: entry['im:artist'].label,
    category: entry.category.attributes.label,
  }));
