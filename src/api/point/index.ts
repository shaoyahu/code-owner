/* eslint-disable @typescript-eslint/no-explicit-any */
import http from '../index';

type Page = any;

export function getPageById(id: string): Promise<Page> {
  return http({
    method: 'GET',
    url: `/page/${id}`
  });
}