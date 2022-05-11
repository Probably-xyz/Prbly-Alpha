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
  RadioControl,
  FormRadioControl,
} from "./styled-components/Components";

const ListingSchema = Yup.object().shape({
  name: Yup.string().trim().required(),
  bio: Yup.string().trim().required(),
  intro: Yup.string().trim().required(),
  website: Yup.string().trim(),
  size: Yup.string().trim(),
  industry: Yup.string().trim(),
  instagram: Yup.string().trim(),
});

const CompanyForm = ({
  initialValues = null,
  redirectPath = "",
  buttonText = "Submit",
  onSubmit = () => null,
}) => {
  const router = useRouter();

  const [disabled, setDisabled] = useState(false);
  const [imageUrl, setImageUrl] = useState(initialValues?.image ?? "");

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

  const handleOnSubmit = async (values = null) => {
    let toastId;
    try {
      setDisabled(true);
      toastId = toast.loading("Submitting...");
      // Submit data
      if (typeof onSubmit === "function") {
        await onSubmit({ ...values, image: imageUrl });
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

  const { image, ...initialFormValues } = initialValues ?? {
    image: "",
    bio: "",
    intro: "",
    name: "",
    industry: "",
    size: "",
    website: "",
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
            <FormContainer>
              <FormColumn>
                <FormLabel> Name </FormLabel>
                <Input
                  name="name"
                  type="text"
                  placeholder="Probably"
                  disabled={disabled}
                />
                <FormLabel> Intro </FormLabel>
                <Input
                  name="intro"
                  type="text"
                  placeholder="We are a cool company"
                  disabled={disabled}
                />

                <FormLabel> Website </FormLabel>
                <Input
                  name="website"
                  type="text"
                  placeholder="https://www.prbly.xyz"
                  disabled={disabled}
                />

                <FormLabel> Industry </FormLabel>
                <Input
                  name="industry"
                  type="text"
                  placeholder="Business"
                  disabled={disabled}
                />

                <FormLabel> Size </FormLabel>
                <FormRadioControl role="group" aria-labelledby="my-radio-group">
                  <label>
                    <Input type="radio" name="size" value="0-10" />
                    0-10
                  </label>
                  <label>
                    <Input type="radio" name="size" value="0-10" />
                    0-10
                  </label>
                  <label>
                    <Input type="radio" name="size" value="0-10" />
                    0-10
                  </label>
                  <label>
                    <Input type="radio" name="size" value="0-10" />
                    0-10
                  </label>
                </FormRadioControl>

                <FormLabel> Image </FormLabel>
                <ImageUpload
                  initialImage={{ src: image, alt: initialFormValues.name }}
                  onChangePicture={upload}
                />

                <Input
                  name="bio"
                  type="textarea"
                  placeholder="Long Bio"
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
              </FormColumn>
            </FormContainer>
          </Form>
        )}
      </Formik>
    </div>
  );
};

CompanyForm.propTypes = {
  initialValues: PropTypes.shape({
    image: PropTypes.string,
    website: PropTypes.string,
    name: PropTypes.string,
    size: PropTypes.string,
    bio: PropTypes.string,
    introduction: PropTypes.string,
    industry: PropTypes.string,
  }),
  redirectPath: PropTypes.string,
  buttonText: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default CompanyForm;
