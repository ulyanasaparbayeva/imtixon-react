import MoviesPrimary from "./movie-primary/MoviesPrimary";


const Home = () => {
  return (
    <div>
      <MoviesPrimary genre="12" title="Adventure Movies" />
      <MoviesPrimary genre="28" title="Action Movies" />
      <MoviesPrimary genre="35" title="Comedy Movies" />
      <MoviesPrimary genre="16" title="Animated Movies" />
    </div>
  )
}
export default Home