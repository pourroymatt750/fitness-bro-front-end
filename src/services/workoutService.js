import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/workouts`
console.log(process.env.REACT_APP_BACK_END_SERVER_URL)

export async function getDetails(apiUrl) {
  const res = await fetch(`${BASE_URL}${apiUrl}`)
  return res.json()
}

export async function workoutSearch(formData){
  const res = await fetch(`http://localhost:3001/api/workouts?search=${formData.query}`)
  const data =  await res.json()
  return data
}

export async function getExerciseDetails(exerciseName) {
  const res = await fetch(`http://localhost:3001/api/workouts/search/${exerciseName}`)
  const data =  await res.json()
  return data
}

export async function addExerciseDetails(excerciseDetail) {
  // console.log(excerciseDetail)
  const res = await fetch(`${BASE_URL}`, {
    method: 'POST', 
    headers: {'Authorization': `Bearer ${tokenService.getToken()}`,
    'Content-Type': 'application/json'}, 
    body: JSON.stringify(excerciseDetail)
  })
  console.log(res)
  const data =  await res.json()
  return data
}