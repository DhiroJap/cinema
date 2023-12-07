<<<<<<< HEAD
import { PrimaryButton, InputForm, TextareaForm, SelectForm } from '@/styles';
import { addMovie } from '@/utils/api';
import { lockRoute } from '@/utils/auth';
import { addFormValidation } from '@/utils/formValidator/formValidator';
import { AddMovieFormInterface } from '@/utils/types';
import axios from 'axios';
import React, { useState } from 'react';
=======
import { PrimaryButton, InputForm, TextareaForm, SelectForm } from "@/styles";
import { addMovie } from "@/utils/api";
import { addFormValidation } from "@/utils/formValidator/formValidator";
import { AddMovieFormInterface } from "@/utils/types";
import React, { useState } from "react";
>>>>>>> 25e0182e2ee7e9ae0055d9aa961e92be425ac008

interface ErrorMessage {
  title: string;
  director: string;
  poster: string;
  synopsis: string;
  duration: string;
  releaseDate: string;
  casts: string;
  writer: string;
  rating: string;
}
export default function AddMovieForm() {
  lockRoute();

  const [formData, setFormData] = useState<AddMovieFormInterface>({
    title: '',
    director: '',
    poster: null,
    synopsis: '',
    duration: 0,
    releaseDate: '',
    casts: '',
    writer: '',
    rating: '',
  });

  const [errors, setErrors] = useState<ErrorMessage>({
    title: '',
    director: '',
    poster: '',
    synopsis: '',
    duration: '',
    releaseDate: '',
    casts: '',
    writer: '',
    rating: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]:
        type === 'file' && 'files' in e.target && e.target.files?.length
          ? e.target.files[0]
          : value,
    }));
  };

  const handleOnChangeDuration = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    let parsedValue = 0;
    if (value !== '') {
      parsedValue = parseInt(value);
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: parsedValue,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formValidationMessage = addFormValidation(formData);
    setErrors({
      title: formValidationMessage.title,
      director: formValidationMessage.director,
      poster: formValidationMessage.poster,
      synopsis: formValidationMessage.synopsis,
      duration: formValidationMessage.duration,
      releaseDate: formValidationMessage.releaseDate,
      casts: formValidationMessage.casts,
      writer: formValidationMessage.writer,
      rating: formValidationMessage.rating,
    });

    const areAllErrorsEmpty = Object.values(formValidationMessage).every(
      (error) => error === ''
    );

    if (areAllErrorsEmpty) {
      addMovie(formData);
    } else {
      console.log(errors);
    }
  };

  return (
    <div className='my-5 py-3 w-[70%]'>
      <form onSubmit={handleSubmit}>
<<<<<<< HEAD
        <h2 className='font-bold text-3xl mb-3'>Add Movie Form</h2>
        <label className='block mb-2' htmlFor='title'>
          Title
        </label>
        <InputForm
          type='text'
          id='title'
          name='title'
          value={formData.title}
          onChange={handleChange}
        />

        <label className='block mb-2' htmlFor='director'>
          Director
        </label>
        <InputForm
          type='text'
          id='director'
          name='director'
          value={formData.director}
          onChange={handleChange}
        />

        <label className='block mb-2' htmlFor='poster'>
          Poster
        </label>
        <InputForm
          type='file'
          id='poster'
          name='poster'
          accept='image/*'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />

        <label className='block mb-2' htmlFor='synopsis'>
          Synopsis
        </label>
        <TextareaForm
          id='synopsis'
          name='synopsis'
          value={formData.synopsis}
          onChange={handleChange}
        />

        <label className='block mb-2' htmlFor='duration'>
          Duration (in minutes)
        </label>
        <InputForm
          type='string'
          id='duration'
          name='duration'
          value={formData.duration}
          onChange={handleOnChangeDuration}
        />

        <label className='block mb-2' htmlFor='releaseDate'>
          Release Date
        </label>
        <InputForm
          type='date'
          id='releaseDate'
          name='releaseDate'
          value={formData.releaseDate}
          onChange={handleChange}
        />

        <label className='block mb-2' htmlFor='casts'>
          Casts
        </label>
        <InputForm
          type='text'
          id='casts'
          name='casts'
          value={formData.casts}
          onChange={handleChange}
        />

        <label className='block mb-2' htmlFor='writer'>
          Writer
        </label>
        <InputForm
          type='text'
          id='writer'
          name='writer'
          value={formData.writer}
          onChange={handleChange}
        />

        <label className='block mb-2' htmlFor='rating'>
          Rating
        </label>
        <SelectForm
          id='rating'
          name='rating'
          value={formData.rating}
          onChange={handleChange}
        >
          <option value=''>Select...</option>
          <option value='SU'>SU</option>
          <option value='13+'>13+</option>
          <option value='17+'>17+</option>
          <option value='21+'>21+</option>
        </SelectForm>
=======
        <h2 className="font-bold text-3xl mb-3">Add Movie Form</h2>
        <div className="mb-3">
          <label className="block mb-2" htmlFor="title">
            Title <span style={{ color: "red" }}>*</span>
          </label>
          <InputForm
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          {errors.title && (
            <span className="mb-5" style={{ color: "red" }}>
              {errors.title}
            </span>
          )}
        </div>

        <div className="mb-3">
          <label className="block mb-2" htmlFor="director">
            Director <span style={{ color: "red" }}>*</span>
          </label>
          <InputForm
            type="text"
            id="director"
            name="director"
            value={formData.director}
            onChange={handleChange}
          />
          {errors.director && (
            <span className="mb-5" style={{ color: "red" }}>
              {errors.director}
            </span>
          )}
        </div>
        <div className="mb-3">
          <label className="block mb-2" htmlFor="poster">
            Poster <span style={{ color: "red" }}>*</span>
          </label>
          <InputForm
            type="file"
            id="poster"
            name="poster"
            accept="image/*"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e)
            }
          />
          {errors.poster && (
            <span className="mb-5" style={{ color: "red" }}>
              {errors.poster}
            </span>
          )}
        </div>

        <div className="mb-3">
          <label className="block mb-2" htmlFor="synopsis">
            Synopsis <span style={{ color: "red" }}>*</span>
          </label>
          <TextareaForm
            id="synopsis"
            name="synopsis"
            value={formData.synopsis}
            onChange={handleChange}
          />
          {errors.synopsis && (
            <span className="mb-5" style={{ color: "red" }}>
              {errors.synopsis}
            </span>
          )}
        </div>

        <div className="mb-3">
          <label className="block mb-2" htmlFor="duration">
            Duration (in minutes) <span style={{ color: "red" }}>*</span>
          </label>
          <InputForm
            type="string"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleOnChangeDuration}
          />
          {errors.duration && (
            <span className="mb-5" style={{ color: "red" }}>
              {errors.duration}
            </span>
          )}
        </div>

        <div className="mb-3">
          <label className="block mb-2" htmlFor="releaseDate">
            Release Date <span style={{ color: "red" }}>*</span>
          </label>
          <InputForm
            type="date"
            id="releaseDate"
            name="releaseDate"
            value={formData.releaseDate}
            onChange={handleChange}
          />
          {errors.releaseDate && (
            <span className="mb-5" style={{ color: "red" }}>
              {errors.releaseDate}
            </span>
          )}
        </div>

        <div className="mb-3">
          <label className="block mb-2" htmlFor="casts">
            Casts (Separate names with commas, e.g., John Doe, Susan){" "}
            <span style={{ color: "red" }}>*</span>
          </label>
          <InputForm
            type="text"
            id="casts"
            name="casts"
            value={formData.casts}
            onChange={handleChange}
          />
          {errors.casts && (
            <span className="mb-5" style={{ color: "red" }}>
              {errors.casts}
            </span>
          )}
        </div>

        <div className="mb-3">
          <label className="block mb-2" htmlFor="writer">
            Writer (Separate names with commas, e.g., John Doe, Susan)
            <span style={{ color: "red" }}>*</span>
          </label>
          <InputForm
            type="text"
            id="writer"
            name="writer"
            value={formData.writer}
            onChange={handleChange}
          />
          {errors.writer && (
            <span className="mb-5" style={{ color: "red" }}>
              {errors.writer}
            </span>
          )}
        </div>

        <div className="mb-3">
          <label className="block mb-2" htmlFor="rating">
            Rating <span style={{ color: "red" }}>*</span>
          </label>
          <SelectForm
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
          >
            <option value="">Select...</option>
            <option value="SU">SU</option>
            <option value="13+">13+</option>
            <option value="17+">17+</option>
            <option value="21+">21+</option>
          </SelectForm>
          {errors.rating && (
            <span className="mb-5" style={{ color: "red" }}>
              {errors.rating}
            </span>
          )}
        </div>
>>>>>>> 25e0182e2ee7e9ae0055d9aa961e92be425ac008

        <div className='flex justify-end mt-3'>
          <PrimaryButton type='submit'>Submit Movie</PrimaryButton>
        </div>
      </form>
    </div>
  );
}
