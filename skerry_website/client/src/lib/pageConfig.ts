// Configuration for pages that should have transparent navigation/footer
export const BACKGROUND_PAGES = ['/', '/website'];

// Helper function to check if a page should have transparent navigation/footer
export const isBackgroundPage = (location: string): boolean => {
  return BACKGROUND_PAGES.includes(location);
};