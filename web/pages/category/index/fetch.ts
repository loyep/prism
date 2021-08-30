export default async (ctx: any) => {
  const data = __isBrowser__
    ? await (await window.fetch(`/api/categories`)).json()
    : await ctx.apiService.categories()

  return {
    categories: data,
  }
}
