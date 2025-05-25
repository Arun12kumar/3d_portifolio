

const HeroLights = () => {
  return (
    <>
      <spotLight position={[2,5,6]} angle={0.15} penumbra={0.2} color="white" intensity={100}/>
      <spotLight position={[4,5,4]} angle={0.3} penumbra={0.5} color="#4cc9f0" intensity={40}/>


    </>
  )
}

export default HeroLights