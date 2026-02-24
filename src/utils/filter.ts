/**
 * Interface representing an item with a date property
 */
interface DatedItem {
  date: string | Date;
  [key: string]: any; // Allow additional properties
}

/**
 * Takes an array of items as input and returns the latest
 * item based on the date property.
 * @param items - An array of items with date properties.
 * @returns return the latest item from the filtered array.
 */
export const getLatestItem = <T extends DatedItem>(items: T[]): T => {
  // Sort the items by date in descending order
  const sortedItems = [...items].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Return the latest item (i.e., the first item in the sorted array)
  return sortedItems[0];
};

/**
 * This function takes an array of items as input and returns a new array
 * of items sorted by date in descending order, but excluding the latest item.
 * @param items - An array of items with date properties.
 * @returns Sorted array without the latest item.
 */
export const getSortedItemsWithoutLatest = <T extends DatedItem>(items: T[]): T[] => {
  // Make a copy of the original array to avoid modifying it
  const copy = [...items];

  // Sort the items by date in descending order
  const sortedItems = copy.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Remove the latest item (i.e., the first item in the sorted array)
  sortedItems.shift();

  // Return the sorted array without the latest item
  return sortedItems;
};

/**
 * Sort order type
 */
type SortOrder = "asc" | "desc" | string;

/**
 * This function takes an array of items as input and returns a new array
 * of items sorted by date in given order.
 * Default sort is descending.
 * @param items - An array of items with date properties.
 * @param order - A string with the order ASC, DESC.
 * @returns Sorted array.
 */
export const getSortedItems = <T extends DatedItem>(
  items: T[], 
  order: SortOrder = "desc"
): T[] => {
  // Make a copy of the original array to avoid modifying it
  const copy = [...items];

  if (order && order.toLowerCase() === "asc") {
    // Sort the items by date in ascending order
    const sortedItems = copy.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    // Return the sorted array
    return sortedItems;
  }

  // Sort the items by date in descending order
  const sortedItems = copy.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Return the sorted array
  return sortedItems;
};

/**
 * A utility function to randomize the order of an array
 * @param arr - The array to randomize
 * @returns The randomized array
 */
export function shuffleItems<T>(arr: T[]): T[] {
  // Create a new array to store the randomized elements
  const shuffled = [...arr];

  // Loop through the array from the end to the beginning
  for (let i = shuffled.length - 1; i > 0; i--) {
    // Generate a random index between 0 and i (inclusive)
    const j = Math.floor(Math.random() * (i + 1));

    // Swap the element at index i with the element at index j
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Return the shuffled array
  return shuffled;
}