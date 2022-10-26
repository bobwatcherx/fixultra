import {useState} from 'react'
export default function Sekolah(){
	const [nama,setNama] = useState("nice")

	return(
		<div>
		<input onInput={(e)=>nama = e.target.value}/>

			sekolah {nama}
		</div>
		)
}