export interface IPost {
  id: string;
  author: string;
  title: string;
  content: string;
  published?: boolean | null;
}
