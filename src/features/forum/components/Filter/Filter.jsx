import { MenuItem, Select } from '@mui/material'
import React,{useState} from 'react'
import { motion } from 'framer-motion'

function Filter(visible) {
    const [value, setValue] = useState("Topic")
    const [item, setItem] = useState("Plus recent")
    const [valeur, setValeur] = useState("Résolu")

    const handleChange = (e) =>{
      setValue(e.target.value)
    }
    const handleChange1 = (e) =>{
      setItem(e.target.value)
    }
    const handleChange2 = (e) =>{
      setValeur(e.target.value)
    }

    if(!visible){
      return 
    }
  return (
    <motion.div 
    initial={
      {
      opacity: 0,
      x:-50
      }
      }
      animate={{
          opacity:1,
          x:0
      }}
      transition={
          {
            duration: 1
          }
      } 
ClassName='w-full'>
        <Select
          className='w-full border-none '
          sx={{border:'none', outline:"none", color:'white'}}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={value}
          onChange={handleChange}
        >
            <MenuItem key='topic' value='Topic'>Topic</MenuItem>
            <MenuItem key='programmation' value='Programmation<'>Programmation</MenuItem>
            <MenuItem key='Bourse' value="Bourse d\'etude">Bourse d'etude</MenuItem>
            <MenuItem key='c2e' value='C2E'> C2E</MenuItem>
            <MenuItem key='c3lf' value='C3lf'>C3lf</MenuItem>

        </Select>

        <Select
          className='w-full border-none '
          sx={{border:'none', outline:"none", color:'white'}}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={item}
          onChange={handleChange1}

        >
            <MenuItem key='recent' value='Plus recent'>Plus recent</MenuItem>
            <MenuItem key='semaine' value='l y a une semaine'>Il y a une semaine</MenuItem>
            <MenuItem key='mois' value="Il y a un mois">Il y a un mois</MenuItem>
            <MenuItem key='ans' value='Il y a un an'> Il y a un an</MenuItem>
      

        </Select>

        <Select
          className='w-full border-none '
          sx={{border:'none', outline:"none", color:'white'}}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={valeur}
          onChange={handleChange2}

        >
            <MenuItem value='Résolu'>Résolu</MenuItem>
            <MenuItem  value='Non résolu'>'Non résolu</MenuItem>
      
      

        </Select>
    </motion.div>
  )
}

export default Filter