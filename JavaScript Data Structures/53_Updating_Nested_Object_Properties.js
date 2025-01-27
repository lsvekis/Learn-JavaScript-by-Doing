// 53. Updating Nested Object Properties

let profile = {
user: {
stats: { posts: 10, likes: 50 }
}
};
profile.user.stats.likes = 60;
console.log(profile.user.stats.likes);