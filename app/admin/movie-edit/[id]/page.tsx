import EditMovieForm from "@/components/admin/EditMovieForm";
import { Page } from "@/styles";

export default function MovieEdit({ params }: { params: { id: string } }) {
  return (
    <Page display="flex" $justifyContent="center" $alignItems="center">
      <EditMovieForm id={params.id as string} />
    </Page>
  );
}
