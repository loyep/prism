export default async (ctx: any) => {
  const data = __isBrowser__
    ? await (await window.fetch(`/api/tags/${ctx.match.params.slug}`)).json()
    : await ctx.apiService.getTagBySlug(ctx.request.params.slug)

  return {
    tag: data,
  }
}
