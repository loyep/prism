export default async (ctx: any) => {
  const data = __isBrowser__
    ? await (await window.fetch(`/api/articles/${ctx.match.params.slug}`)).json()
    : await ctx.apiService.getArticleBySlug(ctx.request.params.slug)

  return {
    user: data,
  }
}
