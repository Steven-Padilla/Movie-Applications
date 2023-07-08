import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { GenreInfo } from '@/models/Models';
const getMovie = (async (movieDetails:number)=>{
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.BEARER}`
        }
      };
      const moviesData = await fetch(`https://api.themoviedb.org/3/movie/${movieDetails}language=en-US`, options)
      return await moviesData.json()
})

interface Props {
    params: {
        MovieDetails : number
    }
}
export default async function MovieDetail({ params }: Props) {
    const { MovieDetails } = params
    const movieInfo = await getMovie(MovieDetails)
    const imagePath = 'https://image.tmdb.org/t/p/original'
    
    return (
        <div className='container mx-auto '>
            <h1 className="text-6xl text-center my-6">{movieInfo.title}</h1>
            <div className='flex justify-center'>
                <Link href={`${movieInfo.homepage}`} >

                    <Image className='my-4  grid grid-cols-2 gap-4 place-content-center'
                        src={imagePath + movieInfo.backdrop_path}
                        width={400}
                        height={400}
                        alt={movieInfo.title}
                        priority
                    />
                </Link>
            </div>
            <div className='justify-items-center my-4  grid grid-cols-2  '>
                <div className='grid grid-cols-1 place-content-center text-center'>
                    <h1 className='text-4xl  py-8'>Overview: </h1>
                    <p className='mx-12 text-sm'>{movieInfo.overview}</p>
                    <p className='m-5'>Run time : {movieInfo.runtime} minutes</p>
                    <h2 className='bg-green-400 w-1/3  p-2 rounded-lg justify-self-center'>{movieInfo.status}</h2>

                    <p className='my-10 text-4xl '> Genders: </p>
                    <div className='flex '>
                        {movieInfo.genres.map((genre:GenreInfo) => (
                            <p key={genre.id} className='flex-1 '> {genre.name}</p>
                        ))}
                    </div>
                </div>
                <div className='grid grid-cols-1 place-content-center'>
                    <Link href={`${movieInfo.homepage}`} >
                        <Image
                            src={imagePath + movieInfo.poster_path}
                            width={200}
                            height={400}
                            alt={movieInfo.title}
                        />
                    </Link>
                </div>

            </div>
        </div>
    )

}