import MostPopular from '../components/MostPopular';
import {MovieInfo} from '../models/Models';

const getData = async ()=>{
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.BEARER}`
    }
  };
  const moviesData = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,options)
  return await moviesData.json()
}

export default async function Home() {

  const serverInfo = await getData();
  const data: Array<MovieInfo> = serverInfo.results
  return data ? (
    <MostPopular  data={data }/>
  ): (
    <main>
      <h1 className='text-center text-4xl pt-14'>Server error, please check out later ❌</h1>
    </main>
  )
}