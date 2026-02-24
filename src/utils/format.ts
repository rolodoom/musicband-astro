import { SITE_CONFIG } from "@/config/site";

/**
 * This function takes a YouTube video ID as input and returns the URL of the
 * maximum resolution thumbnail for that video.
 * @param videoId - An string with the video Id.
 * @returns An string with the URL of the image.
 */
export const getYouTubeThumbnailUrl = (videoId: string): string => {
  // Construct the URL for the maximum resolution thumbnail using the video ID
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  // Return the maximum resolution thumbnail URL
  return thumbnailUrl;
};

/**
 * Converts a date string in YYYY-MM-DD format to a formatted date string.
 * @param {string} dateString - A date string in YYYY-MM-DD format.
 * @returns {string} A formatted date string.
 */
export const formatDate = (dateString: string): string => {
  // Create a new Date object from the input string
  const date = new Date(dateString);

  // Set formatting options: full year, full month name, and numeric day
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  // Format the date using the site's locale from config
  const formattedDate: string = new Intl.DateTimeFormat(
    SITE_CONFIG.locale,
    options,
  ).format(date);

  // Return the formatted date string
  return formattedDate;
};

/**
 * Converts a string into a URL-friendly slug.
 *
 * This function processes the input text by:
 * 1. Converting it to lowercase
 * 2. Trimming whitespace from both ends
 * 3. Removing all special characters (keeping only word characters, spaces, and hyphens)
 * 4. Replacing spaces with hyphens
 *
 * @param text - The string to convert into a slug
 * @returns A URL-friendly slug string
 *
 * @example
 * // Returns "hello-world"
 * slugify("Hello World!");
 *
 * @example
 * // Returns "my-awesome-blog-post"
 * slugify("My Awesome Blog Post!!!");
 *
 * @example
 * // Returns "products-123"
 * slugify("  Products 123  ");
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // remove special chars
    .replace(/\s+/g, "-"); // spaces to dashes
}

/**
 * Converts a string to Title Case (first letter of each word capitalized)
 * @param text - The input string to convert
 * @returns The title cased string
 *
 * @example
 * toTitleCase("hello world") // "Hello World"
 * toTitleCase("the quick brown fox") // "The Quick Brown Fox"
 */
export function toTitleCase(text: string): string {
  if (!text) return text;

  return text
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Gets the file extension of a given URL.
 *
 * @param {string} url - The URL of the file.
 * @returns {string} The file extension (without the dot), or an empty string if the URL has no extension.
 */
export const getFileExtension = (url: string): string => {
  // Get the last part of the URL by splitting it with a slash
  const parts = url.split("/");
  const filename = parts[parts.length - 1];

  // Get the file extension by splitting the filename with a dot
  const extensionParts = filename.split(".");

  // If there is no dot, return an empty string
  if (extensionParts.length === 1) {
    return "";
  }

  // Otherwise, return the last part of the extension (the file type)
  return extensionParts[extensionParts.length - 1];
};

/**
 * Gets the FontAwesome icon id string of a given extension of a file.
 *
 * @param {string} extension - The extension of the file.
 * @returns {string} The file icon id.
 */
export const getIconId = (extension: string): string => {
  interface IconDictionary {
    [key: string]: string;
  }

  const dictionary: IconDictionary = {
    zip: "zipper",
    xlsx: "excel",
    xls: "excel",
    docx: "word",
    doc: "word",
    pdf: "pdf",
  };

  // Check if the extension is in the dictionary
  if (extension in dictionary) {
    // If it is, return its definition
    return `file-${dictionary[extension]}`;
  }
  // If it's not, return "file"
  return "file";
};
