import Header from '@/components/Header';
import HeroCarousel from '@/feature/movies/MovieHero';
import PreviewSection from '@/feature/movies/PreviewSection';
import ContinueWatchingSection from '@/feature/movies/ContinueWatchingSection';
import { movieApi } from '@/feature/movies/services/movieApi';

export default async function Home() {
  const top10KoreaData = await movieApi.getTop10KoreaToday();
  const previews = await movieApi.getNowPlaying();
  const continueWatching = await movieApi.getPopular();

  return (
    <main className="flex w-full min-h-dvh justify-center bg-black">
      <div className="w-full px-4 pt-6 z-10 absolute">
        <Header />
      </div>

      <div className="w-full bg-black">
        <HeroCarousel movies={top10KoreaData.results} />
        <PreviewSection movies={previews.results} />
        <ContinueWatchingSection movies={continueWatching.results} />
      </div>
    </main>
  );
}
