import { LocalizedEntity } from "@/types/common";

// Utility functions for dynamic localization
export const getLocalizedValue = (obj: Record<string, unknown>, key: string, locale: string): string => {
  // Try to get localized key first (e.g., question_en, question_ru)
  const localizedKey = `${key}_${locale}`;
  if (obj[localizedKey] !== undefined && typeof obj[localizedKey] === 'string') {
    return obj[localizedKey];
  }
  
  // Fallback to base key (e.g., question)
  if (obj[key] !== undefined && typeof obj[key] === 'string') {
    return obj[key];
  }
  
  // Fallback to English if available
  if (locale !== 'en') {
    const englishKey = `${key}_en`;
    if (obj[englishKey] !== undefined && typeof obj[englishKey] === 'string') {
      return obj[englishKey];
    }
  }
  
  // Return empty string if nothing found
  return '';
};

// Transform data to use dynamic keys
export const transformDataForLocalization = <T extends LocalizedEntity>(data: T[], locale: string): T[] => {
  return data.map(item => {
    const transformed = { ...item } as Record<string, unknown>;
    
    // List of keys that should be localized
    const localizableKeys = ['question', 'answer', 'title', 'description', 'content'];
    
    localizableKeys.forEach(key => {
      if (item[key] !== undefined) {
        // Remove the base key
        delete transformed[key];
        
        // Add localized value
        transformed[key] = getLocalizedValue(item, key, locale);
      }
    });
    
    return transformed as T;
  });
};

// Get localized field from object
export const getLocalizedField = (obj: Record<string, unknown>, field: string, locale: string): string => {
  return getLocalizedValue(obj, field, locale);
};
