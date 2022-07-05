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
  bio: Yup.string().required(),
  title: Yup.string().trim().required(),
  twitter: Yup.string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Probably should be a link"
    )
    .required(),
  linkedin: Yup.string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Probably should be a link"
    )
    .required(),
  otherLink: Yup.string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Probably should be a link"
    )
    .required(),
  status: Yup.string().required(),
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
    cv: "",
    name: "",
    bio: "",
    twitter: "",
    linkedin: "",
    otherLink: "",
    status: "",
  };

  return (
    <div>
      <Formik
        initialValues={initialFormValues}
        validationSchema={ListingSchema}
        validateOnBlur={false}
        onSubmit={handleOnSubmit}
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            <FormContainer className="form-container-desktop">
              <h1 className="form-title"> Your Information </h1>

              <PostForm>
                <FormColumn>
                  <FormLabel> Full Name </FormLabel>
                  <Input
                    name="name"
                    type="text"
                    placeholder="Probably"
                    disabled={disabled}
                  />

                  <FormLabel> Title </FormLabel>
                  <Input
                    name="title"
                    type="text"
                    placeholder="Front-End Engineer"
                    disabled={disabled}
                  />
                  <FormLabel> Status </FormLabel>
                  <FormRadioControl role="group" aria-labelledby="radio-group">
                    <FormLabel>
                      <Input
                        type="radio"
                        name="status"
                        value="Actively Looking"
                      />
                      Actively Looking
                    </FormLabel>
                    <FormLabel>
                      <Input
                        type="radio"
                        name="status"
                        value="Open to Offers"
                      />
                      Open to offers
                    </FormLabel>
                  </FormRadioControl>

                  <FormLabel> Cv / Resume </FormLabel>
                  <ImageUpload
                    initialImage={{ src: cv, alt: initialFormValues.name }}
                    onChangePicture={uploadDoc}
                  />
                </FormColumn>
                <FormColumn>
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

              <FormLabel className="form-label">Bio</FormLabel>
              <Input
                name="bio"
                type="textarea"
                placeholder="A description of what you do, your skills, and why you would 'probably' be a greate asset to employers"
                disabled={disabled}
                className="form-text"
              />

              <button
                className="pushableLanding"
                type="submit"
                disabled={disabled || !isValid}
                style={{
                  marginLeft: "162px",
                  marginTop: "25px",
                }}
              >
                <span className="frontLanding">
                  {" "}
                  {isSubmitting ? "Submitting..." : buttonText}{" "}
                </span>
              </button>
            </FormContainer>
            <FormContainer className="form-container-mobile">
              <PostForm>
                <FormColumn>
                  <FormLabel> Full Name </FormLabel>
                  <Input
                    name="name"
                    type="text"
                    placeholder="Probably"
                    disabled={disabled}
                  />

                  <FormLabel> Title </FormLabel>
                  <Input
                    name="title"
                    type="text"
                    placeholder="Front-End Engineer"
                    disabled={disabled}
                  />
                  <FormLabel> Status </FormLabel>
                  <FormRadioControl role="group" aria-labelledby="radio-group">
                    <FormLabel>
                      <Input
                        type="radio"
                        name="status"
                        value="Actively Looking"
                      />
                      Actively Looking
                    </FormLabel>
                    <FormLabel>
                      <Input
                        type="radio"
                        name="status"
                        value="Open to Offers"
                      />
                      Open to offers
                    </FormLabel>
                  </FormRadioControl>

                  <FormLabel> Cv / Resume </FormLabel>
                  <ImageUpload
                    initialImage={{ src: cv, alt: initialFormValues.name }}
                    onChangePicture={uploadDoc}
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
                  <FormLabel className="form-label">Bio</FormLabel>
                  <Input
                    name="bio"
                    type="textarea"
                    placeholder="A description of what you do, your skills, and why you would 'probably' be a greate asset to employers"
                    disabled={disabled}
                    className="form-text"
                  />

                  <button
                    className="pushable"
                    type="submit"
                    disabled={disabled || !isValid}
                    style={{
                      marginLeft: "10px",
                      marginTop: "25px",
                    }}
                  >
                    <span className="front">
                      {" "}
                      {isSubmitting ? "Submitting..." : buttonText}{" "}
                    </span>
                  </button>
                </FormColumn>
              </PostForm>
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
    twitter: PropTypes.string,
    otherLink: PropTypes.string,
    status: PropTypes.string,
    linkedin: PropTypes.string,
  }),
  redirectPath: PropTypes.string,
  buttonText: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default TalentForm;
