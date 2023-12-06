export type PageProps = Partial<{
  display: string;
  $justifyContent: string;
  $alignItems: string;
}>;

export type Movies = {
  id: number;
  title: string;
  director: string;
  rating: string;
  poster: string;
  synopsis: string;
  duration: number;
  releaseDate: string;
  casts: string;
  writer: string;
};

export type NowPlayingType = {
  id: number;
  title: string;
  director: string;
  rating: string;
  poster: string;
  synopsis: string;
  duration: number;
  releaseDate: string;
  casts: string;
  writer: string;
};

export type UpcomingType = {
  id: number;
  title: string;
  director: string;
  rating: string;
  poster: string;
  synopsis: string;
  duration: number;
  releaseDate: string;
  casts: string;
  writer: string;
};

export interface MovieTime {
  id: number;
  title: string;
  timeStart: string;
}

export interface pay {
  paymentId: number;
  movieName: string;
  studio: string;
  price: number;
  timeStart: string;
  studioSeat: [];
}