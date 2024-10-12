'use client'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const NotFound = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-50 py-6 sm:py-8'>
      <div className='flex flex-col items-center justify-center w-full max-w-md text-center'>
        <Typography variant='h1' component='h1' className='mb-4 font-bold text-7xl text-red-500'>
          404
        </Typography>
        <Typography variant='h6' component='h6' className='mb-8 text-xl text-gray-700'>
          Página não encontrada
        </Typography>
        <Link href='/login' passHref>
          <Button
            variant='contained'
            color='success'
            size='large'
            className='w-full'
          >
            Voltar para o início
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default NotFound;
