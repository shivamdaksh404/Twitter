

export function getPosts() {
    const posts = localStorage.getItem('posts')
    if (posts) {
        try {
            return JSON.parse(posts)
        }
            catch {
                return []
            }
        
    }
    return []
}
// log out helper function
export function getCurrentUser() {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      try {
        return JSON.parse(currentUser);
      } catch {
        return [];
      }
    }
    return [];
}
  
export function getData() {
    const users = localStorage.getItem("users");
    if (users) {
      try {
        return JSON.parse(users);
      } catch {
        return [];
      }
    }
    return [];
  }