import {useRouter} from "next/router";
import { useState,useEffect } from 'react'
import Link from 'next/link';

export default function Details(){
const {
    query :{id},
}= useRouter();


const [pokemon,setPokemon]= useState(null);
useEffect(()=>{

  async function getPokemon(){
const resp = await fetch(`https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${id}.json`);
setPokemon(await resp.json());
  }
  if (id){
    getPokemon();
}

},[id]);

if (!pokemon){
    return null;
}

return <div>



<Link href="/">
back to home 

</Link>
   
<div>
<img   src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image} `} alt={pokemon.name.english}/>

</div>
<div>
    <div>{pokemon.name}</div>
    <div>{pokemon.type.join(",")}</div>

</div>

</div>


}