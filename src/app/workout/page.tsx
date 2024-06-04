"use client"

import React, { Suspense, useEffect, useState } from 'react';
import './workoutPage.css';
import { useSearchParams } from 'next/navigation';

interface Exercise {
  imageUrl: string;
  exercise: string;
  name: string;
  sets: number;
  reps: number;
  description: string;
}

interface WorkoutData {
  name: string;
  exercises: Exercise[];
}

const WorkoutComponent: React.FC = () => {
  const [data, setData] = useState<WorkoutData | null>(null);
  const searchParams = useSearchParams();
  const workoutid = searchParams.get('id');

  useEffect(() => {
    const getWorkout = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/workoutplans/workouts/${workoutid}`, {
          method: 'GET',
          credentials: 'include',
        });

        const result = await res.json();
        if (result.ok) {
          setData(result.data);
        } else {
          setData(null);
        }
      } catch (error) {
        console.error('Error fetching workout:', error);
        setData(null);
      }
    };

    getWorkout();
  }, [workoutid]);

  if (!data) {
    return <div>Loading workout...</div>;
  }

  return (
    <div className='workout'>
      <h1 className='mainhead1'>{data.name} Day</h1>
      <div className='workout__exercises'>
        {data.exercises.map((item, index) => (
          <div key={index} className={index % 2 === 0 ? 'workout__exercise' : 'workout__exercise workout__exercise--reverse'}>
            <h3>{index + 1}</h3>
            <div className='workout__exercise__image'>
              <img src={item.imageUrl} alt={item.exercise} />
            </div>
            <div className='workout__exercise__content'>
              <h2>{item.name}</h2>
              <span>{item.sets} sets X {item.reps} reps</span>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Page: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading workout...</div>}>
      <WorkoutComponent />
    </Suspense>
  );
};

export default Page;


// "use client"
// import React, { Suspense, useState, useEffect } from 'react'
// import './workoutPage.css'
// import { useSearchParams } from 'next/navigation'

// const WorkoutPage = () => {
//   const [workout, setWorkout] = React.useState<any>(null)
//   const [data, setData] = React.useState<any>(null)
//   const [error, setError] = useState<any>(null);
//   const searchParams = useSearchParams()
//   const workoutid = searchParams.get('id')

//   const getWorkout = async () => {
//     try {
//         const response = await fetch(
//           process.env.NEXT_PUBLIC_BACKEND_API + '/workoutplans/workouts/' + workoutid,
//           {
//             method: 'GET',
//             credentials: 'include',
//           }
//         );
  
//         const data = await response.json();
//         setData(data.ok ? data.data : null);
//       } catch (error) {
//         console.error('Error fetching workout:', error);
//         setError(error); // Store the error for display
//       }
//     };
  
//     useEffect(() => {
//       getWorkout();
//     }, []);

//   return (
//     <Suspense fallback={<div>Loading workout...</div>}> {/* Fallback content during data fetching */}
//       {data && ( // Only render content if data is available
//         <div className='workout'>
//           <h1 className='mainhead1'>{data?.name} Day</h1>
//           <div className='workout__exercises'>
//             {data?.exercises?.map((item: any, index: number) => (
//               <div
//                 key={index} // Add a unique key for each exercise
//                 className={index % 2 === 0 ? 'workout__exercise' : 'workout__exercise workout__exercise--reverse'}
//               >
//                 <h3>{index + 1}</h3>
//                 <div className='workout__exercise__image'>
//                   <img src={item.imageUrl} alt={item.exercise} />
//                 </div>
//                 <div className='workout__exercise__content'>
//                   <h2>{item.name}</h2>
//                   <span>{item.sets} sets X {item.reps} reps</span>
//                   <p>{item.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </Suspense>
//   )
// }

// export default WorkoutPage

// "use client"

// // import React from 'react'
// import React, { Suspense } from 'react'
// import './workoutPage.css'
// import { useSearchParams } from 'next/navigation'
// const page = () => {
//     const [workout, setWorkout] = React.useState<any>(null)
//     const [data, setData] = React.useState<any>(null)

//     const searchParams = useSearchParams()

//     const workoutid = searchParams.get('id')


//     const getWorkout = async () => {
//         // let data: any[] = [
//         //     {
//         //         type: 'Chest',
//         //         imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
//         //         durationInMin: 30,
//         //         exercises: [
//         //             {
//         //                 exercise: 'Flat Bench Press',
//         //                 videoUrl: 'https://gymvisual.com/img/p/1/7/5/5/2/17552.gif',
//         //                 sets: 3,
//         //                 reps: 10,
//         //                 rest: 60,
//         //                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
//         //             },
//         //             {
//         //                 exercise: 'Incline Bench Press',
//         //                 videoUrl: 'https://gymvisual.com/img/p/1/0/3/9/8/10398.gif',
//         //                 sets: 3,
//         //                 reps: 10,
//         //                 rest: 60,
//         //                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
//         //             },
//         //             {
//         //                 exercise: 'Decline Bench Press',
//         //                 videoUrl: 'https://gymvisual.com/img/p/6/5/2/3/6523.gif',
//         //                 sets: 3,
//         //                 reps: 10,
//         //                 rest: 60,
//         //                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
//         //             }
//         //         ]
//         //     },
//         //     {
//         //         type: 'Abs',
//         //         imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzJTIwd29ya291dHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
//         //         durationInMin: 30,
//         //         exercises: [
//         //             {
//         //                 exercise: 'Crunches',
//         //                 videoUrl: 'https://gymvisual.com/img/p/1/7/5/5/2/17552.gif',
//         //                 sets: 3,
//         //                 reps: 10,
//         //                 rest: 60,
//         //                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
//         //             },
//         //             {
//         //                 exercise: 'Incline Bench Press',
//         //                 videoUrl: 'https://gymvisual.com/img/p/1/0/3/9/8/10398.gif',
//         //                 sets: 3,
//         //                 reps: 10,
//         //                 rest: 60,
//         //                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
//         //             },
//         //             {
//         //                 exercise: 'Decline Bench Press',
//         //                 videoUrl: 'https://gymvisual.com/img/p/6/5/2/3/6523.gif',
//         //                 sets: 3,
//         //                 reps: 10,
//         //                 rest: 60,
//         //                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
//         //             }
                    
//         //         ]
//         //     },
//         //     {
//         //         type: 'Shoulder',
//         //         imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
//         //         durationInMin: 30,
//         //         exercises: [
//         //             {
//         //                 exercise: 'Flat Bench Press',
//         //                 videoUrl: 'https://gymvisual.com/img/p/1/7/5/5/2/17552.gif',
//         //                 sets: 3,
//         //                 reps: 10,
//         //                 rest: 60,
//         //                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
//         //             },
//         //             {
//         //                 exercise: 'Incline Bench Press',
//         //                 videoUrl: 'https://gymvisual.com/img/p/1/0/3/9/8/10398.gif',
//         //                 sets: 3,
//         //                 reps: 10,
//         //                 rest: 60,
//         //                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
//         //             },
//         //             {
//         //                 exercise: 'Decline Bench Press',
//         //                 videoUrl: 'https://gymvisual.com/img/p/6/5/2/3/6523.gif',
//         //                 sets: 3,
//         //                 reps: 10,
//         //                 rest: 60,
//         //                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
//         //             }
//         //         ]
//         //     },
//         //     {
//         //         type: 'Back',
//         //         imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
//         //         durationInMin: 30,
//         //         exercises: [
//         //             {
//         //                 exercise: 'Flat Bench Press',
//         //                 videoUrl: 'https://gymvisual.com/img/p/1/7/5/5/2/17552.gif',
//         //                 sets: 3,
//         //                 reps: 10,
//         //                 rest: 60,
//         //                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
//         //             },
//         //             {
//         //                 exercise: 'Incline Bench Press',
//         //                 videoUrl: 'https://gymvisual.com/img/p/1/0/3/9/8/10398.gif',
//         //                 sets: 3,
//         //                 reps: 10,
//         //                 rest: 60,
//         //                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
//         //             },
//         //             {
//         //                 exercise: 'Decline Bench Press',
//         //                 videoUrl: 'https://gymvisual.com/img/p/6/5/2/3/6523.gif',
//         //                 sets: 3,
//         //                 reps: 10,
//         //                 rest: 60,
//         //                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
//         //             }
//         //         ]
//         //     },
//         //     {
//         //         type: 'Leg',
//         //         imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzJTIwd29ya291dHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
//         //         durationInMin: 30,
//         //         exercises: [
//         //             {
//         //                 exercise: 'Crunches',
//         //                 videoUrl: 'https://gymvisual.com/img/p/1/7/5/5/2/17552.gif',
//         //                 sets: 3,
//         //                 reps: 10,
//         //                 rest: 60,
//         //                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
//         //             },
//         //             {
//         //                 exercise: 'Incline Bench Press',
//         //                 videoUrl: 'https://gymvisual.com/img/p/1/0/3/9/8/10398.gif',
//         //                 sets: 3,
//         //                 reps: 10,
//         //                 rest: 60,
//         //                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
//         //             },
//         //             {
//         //                 exercise: 'Decline Bench Press',
//         //                 videoUrl: 'https://gymvisual.com/img/p/6/5/2/3/6523.gif',
//         //                 sets: 3,
//         //                 reps: 10,
//         //                 rest: 60,
//         //                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
//         //             }
                    
//         //         ]
//         //     },
//         //     {
//         //         type: 'Cardio',
//         //         imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
//         //         durationInMin: 30,
//         //         exercises: [
//         //             {
//         //                 exercise: 'Flat Bench Press',
//         //                 videoUrl: 'https://gymvisual.com/img/p/1/7/5/5/2/17552.gif',
//         //                 sets: 3,
//         //                 reps: 10,
//         //                 rest: 60,
//         //                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
//         //             },
//         //             {
//         //                 exercise: 'Incline Bench Press',
//         //                 videoUrl: 'https://gymvisual.com/img/p/1/0/3/9/8/10398.gif',
//         //                 sets: 3,
//         //                 reps: 10,
//         //                 rest: 60,
//         //                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
//         //             },
//         //             {
//         //                 exercise: 'Decline Bench Press',
//         //                 videoUrl: 'https://gymvisual.com/img/p/6/5/2/3/6523.gif',
//         //                 sets: 3,
//         //                 reps: 10,
//         //                 rest: 60,
//         //                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
//         //             }
//         //         ]
//         //     }, {
//         //         type: 'Biceps',
//         //         imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
//         //         durationInMin: 30,
//         //         exercises: [
//         //             {
//         //                 exercise: 'Flat Bench Press',
//         //                 videoUrl: 'https://gymvisual.com/img/p/1/7/5/5/2/17552.gif',
//         //                 sets: 3,
//         //                 reps: 10,
//         //                 rest: 60,
//         //                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
//         //             },
//         //             {
//         //                 exercise: 'Incline Bench Press',
//         //                 videoUrl: 'https://gymvisual.com/img/p/1/0/3/9/8/10398.gif',
//         //                 sets: 3,
//         //                 reps: 10,
//         //                 rest: 60,
//         //                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
//         //             },
//         //             {
//         //                 exercise: 'Decline Bench Press',
//         //                 videoUrl: 'https://gymvisual.com/img/p/6/5/2/3/6523.gif',
//         //                 sets: 3,
//         //                 reps: 10,
//         //                 rest: 60,
//         //                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
//         //             }
//         //         ]
//         //     },
//         //     {
//         //         type: 'Triceps',
//         //         imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzJTIwd29ya291dHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
//         //         durationInMin: 30,
//         //         exercises: [
//         //             {
//         //                 exercise: 'Crunches',
//         //                 videoUrl: 'https://gymvisual.com/img/p/1/7/5/5/2/17552.gif',
//         //                 sets: 3,
//         //                 reps: 10,
//         //                 rest: 60,
//         //                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
//         //             },
//         //             {
//         //                 exercise: 'Incline Bench Press',
//         //                 videoUrl: 'https://gymvisual.com/img/p/1/0/3/9/8/10398.gif',
//         //                 sets: 3,
//         //                 reps: 10,
//         //                 rest: 60,
//         //                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
//         //             },
//         //             {
//         //                 exercise: 'Decline Bench Press',
//         //                 videoUrl: 'https://gymvisual.com/img/p/6/5/2/3/6523.gif',
//         //                 sets: 3,
//         //                 reps: 10,
//         //                 rest: 60,
//         //                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
//         //             }
                    
//         //         ]
//         //     },
//         //     {
//         //         type: 'Forearms',
//         //         imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
//         //         durationInMin: 30,
//         //         exercises: [
//         //             {
//         //                 exercise: 'Flat Bench Press',
//         //                 videoUrl: 'https://gymvisual.com/img/p/1/7/5/5/2/17552.gif',
//         //                 sets: 3,
//         //                 reps: 10,
//         //                 rest: 60,
//         //                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
//         //             },
//         //             {
//         //                 exercise: 'Incline Bench Press',
//         //                 videoUrl: 'https://gymvisual.com/img/p/1/0/3/9/8/10398.gif',
//         //                 sets: 3,
//         //                 reps: 10,
//         //                 rest: 60,
//         //                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
//         //             },
//         //             {
//         //                 exercise: 'Decline Bench Press',
//         //                 videoUrl: 'https://gymvisual.com/img/p/6/5/2/3/6523.gif',
//         //                 sets: 3,
//         //                 reps: 10,
//         //                 rest: 60,
//         //                 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
//         //             }
//         //         ]
//         //     }
            
//         // ];
    
//         // setWorkout(data[0]);

//         fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/workoutplans/workouts/' + workoutid , {
//             method : 'GET',
//             credentials : 'include'
//         })

//         .then(res => res.json())
//         .then(data => {
//             if(data.ok){
//                 setData(data.data)
//             }
//             else{
//                 setData(null)
//             }
//         }

//         )
//     }
    
//     React.useEffect(() => {
//         getWorkout();
//     }, []);
//     return (
//         <Suspense fallback={<div>Loading workout...</div>}> {/* Fallback content during data fetching */}
//         <>
//         {
//          data &&    
//         <div className='workout'>
//             <h1 className='mainhead1'>{data?.name} Day</h1>
//             <div className='workout__exercises'>
//                 {
//                 data?.exercises?.map((item: any, index: number) => {
//                     return(
//                     <div
                      
//                         className={index % 2 === 0 ? 'workout__exercise' : 'workout__exercise workout__exercise--reverse'}
//                     >
//                         <h3>{index + 1}</h3>
//                         <div className='workout__exercise__image'>
//                             <img src={item.imageUrl} alt={item.exercise} />
//                         </div>
//                         <div className='workout__exercise__content'>
//                             <h2>{item.name}</h2>
//                             <span>{item.sets} sets X {item.reps} reps</span>
//                             <p>{item.description}</p>
//                         </div>
//                     </div>
//                 )})}
//             </div>
//         </div>
//             }
//             </>
//             </Suspense>
//     )
// }
// export default page
// //     return (
// //         <div className='workout'>
// //             <h1 className='mainhead1'> {workout?.type} Day</h1>
// //             <div className='workout__exercises'>
// //                 {
// //                     workout?.exercises.map((item: any, index: number)=>{
// //                         return (
// //                             <div className={
// //                                 index % 2 === 0 ? 'workout__exercise' : 'workout__exercise workout__exercise--reverse'
// //                             }>
// //                                 <h3>{index+1}</h3>
// //                                 <div className='workout__exercise__image'>
// //                                     <img src={item.videoUrl} alt="" />
// //                                 </div>
// //                                 <div className='workout__exercise__content'>
// //                                     <h2>{item.exercise}</h2>
// //                                     <span>{item.sets} sets X {item.reps} reps</span>
// //                                     <p>{item.description}</p>
// //                                 </div>
// //                             </div>
// //                         )
// //                     })
// //                 }
// //             </div>
// //         </div>
// //     )
// // }

