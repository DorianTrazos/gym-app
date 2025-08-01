import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Back from '../../components/back/Back';
import { ROUTINE } from '../../lib/constants/routine';
import styles from './exercise.module.css';

const Exercise = () => {
  const { pathname } = useLocation();
  const { exercise } = getExerciseFromLocation(pathname);
  const { name, gif, reps, weights } = exercise;

  const [isEditingReps, setIsEditingReps] = useState(false);
  const [isEditingWeight, setIsEditingWeight] = useState(false);
  const [rangeValue, setRangeValue] = useState(0);
  const [rangeValueReps, setRangeValueReps] = useState(0);
  const [rangeValueWeights, setRangeValueWeights] = useState(0);

  return (
    <>
      <div>
        <Back />
        <h1>{name}</h1>
        <img
          className={styles['exercise-image']}
          src={gif}
          alt={name}
        />
        <h2>Repeticiones</h2>
        {!isEditingReps && (
          <div className={styles['exercise-info']}>
            {reps.map(rep => (
              <p
                key={rep + Math.random()}
                onClick={() => setIsEditingReps(true)}
              >
                {rep}
              </p>
            ))}
          </div>
        )}
        {isEditingReps && (
          <div>
            <span>0</span>
            <input
              type='range'
              step={1}
              defaultValue={rangeValueReps}
              onInput={event => setRangeValueReps(event.target.value)}
              min={0}
              max={20}
            />
            <span>20</span>
            <p>{rangeValueReps}</p>
            <button>Save</button>
            <button onClick={() => setIsEditingReps(false)}>Cancel</button>
          </div>
        )}
        <h2> Peso:</h2>
        {!isEditingWeight && (
          <div className={styles['exercise-info']}>
            {weights.map(weight => (
              <p
                key={weight + Math.random()}
                onClick={() => setIsEditingWeight(true)}
              >
                {weight}
              </p>
            ))}
          </div>
        )}
        {isEditingWeight && (
          <div>
            <span>0</span>
            <input
              type='range'
              step={0.5}
              defaultValue={rangeValueWeights}
              onInput={event => setRangeValueWeights(event.target.value)}
              min={0}
              max={50}
            />
            <span>50</span>
            <p>{rangeValueWeights}</p>
            <button>Save</button>
            <button onClick={() => setIsEditingWeight(false)}>Cancel</button>
          </div>
        )}
      </div>
    </>
  );
};

const getExerciseFromLocation = pathname => {
  const pathParts = pathname.split('/'); // ['', 'gym', 'push', 'id']
  const groupName = pathParts[2]; // "push"
  const exerciseId = pathParts[3]; // "d1f6..."

  const group = ROUTINE[groupName];
  if (!group) return { groupName, exercise: null };

  const exercise = group.find(e => e.id === exerciseId) || null;
  return { groupName, exercise };
};

export default Exercise;
