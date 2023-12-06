import { AddMovieFormInterface, EditMovieFormInterface } from "../types";

export const addFormValidation = (formData: AddMovieFormInterface) => {
  const errors = {
    title: "",
    director: "",
    poster: "",
    synopsis: "",
    duration: "",
    releaseDate: "",
    casts: "",
    writer: "",
    rating: "",
  };

  if (!formData.title || formData.title.trim() === "") {
    errors.title = "Title is required";
  }

  if (!formData.director || formData.director.trim() === "") {
    errors.director = "Director is required";
  }

  if (!formData.poster) {
    errors.poster = "Poster is required";
  } else if (!formData.poster.type.startsWith("image/")) {
    errors.poster = "Poster must be an image file";
  }

  if (!formData.synopsis || formData.synopsis.trim() === "") {
    errors.synopsis = "Synopsis is required";
  }

  if (formData.duration == 0 || isNaN(formData.duration)) {
    errors.duration = "Duration is required and must be a number";
  }

  if (!formData.releaseDate || isNaN(Date.parse(formData.releaseDate))) {
    errors.releaseDate = "Release Date is required and must be a valid date";
  }

  if (!formData.casts || formData.casts.trim() === "") {
    errors.casts = "Casts is required";
  }

  if (!formData.writer || formData.writer.trim() === "") {
    errors.writer = "Writer is required";
  }

  if (!formData.rating || formData.rating.trim() === "") {
    errors.rating = "Rating is required";
  }

  return errors;
};

export const editFormValidation = (formData: EditMovieFormInterface) => {
  const errors = {
    title: "",
    director: "",
    poster: "",
    synopsis: "",
    duration: "",
    releaseDate: "",
    casts: "",
    writer: "",
    rating: "",
  };

  if (!formData.newTitle || formData.newTitle === "") {
    errors.title = "Title is required";
  }

  if (!formData.director || formData.director.trim() === "") {
    errors.director = "Director is required";
  }

  if (formData.newPoster) {
    if (!formData.newPoster.type.startsWith("image/")) {
      errors.poster = "Poster must be an image file";
    }
  }

  if (!formData.synopsis || formData.synopsis.trim() === "") {
    errors.synopsis = "Synopsis is required";
  }

  if (formData.duration == 0 || isNaN(formData.duration)) {
    errors.duration = "Duration is required and must be a number";
  }

  if (!formData.releaseDate || isNaN(Date.parse(formData.releaseDate))) {
    errors.releaseDate = "Release Date is required and must be a valid date";
  }

  if (!formData.casts || formData.casts.trim() === "") {
    errors.casts = "Casts is required";
  }

  if (!formData.writer || formData.writer.trim() === "") {
    errors.writer = "Writer is required";
  }

  if (!formData.rating || formData.rating.trim() === "") {
    errors.rating = "Rating is required";
  }

  return errors;
};
