import PropTypes from "prop-types";
// import classNames from "classnames";
import { useField } from "formik";
import { ExclamationCircleIcon } from "@heroicons/react/solid";
import {
  FormInput,
  FormTextArea,
  FormLabel,
  PostForm,
  FormColumn,
  FormContainer,
  RadioControl,
} from "./styled-components/Components";

const Input = ({ type = "", label = "", className = "", ...props }) => {
  const [field, meta] = useField(props);
  const error = meta?.touched && meta?.error;

  return (
    <div>
      {label ? <FormLabel htmlFor="email">{label}</FormLabel> : null}

      {error ? (
        <FormLabel
          name="email"
          style={{
            color: "red",
            marginBottom: "20px",
          }}
        >
          {error}
        </FormLabel>
      ) : null}

      <div>
        {type === "boolean" ? (
          <input type="radio" {...field} {...props} />
        ) : null}
      </div>

      <div>
        {type === "textarea" ? <FormTextArea {...field} {...props} /> : null}

        {type === "text" ? (
          <FormInput {...field} {...props} type={type} />
        ) : null}
      </div>

      {type === "radio" ? (
        <RadioControl {...field} {...props} type={type} />
      ) : null}

      {type === "checkbox" ? (
        <RadioControl {...field} {...props} type={type} />
      ) : null}

      {type === "select" ? (
        <FormInput {...field} {...props} type={type} />
      ) : null}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
};

export default Input;
