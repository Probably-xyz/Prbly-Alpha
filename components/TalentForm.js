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
  name: Yup.string().trim().required(),
  bio: Yup.string().trim().required(),
  headline: Yup.string().trim().required(),
  title: Yup.string().trim().required(),
  twitter: Yup.string().trim().required(),
  github: Yup.string().trim().required(),
  linkedin: Yup.string().trim().required(),
  otherLink: Yup.string().trim().required(),
  skills: Yup.array().required(),
});

const TalentForm = ({
  initialValues = null,
  redirectPath = "",
  buttonText = "Submit",
  onSubmit = () => null,
}) => {
  const router = useRouter();

  const [disabled, setDisabled] = useState(false);
  const [imageUrl, setImageUrl] = useState(initialValues?.image ?? "");
  const [cvUrl, setCvUrl] = useState(initialValues?.cv ?? "");

  const upload = async (image) => {
    if (!image) return;

    let toastId;
    try {
      setDisabled(true);
      toastId = toast.loading("Uploading...");
      const { data } = await axios.post("/api/image-upload", { image });
      setImageUrl(data?.url);
      toast.success("Successfully uploaded", { id: toastId });
    } catch (e) {
      toast.error("Unable to upload", { id: toastId });
      setImageUrl("");
    } finally {
      setDisabled(false);
    }
  };

  const uploadDoc = async (cv) => {
    if (!cv) return;

    let toastId;
    try {
      setDisabled(true);
      toastId = toast.loading("Uploading...");
      const { data } = await axios.post("/api/doc-upload", { cv });
      setCvUrl(data?.url);
      toast.success("Successfully uploaded", { id: toastId });
    } catch (e) {
      toast.error("Unable to upload", { id: toastId });
      setCvUrl("");
    } finally {
      setDisabled(false);
    }
  };

  const handleOnSubmit = async (values = null) => {
    let toastId;
    try {
      setDisabled(true);
      toastId = toast.loading("Submitting...");

      if (typeof onSubmit === "function") {
        await onSubmit({ ...values, image: imageUrl, cv: cvUrl });
      }
      toast.success("Successfully submitted", { id: toastId });

      if (redirectPath) {
        router.push(redirectPath);
      }
    } catch (e) {
      toast.error("Unable to submit", { id: toastId });
      setDisabled(false);
    }
  };

  const { image, cv, ...initialFormValues } = initialValues ?? {
    image: "",
    title: "",
    headline: "",
    cv: "",
    name: "",
    bio: "",
    twitter: "",
    linkedin: "",
    github: "",
    otherLink: "",
    skills: [],
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
              <h1 style={{ fontSize: "40px" }}> Your Information </h1>

              <PostForm>
                <FormColumn>
                  <FormLabel> Full Name </FormLabel>
                  <Input
                    name="name"
                    type="text"
                    placeholder="Probably"
                    disabled={disabled}
                  />
                  <FormLabel> Headline </FormLabel>
                  <Input
                    name="headline"
                    type="text"
                    placeholder="A short bio"
                    disabled={disabled}
                  />
                  <FormLabel> Title </FormLabel>
                  <Input
                    name="title"
                    type="text"
                    placeholder="Front-End Engineer"
                    disabled={disabled}
                  />
                  <FormLabel> Skills </FormLabel>
                  <FormRadioControl
                    role="group"
                    aria-labelledby="checkbox-group"
                  >
                    <FormLabel>
                      <Input type="checkbox" name="skills" value="React" />
                      React
                    </FormLabel>
                    <FormLabel>
                      <Input type="checkbox" name="skills" value="Web3" />
                      Web3
                    </FormLabel>
                    <FormLabel>
                      <Input type="checkbox" name="skills" value="HTML" />
                      HTML
                    </FormLabel>
                  </FormRadioControl>

                  <FormLabel> Cv / Resume </FormLabel>
                  <ImageUpload
                    initialImage={{ src: cv, alt: initialFormValues.name }}
                    onChangePicture={uploadDoc}
                  />
                </FormColumn>
                <FormColumn>
                  <FormLabel> Github </FormLabel>
                  <Input
                    name="github"
                    type="text"
                    placeholder="https://www.github.com/prbly"
                    disabled={disabled}
                  />
                  <FormLabel> Twitter </FormLabel>
                  <Input
                    name="twitter"
                    type="text"
                    placeholder="https://www.twitter.com/prbly"
                    disabled={disabled}
                  />
                  <FormLabel> Linkedin</FormLabel>
                  <Input
                    name="linkedin"
                    type="text"
                    placeholder="https://www.linkedin.com/prbly"
                    disabled={disabled}
                  />
                  <FormLabel> Additional Link </FormLabel>
                  <Input
                    name="otherLink"
                    type="text"
                    placeholder="https://www.prbly.xyz"
                    disabled={disabled}
                  />
                  <FormLabel> Image </FormLabel>
                  <ImageUpload
                    initialImage={{ src: image, alt: initialFormValues.name }}
                    onChangePicture={upload}
                  />
                </FormColumn>
              </PostForm>

              <Input
                name="bio"
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

TalentForm.propTypes = {
  initialValues: PropTypes.shape({
    image: PropTypes.string,
    cv: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    bio: PropTypes.string,
    headline: PropTypes.string,
    twitter: PropTypes.string,
    github: PropTypes.string,
    otherLink: PropTypes.string,
    skills: PropTypes.array,
    linkedin: PropTypes.string,
  }),
  redirectPath: PropTypes.string,
  buttonText: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default TalentForm;
