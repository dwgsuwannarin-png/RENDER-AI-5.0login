
export enum AppStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export interface UploadedImage {
  base64: string;
  mimeType: string;
}

export interface GenerationResult {
  imageUrl?: string;
  text?: string;
}

export interface Preset {
  id: string;
  label: string;
  subtitle: string;
  thSubtitle: string;
  prompt: string;
  children?: Preset[];
}

// --- AUTH TYPES ---
export type UserRole = 'ADMIN' | 'MEMBER';

export interface UserProfile {
  uid: string;
  email: string;
  role: UserRole;
  expiryDate?: string; // ISO String format
  createdAt: number;
  passwordVersion: number; // Used to force logout
  isDisabled: boolean;
  note?: string;
}
