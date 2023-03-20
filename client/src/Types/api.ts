export interface PostTodoResponse {
  text: string;
  done: boolean;
  createAt: string;
  id?: number;
}

export interface PatchTodoResponse {
  text: string;
  done?: boolean;
  createAt?: string;
  id: number;
}

export interface OnTogleResponse {
  text?: string;
  done: boolean;
  createAt?: string;
  id: number;
}
