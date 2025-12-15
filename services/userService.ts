
// This service is deprecated as authentication has been removed.
export const checkConnection = async () => true;
export const loginUser = async () => ({ id: 'guest', username: 'Guest', role: 'MEMBER', createdAt: Date.now() });
