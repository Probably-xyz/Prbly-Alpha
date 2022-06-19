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
  Section,
} from "./styled-components/Components";

const ListingSchema = Yup.object().shape({
  name: Yup.string().trim().required(),
  bio: Yup.string().trim().required(),
  website: Yup.string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Probably should be a link"
    )
    .required(),
  industry: Yup.string().trim().required(),
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
    name: "",
    industry: "",
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
          <Section>
            <Form>
              <FormContainer>
                <FormColumn>
                  <FormLabel> Company Name </FormLabel>
                  <Input
                    name="name"
                    type="text"
                    placeholder="Probably"
                    disabled={disabled}
                  />

                  <FormLabel> Company Website </FormLabel>
                  <Input
                    name="website"
                    type="text"
                    placeholder="https://www.prbly.xyz"
                    disabled={disabled}
                  />

                  <FormLabel> Sector </FormLabel>
                  <Input
                    name="industry"
                    type="select"
                    placeholder="Business"
                    disabled={disabled}
                  >
                    <option value="Crypto" name="industry">
                      Crypto
                    </option>
                    <option value="NFTs" name="industry">
                      NFTs
                    </option>
                    <option value="Metaverse" name="industry">
                      Metaverse
                    </option>
                    <option value="Blockchain" name="industry">
                      Blockchain
                    </option>
                    <option value="Other" name="industry">
                      Other
                    </option>
                  </Input>

                  <FormLabel> Company Logo </FormLabel>
                  <ImageUpload
                    initialImage={{ src: image, alt: initialFormValues.name }}
                    onChangePicture={upload}
                    required="true"
                  />

                  <FormLabel> Description </FormLabel>
                  <Input
                    name="bio"
                    type="textarea"
                    placeholder="Tell us more about your company"
                    disabled={disabled}
                    style={{
                      marginLeft: "0px",
                      marginBottom: "40px",
                    }}
                  />

                  <button
                    type="submit"
                    className="pushable"
                    disabled={disabled || !isValid}
                  >
                    <span className="front">
                      {isSubmitting ? "Submitting..." : buttonText}{" "}
                    </span>
                  </button>
                </FormColumn>
              </FormContainer>
            </Form>
          </Section>
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
    industry: PropTypes.string,
  }),
  redirectPath: PropTypes.string,
  buttonText: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default CompanyForm;
