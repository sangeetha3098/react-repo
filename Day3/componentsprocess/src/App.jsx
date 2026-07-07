import Banner from "./components/Banner"
import MovieCard from "./components/MovieCard"
import ProductGallery from "./components/ProductGallery"
import ProfileCard from "./components/ProfileCard"
import TeamMembers from "./components/TeamMembers"

const App = () => {
  return (
   <>
   
<div>
  <ProfileCard/>
  <Banner/>
  <MovieCard/>
  <ProductGallery/>
  <TeamMembers/>
</div>
   </>
  )
}

export default App