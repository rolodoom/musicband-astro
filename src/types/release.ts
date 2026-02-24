export interface Release {
  title: string;
  subtitle: string;
  date: string;
  image: string;
  description: string;
  format: string;
  label: string;
  streaming: {
    name: string;
    url: string;
  }[];
}
