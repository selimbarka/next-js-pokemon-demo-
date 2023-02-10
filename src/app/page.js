"use client";
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { useEffect ,useState } from 'react'
import Link from 'next/link';





export default function Home() {
  const [pokemon,setPokemon]= useState([]);
  useEffect(()=>{

    async function getPokemon(){
const resp = await fetch("https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json");
setPokemon(await resp.json());
    }
    getPokemon();

  },[])
  return (
    <div className={styles.main}>

     
      <head>

<title>Pokemon List </title>
      </head>
     
    
<div className={styles.grid}>
{pokemon.map((pokemon)=>(
<div className={styles.card} key ={pokemon.id}>
  <Link href={`/pages/pokemon/${pokemon.id}`}>

<img 
src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
alt={pokemon.name}
/>
<h3>{pokemon.name}</h3>




  </Link>



</div>

))}





    </div>
    </div>
  );
}
