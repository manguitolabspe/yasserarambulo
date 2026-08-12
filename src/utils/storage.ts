import { PostStatus } from '../types';

const STORAGE_KEYS = {
  POST_STATUSES: 'yasser_august_post_statuses',
  DERIVATIVE_STATUSES: 'yasser_august_derivative_statuses',
  CUSTOM_NOTES: 'yasser_august_custom_notes',
  FILTER_PREFERENCES: 'yasser_august_filter_prefs',
};

export const getStoredPostStatuses = (): Record<string, PostStatus> => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.POST_STATUSES);
    return data ? JSON.parse(data) : {};
  } catch (e) {
    console.error('Error reading post statuses from localStorage', e);
    return {};
  }
};

export const savePostStatus = (postId: string, status: PostStatus) => {
  try {
    const current = getStoredPostStatuses();
    current[postId] = status;
    localStorage.setItem(STORAGE_KEYS.POST_STATUSES, JSON.stringify(current));
  } catch (e) {
    console.error('Error saving post status to localStorage', e);
  }
};

export const getStoredDerivativeStatuses = (): Record<string, 'pendiente' | 'guardado'> => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.DERIVATIVE_STATUSES);
    return data ? JSON.parse(data) : {};
  } catch (e) {
    console.error('Error reading derivative statuses', e);
    return {};
  }
};

export const saveDerivativeStatus = (itemId: string, status: 'pendiente' | 'guardado') => {
  try {
    const current = getStoredDerivativeStatuses();
    current[itemId] = status;
    localStorage.setItem(STORAGE_KEYS.DERIVATIVE_STATUSES, JSON.stringify(current));
  } catch (e) {
    console.error('Error saving derivative status', e);
  }
};

export const getStoredCustomNotes = (): Record<string, string> => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.CUSTOM_NOTES);
    return data ? JSON.parse(data) : {};
  } catch (e) {
    return {};
  }
};

export const saveCustomNote = (id: string, note: string) => {
  try {
    const current = getStoredCustomNotes();
    current[id] = note;
    localStorage.setItem(STORAGE_KEYS.CUSTOM_NOTES, JSON.stringify(current));
  } catch (e) {
    console.error('Error saving custom note', e);
  }
};
