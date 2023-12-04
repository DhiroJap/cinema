"use client";
import AddMovieForm from "@/components/admin/AddMovieForm";
import MovieTable from "@/components/admin/MovieTable";
import { Page } from "@/styles";

export default function Payment() {
  return (
    <Page display="flex" $justifyContent="center" $alignItems="center">
      <AddMovieForm />
    </Page>
  );
}
