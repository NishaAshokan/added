import React from 'react'
import '../popup.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
//import DatePicker from "react-horizontal-datepicker";
 //import DatePicker from 'react-datepicker';
 //import 'react-datepicker/dist/react-datepicker.css';


import { AiFillDelete, AiOutlineClose } from 'react-icons/ai'
import { TimeClock } from '@mui/x-date-pickers/TimeClock';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
//import { DatePicker } from '@mui/x-date-pickers/DatePicker';
//import { TimePicker } from '@mui/x-date-pickers/TimePicker';
//import {toast} from 'react-toastify';

interface CaloriIntakePopupProps {
  setShowCalorieIntakePopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const CalorieIntakePopup: React.FC<CaloriIntakePopupProps> = ({ setShowCalorieIntakePopup }) => {
  const color = '#ffc20e'

  const [date, setDate] = React.useState<any>(new Date())

  const selectedDay = (val: any) => {
    console.log(val)
  };


  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17T15:30'));
  return (
    <div className='popupout'>


      <div className='popupbox'>
        <button className='close'
          onClick={() => {
            setShowCalorieIntakePopup(false)
          }}
        >
          <AiOutlineClose />
        </button>

        {/* <DatePicker getSelectedDay={selectedDay}
          endDate={100}
          selectDate={new Date()}
          labelFormat={"MMMM"}
          color={color}
        /> */}

        <TextField id="outlined-basic" label="Food item name" variant="outlined" color="warning" />
        <TextField id="outlined-basic" label="Food item amount (in gms)" variant="outlined" color="warning" />
        <div className='timebox'>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimeClock value={value} onChange={(newValue) => setValue(newValue)}
            />
          </LocalizationProvider>

        </div>
        <Button variant="contained" color="warning">
          Save
        </Button>
        <div className='hrline'></div>
        <div className='items'>
          <div className='item'>
            <h3>Apple</h3>
            <h3>100 gms</h3>
            <button> <AiFillDelete /></button>
          </div>
          <div className='item'>
            <h3>Banana</h3>
            <h3>200 gms</h3>
            <button> <AiFillDelete /></button>

          </div>
          <div className='item'>
            <h3>Rice</h3>
            <h3>300 gms</h3>
            <button> <AiFillDelete /></button>

          </div>
        </div>
      </div>
    </div>
  )
}

// interface CaloriIntakePopupProps {
//   setShowCalorieIntakePopup: React.Dispatch<React.SetStateAction<boolean>>;
// }

// const CalorieIntakePopup: React.FC<CaloriIntakePopupProps> = ({ setShowCalorieIntakePopup }) => {
//   const color = '#ffc20e'

//   const [date, setDate] = React.useState<any>(new Date());
//   const [time, setTime] = React.useState<any>(new Date());

// const [CalorieIntake,  setCalorieIntake]= React.useState<any>({
//   item :'',
//   date: '',
//   quantity : '',
//   quantitytype : 'g'
// })
// const[items, setItems]= React.useState<any>([])
//   // const selectedDay = (val: any) => {
//   //   console.log(val)
// commit   // };

// const saveCalorieIntake = async () => {
//  let tempdate = date.format('YYYY-MM-DD')
//  let temptime = time.format('HH:mm:ss')

//  let tempdatetime = tempdate + ' ' + temptime
// let finaldatetime = new Date(tempdatetime)
// console.log( finaldatetime + 'finaldatetime')

// fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/calorieintake/addcalorieintake', 
//   {
//     method : 'POST',
//     headers :{
//     'Content-Type' : 'application/json',
//    },
//     credentials : 'include',

//     body : JSON.stringify({
//        item : CalorieIntake.item,
//        date : finaldatetime,
//        quantity : CalorieIntake.quantity,
//        quantitytype : CalorieIntake.quantitytype

      
//     })
//   }
// )
// .then(res => res.json())
// .then(data =>{
//   if (data.ok) {
//   toast.success('calorie  registered successfully')

//   getCalorieIntake()
// } else {

//   toast.error(' calorie Registration failed')
  
// }
// })
// .catch(err => {
//   toast.error(' calorie Registration failed')
//   console.log(err)
// })

// }
// const getCalorieIntake = async () => {
//   setItems([])
//   fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/calorieintake/getcalorieintakebydate', 
//   {
//     method : 'POST',
//     headers :{
//     'Content-Type' : 'application/json',
//    },
//     credentials : 'include',

//     body : JSON.stringify({
//       date : date
//     })
//   }
// )
// .then(res => res.json())
// .then(data =>{
//   if (data.ok) {
//   console.log(data.data , 'calorie intake data for a date')
//   setItems(data.data)
// } else {

//   toast.error(' error in getting calorie ')
  
// }
// })
// .catch(err => {
//   toast.error(' error in getting calorie')
//   console.log(err)
// })

// }
// const deleteCalorieIntake = async(item : any) => {
//   fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/calorieintake/deletecalorieintake', 
//   {
//     method : 'DELETE',
//     headers :{
//     'Content-Type' : 'application/json',
//    },
//     credentials : 'include',

//     body : JSON.stringify({
//       item : item.item,
//       date : item.date
//     })
//   }
// )
// .then(res => res.json())
// .then(data =>{
//   if (data.ok) {
//   console.log( 'calorie deleted successfully')
//   getCalorieIntake()
// } else {

//   toast.error(' error in deletingcalorie ')
   
// }
// })
// .catch(err => {
//   toast.error(' error in deleting calorie')
//   console.log(err)
// })
// }

// React.useEffect(() => {
  
//   getCalorieIntake();
// }, [date])

// const selectedDay = (val : any) => {
//   setDate(val)
// };



//   //const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17T15:30'));
//   return (
//     <div className='popupout'>
//       <div className='popupbox'>
//         <button className='close'
//           onClick={() => {
//             setShowCalorieIntakePopup(false)
//           }}
//         >
//           <AiOutlineClose />
//         </button>
//         </div>


// <LocalizationProvider dateAdapter={AdapterDayjs}>
//   <DatePicker
//   label ='select Date'
//   value ={date}
// onChange={(newValue: any) => {
//   selectedDay(newValue); 
// }}  
// />
// </LocalizationProvider>

// <TextField id="outlined-basic"  label="Food items" color='warning' variant='outlined'
// onChange={(e)=> {
//   setCalorieIntake({
//     ...CalorieIntake, item : e.target.value
//   })
// }}
// />
// <TextField id="outlined-basic"  label="Food item amount (in gms) " color='warning' variant='outlined' type='number'
// onChange={(e)=> {
//   setCalorieIntake({
//     ...CalorieIntake, quantity : e.target.value
//   })
// }}
// />

// <div className='timebox'>
// <LocalizationProvider dateAdapter={AdapterDayjs}>
//   <TimePicker
//   label='controlled picker'
//    value={time}
//   onChange={(newValue : any) => {
//     setTime(newValue)
//   }}
//   />
//   </LocalizationProvider>
// </div>

// <button color='warning' 
// onClick={saveCalorieIntake}>
// Save
// </button>

// <div className='hrline'>

// </div>
// <div className='items'>
//   {
//     items.map((item : any) =>{
//       return(
//         <div className='item'>
//           <h3>{item.item}</h3>
//           <h3>{item.quantity} {item.quantitytype}</h3>
//           <button onClick={() => {
//             deleteCalorieIntake(item)
//           }}>
//             <AiFillDelete />
//           </button>
//         </div>
//       )
//     })
//   }
// </div>

// }
//     </div>
//   )
// }

export default CalorieIntakePopup