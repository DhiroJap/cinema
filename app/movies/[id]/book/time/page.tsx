import MovieTime from "@/components/movies/movieTime";
import { Page } from "@/styles";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GALAXY CINEMA - Movie Details",
  description: "Movie Details Page",
};

const MovieTimePage = ({ params }: { params: { id: string } }) => {
  return (
    <Page display="flex" $justifyContent="center" $alignItems="center">
      <MovieTime id={params.id as string} />
    </Page>
  );
};

export default MovieTimePage;
