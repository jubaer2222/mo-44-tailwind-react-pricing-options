import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = [
  { "id": 1, "name": "Student 1", "physics": 78, "chemistry": 85, "math": 92 },
  { "id": 2, "name": "Student 2", "physics": 64, "chemistry": 70, "math": 58 },
  { "id": 3, "name": "Student 3", "physics": 91, "chemistry": 88, "math": 95 },
  { "id": 4, "name": "Student 4", "physics": 55, "chemistry": 60, "math": 63 },
  { "id": 5, "name": "Student 5", "physics": 82, "chemistry": 79, "math": 84 },
  { "id": 6, "name": "Student 6", "physics": 47, "chemistry": 52, "math": 49 },
  { "id": 7, "name": "Student 7", "physics": 73, "chemistry": 76, "math": 71 },
  { "id": 8, "name": "Student 8", "physics": 88, "chemistry": 92, "math": 90 },
  { "id": 9, "name": "Student 9", "physics": 69, "chemistry": 66, "math": 72 },
  { "id": 10, "name": "Student 10", "physics": 95, "chemistry": 90, "math": 98 }
]


const ResultsChart = () => {
  return (
    <div>
      <LineChart width={800} height={500} data={resultData}>
        <XAxis dataKey={'name'}></XAxis>
        <YAxis></YAxis>
        <Line dataKey={'math'}></Line>
        <Line dataKey={'chemistry'} stroke='red'></Line>
      </LineChart>
    </div>
  );
};

export default ResultsChart;