import React from "react";
import Navbar from "@/components/Navbar";
import {
  FormContainer,
  FormColumn,
  PostForm,
  FormInput,
  FormTextArea,
  FormLabel,
  Button,
} from "@/components/styled-components/Components";
import axios from "axios";
import { getSession } from "next-auth/react";
import JobFormFeatured from "@/components/JobFormFeatured";
import { PaddleLoader } from "@/components/PaddleLoader";

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

const createJobFeatured = () => {
  const addJob = (data) => axios.post("/api/post-job-featured", data);
  const paymentSubmission = () => {
    Paddle.Checkout.open({
      product: 29240,
      email: session.user.email,
      successCallback: addJob,
    });
  };
  return (
    <>
      <PaddleLoader />
      <Navbar />
      <JobFormFeatured buttonText="Submit" redirectPath="/" onSubmit={addJob} />
    </>
  );
};

export default createJobFeatured;
