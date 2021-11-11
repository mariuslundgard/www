export interface DataStore {
  findIndex: () => Promise<any>
  findPost: (slug: string) => Promise<any>
  findPosts: () => Promise<any[]>
}
