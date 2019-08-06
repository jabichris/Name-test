const PORT = 3000;
const HOST_NAME = window.location.hostname;
const STAGIN_NAME = 'riders-ah-staging.herokuapp.com'
const PROTOCAL = window.location.protocol;
export const API_URL = `${PROTOCAL}//${HOST_NAME}:${PORT}/api/v1`;
export const STAGING_URL = 'https://riders-ah-staging.herokuapp.com/api/v1';