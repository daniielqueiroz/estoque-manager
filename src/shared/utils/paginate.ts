interface PaginateOptions {
  data: unknown[];
  total: number;
  page: number;
  pageSize: number;
}

export const paginate = ({ data, total, page, pageSize }: PaginateOptions) => ({
  data,
  total,
  page,
  pageSize,
  totalPages: Math.ceil(total / pageSize),
});
