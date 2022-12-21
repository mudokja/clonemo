"use client";

import { useForm, FormProvider, useFormContext } from "react-hook-form";
import React from "react";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Textarea
} from "@chakra-ui/react";
const filterTitle=/((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

async function onSubmit(data: any) 
{
  try {
    const body = data
    const res=await fetch(`/api/v1/post/page`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    return res.json();
  } catch (error) {
    console.error(error)
  }
  
}

export default function PostForm() {
  const { handleSubmit, register, formState :{errors,isSubmitting, isDirty, isValid,dirtyFields }} = useForm(
    { defaultValues: { authorName: "이름없음", postTitle:"",postContent:"" }}
  );

  function validateTitle(value: string) {
    if (!value) {
      return "제목은 비울 수 없습니다";
    } else if (value.length>80){
      return "제목은 80자 미만이여야합니다";
    } else if (filterTitle.test(value)) {
      return "URL은 제목에 포함 될 수 없습니다";
    } else return true;
  }
  function validateName(value: string) {
    if (!value) {
    
    } else return true;
  }
  function validateContent(value: string) {
    if (!value) {
      return "본문을 작성해주세요";
    } else if (value.length<2){
      return "테스트를 위해 조금 더 작성해주세요";
    } else return true;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={dirtyFields.authorName&&!isValid}>
        <FormLabel htmlFor="authorName">작성자</FormLabel>
        <Input {...register('authorName',{ validate: validateName })} />
        <FormErrorMessage>
          {errors.authorName && errors.authorName.message}
      </FormErrorMessage>
      </FormControl>
      <FormControl isRequired isInvalid={dirtyFields.postTitle&&!isValid}>
        <FormLabel htmlFor="title">제목</FormLabel>
        <Input {...register('postTitle',{ validate: validateTitle })} />
        <FormErrorMessage>
          {errors.postTitle && errors.postTitle.message}
      </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={dirtyFields.postContent&&!isValid}>
        <FormLabel htmlFor="postContent"></FormLabel>
        <Textarea {...register('postContent',{ validate: validateContent })} />
        <FormErrorMessage>
          {errors.postContent && errors.postContent.message}
      </FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        등록
      </Button>
    </form>
  );
}

