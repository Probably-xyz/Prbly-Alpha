/* eslint-disable react/no-unescaped-entities */
import PropTypes from "prop-types";
import JobCard from "@/components/JobCard";
import { ExclamationIcon } from "@heroicons/react/outline";
import {
  JobPostSection,
  Form,
  FormCon,
  TitleSearch,
  LocationSearch,
} from "./styled-components/Components";
import { useState } from "react";

const JobGrid = ({ post = [] }) => {
  const isEmpty = post.length === 0;
  const [locationSearch, setLocationSearch] = useState("");
  const [titleSearch, setTitleSearch] = useState("");
  const [elNumber, setElNumber] = useState(8);

  const postFiltered = post.slice(0, elNumber);

  const lazyLoad = () => {
    setElNumber(elNumber + elNumber);
  };

  return isEmpty ? null : (
    <>
      <Form>
        <span
          style={{
            display: "inline-block",
            marginTop: "8px",
          }}
        >
          <img src="/Filters.png" className="form-icon" />
        </span>

        <TitleSearch
          type="text"
          placeholder="Front-End Developer"
          onChange={(event) => {
            setTitleSearch(event.target.value);
          }}
        />
        <span
          style={{
            display: "inline-block",
            marginTop: "8px",
          }}
        >
          <img src="/Location.png" className="form-icon" />
        </span>
        <LocationSearch
          type="text"
          placeholder="Dubai / UAE"
          onChange={(event) => {
            setLocationSearch(event.target.value);
          }}
        />
      </Form>

      <JobPostSection>
        {postFiltered
          .filter((post) => {
            if (titleSearch == "" && locationSearch == "") {
              return post;
            } else if (
              post.title.toLowerCase().includes(titleSearch.toLowerCase()) &&
              post.location.toLowerCase().includes(locationSearch.toLowerCase())
            ) {
              return post;
            }
          })

          .map((post) => (
            <JobCard key={post.id} {...post} />
          ))}
      </JobPostSection>
      <button
        onClick={() => lazyLoad()}
        className="pushableLanding"
        style={{ marginTop: "60px" }}
      >
        <span className="frontLanding"> Load More...</span>
      </button>
    </>
  );
};

JobGrid.propTypes = {
  post: PropTypes.array,
};

export default JobGrid;
