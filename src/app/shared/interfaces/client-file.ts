export interface ClientFile {
  id: number;
  fileName: string;
  originalName: string;
  mime: 'image/png' | 'image/jpeg' | 'image/pdf',
  size: number;
}
