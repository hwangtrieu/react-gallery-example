interface Items {
  id: string;
  title: string;
  filename: string;
  filepath: string;
  description: string;
  tags: string;
  projectId: string;
  uploadedAt: Date;
}

interface ResponseData {
  total: number;
  page: number;
  items: Items[];
}
