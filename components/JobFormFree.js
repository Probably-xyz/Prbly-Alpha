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
  Section,
} from "./styled-components/Components";

const ListingSchema = Yup.object().shape({
  title: Yup.string().trim().required(),
  description: Yup.string().required(),
  type: Yup.string().trim().required(),
  benefits: Yup.array().required(),
  location: Yup.string().trim().required(),
  category: Yup.string().trim().required(),
  salary: Yup.string(),
  options: Yup.string().trim().required(),
  atsUrl: Yup.string().matches(
    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    "Probably should be a link"
  ),
});

const JobFormFree = ({
  initialValues = null,
  redirectPath = "",
  buttonText = "Submit",
  onSubmit = () => null,
}) => {
  const router = useRouter();

  const [disabled, setDisabled] = useState(false);

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
    options: "",
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
              <h1 style={{ fontSize: "40px", marginLeft: "165px" }}>
                {" "}
                Post Information{" "}
              </h1>
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
                      <Input
                        type="checkbox"
                        name="benefits"
                        value="Pay in Crypto"
                      />
                      Pay in Crypto
                    </FormLabel>
                    <FormLabel>
                      <Input
                        type="checkbox"
                        name="benefits"
                        value="Relocation"
                      />
                      Relocation Package
                    </FormLabel>
                    <FormLabel>
                      <Input
                        type="checkbox"
                        name="benefits"
                        value="Visa Sponsor"
                      />
                      Visa Sponsor
                    </FormLabel>
                  </FormRadioControl>

                  <FormLabel> Job Salary </FormLabel>
                  <Input name="salary" type="select" disabled={disabled}>
                    <option value="$0-$30,000" name="salary">
                      $0-$30,000
                    </option>
                    <option value="$31,000-$60,000" name="salary">
                      $31,000-$60,000
                    </option>
                    <option value="$61,000-$90,000" name="salary">
                      $61,000-$90,000
                    </option>
                    <option value="$90,000+" name="salary">
                      $90,000+
                    </option>
                  </Input>
                  <FormLabel> Job Category </FormLabel>
                  <Input name="category" type="select" disabled={disabled}>
                    <option value="Development" name="category">
                      Development 🖥️
                    </option>
                    <option value="Design" name="category">
                      Design 🎨
                    </option>
                    <option value="Marketing" name="category">
                      Marketing 🚀
                    </option>
                    <option value="Business" name="category">
                      Business 👔
                    </option>
                    <option value="Support" name="category">
                      Support ☎️
                    </option>
                    <option value="Finance" name="category">
                      Finance 💰
                    </option>
                    <option value="Research" name="category">
                      Research 🔬
                    </option>
                    <option value="Other" name="category">
                      Other
                    </option>
                  </Input>
                </FormColumn>
                <FormColumn>
                  <FormLabel> Job Location </FormLabel>
                  <Input
                    name="location"
                    type="select"
                    placeholder="UAE / Dubai"
                    disabled={disabled}
                  >
                    <optgroup label="GCC">
                      <option value="Bahrain" name="location">
                        Bahrain 🇧🇭
                      </option>
                      <option value="Kuwait" name="location">
                        Kuwait 🇰🇼
                      </option>
                      <option value="Oman" name="location">
                        Oman 🇴🇲
                      </option>
                      <option value="Qatar" name="location">
                        Qatar 🇶🇦
                      </option>
                      <option value=" Saudi Arabia" name="location">
                        Saudi Arabia 🇸🇦
                      </option>
                      <option value=" UAE" name="location">
                        UAE 🇦🇪
                      </option>
                    </optgroup>
                    <optgroup label="Africa">
                      <option value="Algeria" name="location">
                        Algeria 🇩🇿
                      </option>
                      <option value="Egypt" name="location">
                        Egypt 🇪🇬
                      </option>
                      <option value="Libya" name="location">
                        Libya 🇱🇾
                      </option>
                      <option value="Morocca" name="location">
                        Morocca 🇲🇦
                      </option>
                      <option value="Tunisia" name="location">
                        Tunisia 🇹🇳
                      </option>
                    </optgroup>
                    <optgroup label="Middle East">
                      <option value="Iraq" name="location">
                        Iraq 🇮🇶
                      </option>
                      <option value="Lebanon" name="location">
                        Lebanon 🇱🇧
                      </option>
                      <option value="Jordan" name="location">
                        Jordan 🇯🇴
                      </option>
                      <option value="Palestine" name="location">
                        Palestine 🇵🇸
                      </option>
                      <option value="Syria" name="location">
                        Syria 🇸🇾
                      </option>
                      <option value="Tunisia" name="location">
                        Tunisia 🇹🇳
                      </option>
                      <option value="Yemen" name="location">
                        Yemen 🇾🇪
                      </option>
                      <option value="Turkey" name="location">
                        Turkey 🇹🇷
                      </option>
                    </optgroup>
                    <option value="Worldwide / Global" name="location">
                      Worldwide / Global 🌍
                    </option>
                  </Input>
                  <FormLabel> Job Type </FormLabel>
                  <FormRadioControl
                    role="group"
                    aria-labelledby="checkbox-group"
                  >
                    <FormLabel>
                      <Input type="radio" name="type" value="Full-Time" />
                      Full-Time
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

                  <FormLabel>Options </FormLabel>
                  <FormRadioControl
                    role="group"
                    aria-labelledby="checkbox-group"
                  >
                    <FormLabel>
                      <Input type="radio" name="options" value="Full-Time" />
                      Hybrid
                    </FormLabel>
                    <FormLabel>
                      <Input type="radio" name="options" value="Part-Time" />
                      On-Site
                    </FormLabel>
                    <FormLabel>
                      <Input type="radio" name="options" value="Internship" />
                      Remote
                    </FormLabel>
                  </FormRadioControl>
                  <FormLabel> ATS URL </FormLabel>
                  <Input
                    name="atsUrl"
                    type="text"
                    placeholder="Link"
                    disabled={disabled}
                  />
                  <span
                    style={{
                      display: "inline-block",
                      position: "absolute",
                      top: "975px",
                      color: "rgba(0, 0, 0, 0.5)",
                      fontFamily: "Grotesk Medium",
                    }}
                  >
                    *Applications will be redirected to this link. Use for
                    Applicant tracking systems.
                  </span>
                </FormColumn>
              </PostForm>

              <FormLabel
                style={{
                  marginLeft: "162px",
                }}
              >
                Job Description
              </FormLabel>
              <Input
                name="description"
                type="textarea"
                placeholder="Enter Job Description. Please be as detailed as possible, and include requirements, responsibilities, benefits, and any other relevant information. Note: Use Markdown for more detailed formatting"
                disabled={disabled}
                style={{
                  marginLeft: "162px",
                  marginTop: "15px",
                  marginBottom: "20px",
                }}
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
    benefits: PropTypes.array,
    location: PropTypes.string,
    category: PropTypes.string,
    salary: PropTypes.string,
    atsUrl: PropTypes.string,
    options: PropTypes.string,
  }),
  redirectPath: PropTypes.string,
  buttonText: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default JobFormFree;
