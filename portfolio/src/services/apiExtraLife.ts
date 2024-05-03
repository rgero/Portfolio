import axios from 'axios';

const extraLifeID = 531138;

const instance = axios.create({
  baseURL: `https://www.extra-life.org/api/participants/${extraLifeID}`
})

export const fetchParticipant = async () => {
  const response = await instance.get(``)
  return response.data;
}