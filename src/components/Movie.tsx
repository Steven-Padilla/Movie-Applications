import Image from 'next/image'
import Link from 'next/link'

interface MovieData {
    id:string,
    title: string,
    poster_path:string,
    release_date:string
}
export default function Movie({ id, title, poster_path, release_date }: MovieData) {
    const imagePath = 'https://image.tmdb.org/t/p/original'
    return (
        <div className='container mx-auto'>
            <Link href={`/${id}`}>
                <h1 className='text-center'>{title}</h1>
                <div className='flex justify-center'>
                    <Image
                        src={imagePath + poster_path}
                        width={200}
                        height={200}
                        alt={title}
                        priority
                    />
                </div>

            </Link>
            <h2 className='text-center'>{release_date}</h2>
        </div>
    )
}