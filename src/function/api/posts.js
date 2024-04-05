import posts from './post/data'

export function onRequestGet() {
    console.log('posts',posts)
    return Response.json(posts)
}