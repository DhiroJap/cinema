import MovieDetails from "@/components/movies/moviedetails";
import { Page } from "@/styles";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GALAXY CINEMA - Movie Details",
  description: "Movie Details Page",
};

const MovieDetailsPage = ({ params }: { params: { id: string } }) => {
  return (
    <Page display="flex" $justifyContent="center" $alignItems="center">
      <MovieDetails id={params.id as string} />
    </Page>
  );
};

export default MovieDetailsPage;
