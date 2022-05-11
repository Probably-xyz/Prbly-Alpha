import { useState } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import { Formik, Form } from "formik";
import Input from "@/components/Input";
import ImageUpload from "@/components/ImageUpload";
import axios from "axios";
import DocUpload from "@/components/DocUpload";
import {
  FormContainer,
  FormColumn,
  PostForm,
  FormInput,
  FormTextArea,
  FormLabel,
  Button,
  FormRadioControl,
} from "./styled-components/Components";

const ListingSchema = Yup.object().shape({
  title: Yup.string().trim().required(),
  description: Yup.string().trim().required(),
  type: Yup.string().trim().required(),
  benefits: Yup.array().required(),
  location: Yup.string().trim().required(),
  category: Yup.string().trim().required(),
  // featured: Yup.boolean().required(),
  salary: Yup.string(),
  intro: Yup.string().trim().required(),
  atsUrl: Yup.string().trim(),
});

const JobFormFree = ({
  initialValues = null,
  redirectPath = "",
  buttonText = "Submit",
  onSubmit = () => null,
}) => {
  const router = useRouter();

  const [disabled, setDisabled] = useState(false);
  // const [imageUrl, setImageUrl] = useState(initialValues?.image ?? "");
  // const [cvUrl, setCvUrl] = useState(initialValues?.cv ?? "");

  // const upload = async (image) => {
  //   if (!image) return;

  //   let toastId;
  //   try {
  //     setDisabled(true);
  //     toastId = toast.loading("Uploading...");
  //     const { data } = await axios.post("/api/image-upload", { image });
  //     setImageUrl(data?.url);
  //     toast.success("Successfully uploaded", { id: toastId });
  //   } catch (e) {
  //     toast.error("Unable to upload", { id: toastId });
  //     setImageUrl("");
  //   } finally {
  //     setDisabled(false);
  //   }
  // };

  // const uploadDoc = async (cv) => {
  //   if (!cv) return;

  //   let toastId;
  //   try {
  //     setDisabled(true);
  //     toastId = toast.loading("Uploading...");
  //     const { data } = await axios.post("/api/doc-upload", { cv });
  //     setCvUrl(data?.url);
  //     toast.success("Successfully uploaded", { id: toastId });
  //   } catch (e) {
  //     toast.error("Unable to upload", { id: toastId });
  //     setCvUrl("");
  //   } finally {
  //     setDisabled(false);
  //   }
  // };

  const handleOnSubmit = async (values = null) => {
    let toastId;
    try {
      setDisabled(true);
      toastId = toast.loading("Submitting...");
      // Submit data
      if (typeof onSubmit === "function") {
        await onSubmit({ ...values });
      }
      toast.success("Successfully submitted", { id: toastId });
      // Redirect user
      if (redirectPath) {
        router.push(redirectPath);
      }
    } catch (e) {
      toast.error("Unable to submit", { id: toastId });
      setDisabled(false);
    }
  };

  const { ...initialFormValues } = initialValues ?? {
    title: "",
    description: "",
    type: "",
    benefits: [],
    location: "",
    category: "",
    salary: "",
    intro: "",
  };

  return (
    <div>
      {/* <div className="mb-8 max-w-md">
        <ImageUpload
          initialImage={{ src: image, alt: initialFormValues.name }}
          onChangePicture={upload}
        />
      </div> */}

      <Formik
        initialValues={initialFormValues}
        validationSchema={ListingSchema}
        validateOnBlur={false}
        onSubmit={handleOnSubmit}
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            <FormContainer>
              <h1 style={{ fontSize: "40px" }}> Post Information </h1>

              <PostForm>
                <FormColumn>
                  <FormLabel> Job Title </FormLabel>
                  <Input
                    name="title"
                    type="text"
                    placeholder="Front-End Engineer"
                    disabled={disabled}
                  />

                  <FormLabel>Job benefits</FormLabel>
                  <FormRadioControl
                    role="group"
                    aria-labelledby="checkbox-group"
                  >
                    <FormLabel>
                      <Input type="checkbox" name="benefits" value="Remote" />
                      Remote
                    </FormLabel>
                    <FormLabel>
                      <Input
                        type="checkbox"
                        name="benefits"
                        value="Pay in Crypto"
                      />
                      Pay in Crypto
                    </FormLabel>
                    <FormLabel>
                      <Input type="checkbox" name="benefits" value="Hybrid" />
                      Hybrid
                    </FormLabel>
                    <FormLabel>
                      <Input type="checkbox" name="benefits" value="Massage" />
                      Visa Sponsor
                    </FormLabel>
                  </FormRadioControl>

                  <FormLabel> Job Salary </FormLabel>
                  <Input
                    name="salary"
                    type="text"
                    placeholder="$80,000/Year"
                    disabled={disabled}
                  />
                  <FormLabel> Job Intro </FormLabel>
                  <Input
                    name="intro"
                    type="text"
                    placeholder="A Short Description"
                    disabled={disabled}
                  />
                </FormColumn>
                <FormColumn>
                  <FormLabel> Job Location </FormLabel>
                  <Input
                    name="location"
                    type="select"
                    placeholder="UAE / Dubai"
                    disabled={disabled}
                  />
                  <FormLabel> Job Type </FormLabel>
                  <FormRadioControl
                    role="group"
                    aria-labelledby="checkbox-group"
                  >
                    <FormLabel>
                      <Input type="radio" name="type" value="Full-Time" />
                      Full-ime
                    </FormLabel>
                    <FormLabel>
                      <Input type="radio" name="type" value="Part-Time" />
                      Part-Time
                    </FormLabel>
                    <FormLabel>
                      <Input type="radio" name="type" value="Internship" />
                      Internship
                    </FormLabel>
                  </FormRadioControl>
                  <FormLabel> Job Category </FormLabel>
                  <Input
                    name="category"
                    type="text"
                    placeholder="Development"
                    disabled={disabled}
                  />
                  <FormLabel> ATS URL </FormLabel>
                  <Input
                    name="atsUrl"
                    type="text"
                    placeholder="Link"
                    disabled={disabled}
                  />
                </FormColumn>
              </PostForm>
              <Input
                name="description"
                type="textarea"
                placeholder="We are coool AF"
                disabled={disabled}
              />
              <Button
                style={{
                  width: "120px",
                  height: "50px",
                  position: "relative",
                  top: "20px",
                }}
                type="submit"
                disabled={disabled || !isValid}
              >
                {isSubmitting ? "Submitting..." : buttonText}
              </Button>
            </FormContainer>
          </Form>
        )}
      </Formik>
    </div>
  );
};

JobFormFree.propTypes = {
  initialValues: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.string,
    benefits: PropTypes.string,
    location: PropTypes.string,
    category: PropTypes.string,
    salary: PropTypes.string,
    atsUrl: PropTypes.string,
    intro: PropTypes.string,
  }),
  redirectPath: PropTypes.string,
  buttonText: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default JobFormFree;
