import axios from 'axios'
import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { Modal } from '../../../components/Modal'
import LoadingButton from '@mui/material/Button';


const RequestModal = () => {
  const [catFacts, setCatFacts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    let controller = null
    const fetctCatFacts = async () => {
      try {
        setIsLoading(true)
        controller = new AbortController()
        const signal = controller?.signal
        const { data } = await axios.get('https://catfact.ninja/facts', {
          signal: signal,
          params: {
            limit: 10
          }
        })
        console.log(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false)
      }
    }
    fetctCatFacts()

    return () => {
      if (controller) {
        controller.abort()
      }
    }
  }, [])

  return (
    <>
      {isLoading ? <p>Loading...</p> : <ul>List</ul>}
    </>
  )
}

export const CancelRequestPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const controllerRef = useRef(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleToggle = () => {
    setIsModalOpen(prev => !prev)
  }

  const handleReuest = async () => {
    try {
      setIsLoading(true)
      controllerRef.current = new AbortController()
      const signal = controllerRef.current.signal
      const { data } = await axios.get('https://catfact.ninja/facts', {
        signal: signal,
        params: {
          limit: 10
        }
      })
      console.log(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false)
    }
  }

  const handleCancel = () => {
    if (controllerRef.current) {
      controllerRef.current.abort()
    }
  }

  return (
    <>
      <LoadingButton
        onClick={console.log}
        loading={isLoading}
        variant="outlined"
      >
        Request
      </LoadingButton>
      <button className='btn btn-primary me-2' disabled={isLoading} onClick={handleReuest}>{isLoading ? 'Loading...' : 'Request'}</button>
      <button className='btn btn-primary me-2' onClick={handleCancel}>Cancel</button>

      <button className='btn btn-primary' onClick={handleToggle}>Open modal</button>
      {isModalOpen && <Modal onModalClose={handleToggle}><RequestModal /></Modal>}
    </>
  )
}


