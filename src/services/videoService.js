import axios from './axios';

export const createVideo = data => axios.post('/videos/', data);

export const getVideos = () => axios.get('videos');

export const changeVideoStatus = (id, status) => axios.patch(`/videos/${id}/status`, { status });
