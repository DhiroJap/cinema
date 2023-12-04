"use client";
import MovieTable from "@/components/admin/MovieTable";
import { Page } from "@/styles";

export default function Payment() {
  return (
    <Page display="flex" $justifyContent="center" $alignItems="center">
      <MovieTable />
    </Page>
  );
}
