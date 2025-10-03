// Common types for the application

export interface BaseEntity {
  id: number;
}

export interface LocalizedText {
  [key: string]: string;
}

export interface LocalizedEntity extends BaseEntity {
  [key: string]: string | number | LocalizedText | undefined;
}

// Generic types for API responses
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

// Generic types for pagination
export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Common form types
export interface FormField {
  name: string;
  value: string;
  error?: string;
  required?: boolean;
}

// Common component props
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Common hook return types
export interface UseQueryResult<T> {
  data: T | undefined;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  refetch: () => void;
}

// Common event types
export interface BaseEvent {
  preventDefault: () => void;
  stopPropagation: () => void;
}

export interface MouseEvent extends BaseEvent {
  target: EventTarget | null;
  currentTarget: EventTarget | null;
}

export interface KeyboardEvent extends BaseEvent {
  key: string;
  code: string;
  ctrlKey: boolean;
  shiftKey: boolean;
  altKey: boolean;
  metaKey: boolean;
}
