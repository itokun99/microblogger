export const APP_CONFIG = {
  key: "AIzaSyDmbTsEm9PjAMDp3AchlaFqJnoQ_B8vfjw",
  id: "3190947245348881579",
};

export const BLOGGER_API_CONFIG = {
  baseUrl: "https://www.googleapis.com/blogger/v3",
};

export const BLOGGER_ENDPOINT = {
  posts: `${BLOGGER_API_CONFIG.baseUrl}/blogs/${APP_CONFIG.id}/posts`,
};
