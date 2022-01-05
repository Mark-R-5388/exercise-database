import { Link } from 'react-router-dom'
import squat from '../imgs/squat.jpg'
import core from '../imgs/core.jpg'
import hinge from '../imgs/deadlift.jpg'
import verticalPush from '../imgs/verticalpress.jpg'
import verticalPull from '../imgs/verticalpull.jpg'
import horizontalPush from '../imgs/horizontalpress.jpg'
import horizontalPull from '../imgs/horizontalpull.jpg'

const ExerciseList = ({ exerciseCategories, title }) => {
  const images = [
    { id: 1, name: 'squat', img: squat },
    { id: 2, name: 'core', img: core },
    { id: 3, name: 'hinge', img: hinge },

    { id: 4, name: 'verticalPull', img: verticalPull },

    { id: 5, name: 'verticalPush', img: verticalPush },

    { id: 6, name: 'horizontalPull', img: horizontalPull },

    { id: 7, name: 'horizontalPush', img: horizontalPush },
  ]

  const filterImages = (category) => {
    return images
      .filter((image) => {
        return image.name === category.imagename ? image.img : ''
      })
      .map((image) => {
        return image.img
      })
  }

  return (
    <main className='container'>
      <h2 className='title'>{title}</h2>
      <div className='exercise-categories_container'>
        {exerciseCategories &&
          exerciseCategories.map((category) => (
            <div className='exercise-category_container' key={category.id}>
              <Link
                className='exercise-category_container-link'
                to={`/exercises/${category.id}`}
              >
                <h3 className='subtitle'>{category.name}</h3>
                <img
                  className='image'
                  src={filterImages(category)}
                  alt={category.name}
                />
              </Link>
            </div>
          ))}
      </div>
    </main>
  )
}

export default ExerciseList
