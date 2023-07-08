import Movie from "./Movie";
import { Inter } from 'next/font/google';
import { MovieInfo} from  '@/models/Models'
const inter = Inter({ subsets: ['latin'] })

interface Props {
  data: MovieInfo[]
}

export default function MostPopular({data}:Props ){
    
    return (
        <main className={`${inter.className} `}>
            <h1 className='text-3xl font-bold text-center py-10'>Most popular 🔥</h1>
            <div className='grid gap-16 grid-cols-fluid '>
        {data.map((movie:any) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </main>
    )
}