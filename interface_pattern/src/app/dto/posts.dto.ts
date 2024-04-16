export interface PostsDto {
    readonly id: number
    readonly title: string
    readonly filePath: string
    readonly status: string
    readonly updatedAt: string
    readonly scientist: string[]
}