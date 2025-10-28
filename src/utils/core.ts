import type { PageType } from "../types";

export function generateReactCode(page: PageType) {

  return `import { Page } from 'antd';
const { PageConfig } = Page;
`;
}