export default async (ctx: any) => {
  const data = __isBrowser__
    ? await (await window.fetch(`/api/categories/${ctx.match.params.slug}`)).json()
    : await ctx.apiService.getCategoryBySlug(ctx.request.params.slug)

  return {
    category: data,
  }
}
