import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "./components/Spinner/Index";
import Navbar from "./components/Navbar/Index";
import Footer from "./components/Footer/Index";
import SearchNav from "./components/Search/Index";
import PageNotFound from "./pages/PageNotFound/Index";

const Home = lazy(() => import("./pages/Home/Index"));
const AiringToday = lazy(() => import("./pages/AiringToday/Index"));
const OnTheAir = lazy(() => import("./pages/OnTheAir/Index"));
const Movie = lazy(() => import("./pages/Movie/Index"));
const TopRated = lazy(() => import("./pages/Top_Rated/Index"));
const MostPopular = lazy(() => import("./pages/MostPopular/Index"));
const Upcoming = lazy(() => import("./pages/Upcoming/Index"));
const Movies = lazy(() => import("./pages/Movie/Index"));
const TV = lazy(() => import("./pages/Tv/Index"));
const Price = lazy(() => import("./pages/Price/Index"));
const SearchPage = lazy(() => import("./pages/Search/Index"));

export default function App() {
  const { valueOfSearch } = useSelector((state) => state);

  return (
    <BrowserRouter>
      <Navbar />
      <SearchNav />
      <Switch>
        <Route path="/discover/tv">
          <Suspense fallback={<Spinner />}>
            <TV />
          </Suspense>
        </Route>

        <Route path="/discover/movies">
          <Suspense fallback={<Spinner />}>
            <Movies />
          </Suspense>
        </Route>

        <Route path="/tv-show/airing-today">
          <Suspense fallback={<Spinner />}>
            <AiringToday />
          </Suspense>
        </Route>

        <Route path="/tv-show/on-the-air">
          <Suspense fallback={<Spinner />}>
            <OnTheAir />
          </Suspense>
        </Route>

        <Route path="/movies/upcoming">
          <Suspense fallback={<Spinner />}>
            <Upcoming />
          </Suspense>
        </Route>

        <Route path="/movies/most-popular">
          <Suspense fallback={<Spinner />}>
            <MostPopular />
          </Suspense>
        </Route>

        <Route path="/movies/top-rated">
          <Suspense fallback={<Spinner />}>
            <TopRated />
          </Suspense>
        </Route>

        <Route path="/search">
          <Suspense fallback={<Spinner />}>
            {!valueOfSearch ? <Redirect to="/" /> : <SearchPage />}
          </Suspense>
        </Route>

        <Route path="/price">
          <Suspense fallback={<Spinner />}>
            <Price />
          </Suspense>
        </Route>

        <Route path="/movies">
          <Suspense fallback={<Spinner />}>
            <Movie />
          </Suspense>
        </Route>

        <Route path="/" exact>
          <Suspense fallback={<Spinner />}>
            <Home />
          </Suspense>
        </Route>

        <Route>
          <Suspense fallback={<Spinner />}>
            <PageNotFound />
          </Suspense>
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
