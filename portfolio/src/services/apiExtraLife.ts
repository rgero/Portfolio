import axios from 'axios';

const extraLifeID = 531138;

const instance = axios.create({
  baseURL: `https://www.extra-life.org/api/participants/${extraLifeID}}`
})

const fetchDonations = async () => {
  try {
    const results = await axios.get(``)
    console.log(results);
  }
}