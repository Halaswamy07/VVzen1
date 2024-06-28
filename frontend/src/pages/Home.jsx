import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { GrNext } from "react-icons/gr";
import logo from "../img/logo.png";
import axios from "axios";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

const Home = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    contactNumber: "",
    alternateContactNumber: "",
    emailAddress: "",
    dateOfBirth: "",
    age: "",
    gender: "",
    maritalStatus: "",
    nationality: "",
    bloodGroup: "",
    residentialAddress: "",
    city: "",
    state: "",
    postalCode: "",
    currentLocation: "",
    preferredLocation: "",
    passportNumber: "",
    passportCopy: null,
    aadhaarCardNumber: "",
    aadhaarCardCopy: null,
    panCardNumber: "",
    panCardCopy: null,
    drivingLicenseNumber: "",
    drivingLicenseCopy: null,
    voterIdNumber: "",
    voterIdCopy: null,
    photograph: null,
    linkedInProfile: "",
    resume: null,
    socialMediaLinks: "",
    onlinePortfolio: "",
    skills: "",
    languages: "",
    course: "",
    specialization: "",
    institution: "",
    yearOfCompletion: "",
    passPercentage: "",
    educationProof: null,
    hasCertifications: "",
    certifications: "",
    issuingAuthority: "",
    certificationDate: "",
    certificationProof: null,
    expectedJoinDate: "",
    isFresher: "",
    totalExperience: "",
    organizationName: "",
    designation: "",
    employmentStartDate: "",
    employmentEndDate: "",
    rolesResponsibilities: "",
    reasonForLeaving: "",
    currentCTC: "",
    expectedCTC: "",
    noticePeriod: "",
    salarySlips: null,
    bankStatements: null,
    offerLetter: null,
    incrementLetter: null,
    relievingLetter: null,
    servingNoticePeriod: "",
    lastWorkingDate: "",
    hasExistingOffers: "",
    offerProof: null,
    acceptedOffer: "",
    acceptanceDate: "",
    proposedCTC: "",
    referenceName: "",
    referenceContact: "",
    relationship: "",
    referenceEmail: "",
    employmentVerificationConsent: "",
    contactPreviousEmployersConsent: "",
    backgroundCheckConsent: "",
    drugTestingConsent: "",
    criminalConvictions: "",
    criminalDetails: "",
    acknowledge: "",
  });
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    showTab(currentTab);
  }, [currentTab]);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormValues({ ...formValues, [name]: files[0] });
    } else {
      setFormValues({ ...formValues, [name]: value });
    }
  };

  const showTab = (n) => {
    const tabs = document.getElementsByClassName("tab");
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].style.display = i === n ? "block" : "none";
    }
    fixStepIndicator(n);
  };

  const nextPrev = (n) => {
    const tabs = document.getElementsByClassName("tab");
    if (n === 1 && !validateForm()) return false;
    if (currentTab + n >= tabs.length) {
      submitForm();
      return false;
    }
    setCurrentTab(currentTab + n);
  };

  const validateForm = () => {
    const tabs = document.getElementsByClassName("tab");
    const inputs = tabs[currentTab].getElementsByTagName("input");
    //const selects = tabs[currentTab].getElementsByTagName("select");
    let valid = true;

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value === "" && inputs[i].type !== "file") {
        inputs[i].className += " invalid";
        valid = false;
      } else {
        inputs[i].className = inputs[i].className.replace(" invalid", "");
      }
    }

    // for (let i = 0; i < selects.length; i++) {
    //   if (selects[i].value === "") {
    //     selects[i].className += " invalid";
    //     valid = false;
    //   } else {
    //     selects[i].className = selects[i].className.replace(" invalid", "");
    //   }
    // }

    if (valid) {
      document.getElementsByClassName("step")[currentTab].className +=
        " finish";
    }
    setIsValid(valid);
    return valid;
  };

  const fixStepIndicator = (n) => {
    const steps = document.getElementsByClassName("step");
    for (let i = 0; i < steps.length; i++) {
      steps[i].className = steps[i].className.replace(" active", "");
    }
    steps[n].className += " active";
  };

  const submitForm = () => {
    const formData = new FormData();
    const popup = document.getElementById("thankpopup");

    for (const key in formValues) {
      if (formValues[key] !== null) {
        formData.append(key, formValues[key]);
      }
    }

    axios
      .post("http://localhost:5000/api/form", formData)
      .then((response) => {
        console.log("Success:", response.data);
        popup.classList.add("showpopup");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("There was an error submitting the form.");
      });
  };

  const close = () => {
    const popup = document.getElementById("thankpopup");
    popup.classList.remove("showpopup");
  };

  function floater(event, floatlabel) {
    const inputField = event.currentTarget;
    const floatLabels = inputField.previousElementSibling;

    if (inputField.value.trim() === "") {
      floatLabels.classList.toggle("transform-label");
    }

    if (!floatLabels.classList.contains("transform-label")) {
      inputField.readOnly = true;
    } else {
      inputField.readOnly = false;
    }
  }

  function removeLabel(event, floatlabel) {
    const inputField = event.currentTarget;
    const floatLabels = inputField.previousElementSibling;

    if (inputField.value.trim() === "") {
      floatLabels.classList.remove("transform-label");
    }
  }
  return (
    <>
      <Container>
        <Row>
          <Col md={2} />
          <Col md={8} className="h-100 ">
            <div className="step-container my-5">
              <span className="step">
                <p className="m-0">1</p>
              </span>
              <span className="step">
                <p className="m-0">2</p>
              </span>
              <span className="step">
                <p className="m-0">3</p>
              </span>
              <span className="step">
                <p className="m-0">4</p>
              </span>
              <span className="step">
                <p className="m-0">5</p>
              </span>
              <span className="step">
                <p className="m-0">6</p>
              </span>
              <span className="step">
                <p className="m-0">7</p>
              </span>
              <span className="step">
                <p className="m-0">8</p>
              </span>
              <span className="step">
                <p className="m-0">9</p>
              </span>
              <span className="step">
                <p className="m-0">10</p>
              </span>
              <span className="step">
                <p className="m-0">11</p>
              </span>
            </div>

            <div className="multi-step shadow bg-white py-3 px-5 mb-5">
              <div className="logo d-flex justify-content-center pb-3">
                <img src={logo} alt="logo" />
              </div>

              <h2 className="text-center font-w600 pb-2">
                Tell us a little about yourself
              </h2>
              <p className="t-gray t-md pb-4 text-center">
                Please fill out the following details accurately to apply for
                the position. Ensure you upload the necessary documents where
                applicable; otherwise, fill in "NA" for fields that do not apply
                to you.
              </p>

              <form id="regForm">
                {/* step 1 form*/}
                <div className="tab">
                  <h5 className="pageheader text-center">
                    Candidate Application Form - VYZEN
                  </h5>
                  <Row>
                    <Col md={6} className="mb-5">
                      <label>Enter Your First Name</label>
                      <input
                        type="text"
                        placeholder=" "
                        name="firstName"
                        value={formValues.fname}
                        onChange={handleInputChange}
                      />
                    </Col>

                    <Col md={6} className="mb-5">
                      <label>Enter Your Middle Name</label>
                      <input
                        type="text"
                        placeholder=""
                        name="middleName"
                        value={formValues.mname}
                        onChange={handleInputChange}
                      />
                    </Col>

                    <Col md={6} className="mb-5">
                      <label>Enter Your Last Name</label>
                      <input
                        type="text"
                        placeholder=" "
                        name="lastName"
                        value={formValues.lname}
                        onChange={handleInputChange}
                      />
                    </Col>

                    <Col md={6} className="mb-5">
                      <label>Enter Your Contact Number</label>
                      <input
                        type="number"
                        placeholder=" "
                        name="contactNumber"
                        value={formValues.contactNumber}
                        onChange={handleInputChange}
                      />
                    </Col>

                    <Col md={6} className="mb-5">
                      <label>Enter Your Alternate Contact Number</label>
                      <input
                        type="number"
                        placeholder=" "
                        name="alternateContactNumber"
                        value={formValues.alternateContactNumber}
                        onChange={handleInputChange}
                      />
                    </Col>

                    <Col md={6} className="mb-5">
                      <label>Enter Your Email</label>
                      <input
                        type="email"
                        placeholder=" "
                        name="emailAddress"
                        value={formValues.email}
                        onChange={handleInputChange}
                      />
                    </Col>

                    <Col md={6} className="mb-5">
                      <label>Enter Your Date of Birth</label>
                      <input
                        type="date"
                        placeholder=" "
                        name="dateOfBirth"
                        value={formValues.dateOfBirth}
                        onChange={handleInputChange}
                      />
                    </Col>

                    <Col md={6} className="mb-5">
                      <label>Enter Your Age</label>
                      <input
                        type="text"
                        placeholder=" "
                        name="age"
                        value={formValues.age}
                        onChange={handleInputChange}
                      />
                    </Col>

                    <Col md={6} className="mb-5">
                      <select
                        name="gender"
                        value={formValues.Gender}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Prefer not to say">
                          Prefer not to say
                        </option>
                      </select>
                    </Col>

                    <Col md={6} className="mb-5">
                      <select
                        name="maritalStatus"
                        value={formValues.MartialStatus}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Martial Status </option>
                        <option value="Married">Married</option>
                        <option value="Unmarried">Unmarried</option>
                        <option value="prefer not say">prefer not say</option>
                      </select>
                    </Col>

                    <Col md={6} className="mb-5">
                      <label>Enter Your Nationality</label>
                      <input
                        type="text"
                        placeholder=" "
                        name="nationality"
                        value={formValues.nationality}
                        onChange={handleInputChange}
                      />
                    </Col>

                    <Col md={6} className="mb-5">
                      <label>Enter Your Blood Group</label>
                      <input
                        type="text"
                        placeholder=" "
                        name="bloodGroup"
                        value={formValues.bloodGroup}
                        onChange={handleInputChange}
                      />
                    </Col>
                  </Row>
                </div>

                {/* step 2 */}
                <div className="tab">
                  <h5 className="pageheader text-center">
                    ADDRESS INFORMATION
                  </h5>

                  <Row>
                    <Col md={6} className="mb-5">
                      <label>Enter Your Address</label>
                      <input
                        type="text"
                        placeholder=" "
                        name="residentialAddress"
                        value={formValues.address}
                        onChange={handleInputChange}
                      />
                    </Col>

                    <Col md={6} className="mb-5">
                      <label>Enter Your City</label>
                      <input
                        type="text"
                        placeholder=" "
                        name="city"
                        value={formValues.City}
                        onChange={handleInputChange}
                      />
                    </Col>

                    <Col md={6} className="mb-5">
                      <label>Enter Your State</label>
                      <input
                        type="text"
                        placeholder=" "
                        name="state"
                        value={formValues.State}
                        onChange={handleInputChange}
                      />
                    </Col>

                    <Col md={6} className="mb-5">
                      <label>Enter Your Postal Code </label>
                      <input
                        type="text"
                        placeholder=" "
                        name="postalCode"
                        value={formValues.PostalCode}
                        onChange={handleInputChange}
                      />
                    </Col>

                    <Col md={6} className="mb-5">
                      <label>Enter Your Current Location </label>
                      <input
                        type="text"
                        placeholder=" "
                        name="currentLocation"
                        value={formValues.currentLocation}
                        onChange={handleInputChange}
                      />
                    </Col>

                    <Col md={6} className="mb-5">
                      <label>Enter Your Preferred Location </label>

                      <input
                        type="text"
                        placeholder=" "
                        name="preferredLocation"
                        value={formValues.preferredLocation}
                        onChange={handleInputChange}
                      />
                    </Col>
                  </Row>
                </div>

                {/* step 3 */}
                <div className="tab">
                  <h5 className="pageheader text-center">
                    IDENTIFICATION DOCUMENTS
                  </h5>
                  <Row>
                    <Col md={6} className="mb-5">
                      <label>Enter Your Passport Number</label>
                      <input
                        type="text"
                        placeholder=" "
                        name="passportNumber"
                        value={formValues.passportNumber}
                        onChange={handleInputChange}
                      />
                    </Col>

                    <Col md={6} className="mb-5">
                      <label for="passportCopy" className="file-label">
                        Upload passportCopy
                      </label>
                      <input
                        className="d-none"
                        type="file"
                        name="passportCopy"
                        id="passportCopy"
                        onChange={handleInputChange}
                      />
                    </Col>

                    <Col md={6} className="mb-5">
                      <label>Enter Your Aadhaar Number</label>
                      <input
                        type="text"
                        placeholder=" "
                        name="aadhaarCardNumber"
                        value={formValues.aadhaarCardNumber}
                        onChange={handleInputChange}
                      />
                    </Col>

                    <Col md={6} className="mb-5">
                      <label for="aadhaarCardCopy" className="file-label">
                        Upload aadhaarCardCopy
                      </label>
                      <input
                        className="d-none"
                        type="file"
                        name="aadhaarCardCopy"
                        id="aadhaarCardCopy"
                        onChange={handleInputChange}
                      />
                    </Col>

                    <Col md={6} className="mb-5">
                      <label>Enter Your Pancard Number</label>
                      <input
                        type="text"
                        placeholder=" "
                        name="panCardNumber"
                        value={formValues.panCardNumber}
                        onChange={handleInputChange}
                      />
                    </Col>

                    <Col md={6} className="mb-5">
                      <label for="panCardCopy" className="file-label">
                        Upload panCardCopy
                      </label>
                      <input
                        className="d-none"
                        type="file"
                        name="panCardCopy"
                        id="panCardCopy"
                        onChange={handleInputChange}
                      />
                    </Col>

                    <Col md={6} className="mb-5">
                      <label>Enter Your Driving License Number</label>
                      <input
                        type="text"
                        placeholder="drivingLicenseNumber"
                        name="drivingLicenseNumber"
                        value={formValues.drivingLicenseNumber}
                        onChange={handleInputChange}
                      />
                    </Col>

                    <Col md={6} className="mb-5">
                      <label for="drivingLicenseCopy" className="file-label">
                        Upload drivingLicenseCopy
                      </label>
                      <input
                        className="d-none"
                        type="file"
                        name="drivingLicenseCopy"
                        id="drivingLicenseCopyPath"
                        onChange={handleInputChange}
                      />
                    </Col>

                    <Col md={6} className="mb-5">
                      <label>Enter Your VoterId Number</label>
                      <input
                        type="text"
                        placeholder="voterIdNumber"
                        name="voterIdNumber"
                        value={formValues.voterIdNumber}
                        onChange={handleInputChange}
                      />
                    </Col>

                    <Col md={6} className="mb-5">
                      <label for="voterIdCopy" className="file-label">
                        Upload voterIdCopy
                      </label>
                      <input
                        className="d-none"
                        type="file"
                        name="voterIdCopy"
                        id="voterIdCopy"
                        onChange={handleInputChange}
                      />
                    </Col>
                  </Row>
                </div>

                {/* page 4 */}
                <div className="tab">
                  <h5 className="pageheader text-center">
                    PROFESSIONAL LINKS AND DOCUMENTS
                  </h5>
                  <Row>
                    <Col md={6} className="mb-5">
                      <label for="photograph" className="file-label">
                        Upload photograph
                      </label>
                      <input
                        className="d-none"
                        type="file"
                        name="photograph"
                        id="photograph"
                        onChange={handleInputChange}
                      />
                    </Col>

                    <Col md={6} className="mb-5">
                      <label>Enter Your linkedIn Profile</label>
                      <input
                        type="text"
                        placeholder=" "
                        name="linkedInProfile"
                        value={formValues.linkedInProfile}
                        onChange={handleInputChange}
                      />
                    </Col>

                    <Col md={6} className="mb-5">
                      <label for="resume" className="file-label">
                        Upload resume
                      </label>
                      <input
                        className="d-none"
                        type="file"
                        name="resume"
                        id="resume"
                        onChange={handleInputChange}
                      />
                    </Col>

                    <Col md={6} className="mb-5">
                      <label>Enter Your SocialMedia Links</label>
                      <input
                        type="text"
                        placeholder=""
                        name="socialMediaLinks"
                        value={formValues.socialMediaLinks}
                        onChange={handleInputChange}
                      />
                    </Col>

                    <Col md={6} className="mb-5">
                      <label>Enter Your onlinePortfolio</label>
                      <input
                        type="text"
                        placeholder=" "
                        name="onlinePortfolio"
                        value={formValues.onlinePortfolio}
                        onChange={handleInputChange}
                      />
                    </Col>

                    <Col md={6} className="mb-5">
                      <label>Enter Your Skills</label>
                      <input
                        type="text"
                        placeholder=" "
                        name="skills"
                        value={formValues.skills}
                        onChange={handleInputChange}
                      />
                    </Col>

                    <Col md={6} className="mb-5">
                      <label>Enter Your Languages</label>
                      <input
                        type="text"
                        placeholder=" "
                        name="languages"
                        value={formValues.languages}
                        onChange={handleInputChange}
                      />
                    </Col>
                  </Row>
                </div>

                {/* step 5 */}
                <div className="tab">
                  <h5 className="pageheader text-center">
                    EDUCATIONAL DETAILS
                  </h5>
                  <Row>
                    <Col md={6} className="mb-5">
                      <label>Enter Your Course</label>
                      <input
                        type="text"
                        placeholder=" "
                        name="course"
                        value={formValues.course}
                        onChange={handleInputChange}
                      />
                    </Col>

                    <Col md={6} className="mb-5">
                      <label>Enter Your specialization</label>
                      <input
                        type="text"
                        placeholder=" "
                        name="specialization"
                        value={formValues.specialization}
                        onChange={handleInputChange}
                      />
                    </Col>

                    <Col md={6} className="mb-5">
                      <label>Enter Your institution </label>
                      <input
                        type="text"
                        placeholder=" "
                        name="institution"
                        value={formValues.institution}
                        onChange={handleInputChange}
                      />
                    </Col>

                    <Col md={6} className="mb-5">
                      <label>Enter Your Year of Completion </label>
                      <input
                        type="Date"
                        placeholder=" "
                        name="yearOfCompletion"
                        value={formValues.yearOfCompletion}
                        onChange={handleInputChange}
                      />
                    </Col>

                    <Col md={6} className="mb-5">
                      <label>Enter Your Year of Percentage</label>
                      <input
                        type="text"
                        placeholder=" "
                        name="passPercentage"
                        value={formValues.passPercentage}
                        onChange={handleInputChange}
                      />
                    </Col>

                    <Col md={6} className="mb-5">
                      <label for="educationProof" className="file-label">
                        Upload educationProof
                      </label>
                      <input
                        className="d-none"
                        type="file"
                        name="educationProof"
                        id="educationProof"
                        onChange={handleInputChange}
                      />
                    </Col>

                    <Col md={6} className="mb-5">
                      <label>Any Certifications</label>
                      <select
                        name="hasCertifications"
                        value={formValues.hasCertifications}
                        onChange={handleInputChange}
                      >
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </Col>

                    <Col md={6} className="mb-5">
                      <label>Enter Your certification</label>
                      <input
                        type="text"
                        placeholder=" "
                        name="certifications"
                        value={formValues.certifications}
                        onChange={handleInputChange}
                      />
                    </Col>

                    <Col md={6} className="mb-5">
                      <label>Enter Your Year issuingAuthority</label>
                      <input
                        type="text"
                        placeholder=" "
                        name="issuingAuthority"
                        value={formValues.issuingAuthority}
                        onChange={handleInputChange}
                      />
                    </Col>

                    <Col md={6} className="mb-5">
                      <label>
                        Select the date when the certification was issued{" "}
                      </label>
                      <input
                        type="Date"
                        placeholder=" "
                        name="certificationDate"
                        value={formValues.certificationDate}
                        onChange={handleInputChange}
                      />
                    </Col>

                    <Col md={6} className="mb-5">
                      <label for="certificationProof" className="file-label">
                        Upload certificationProof
                      </label>
                      <input
                        className="d-none"
                        type="file"
                        name="certificationProof"
                        id="certificationProof"
                        onChange={handleInputChange}
                      />
                    </Col>

                    <Col md={6} className="mb-5">
                      <label>
                        Date you are expected to join us incase you are
                        shorlisted/selected{" "}
                      </label>
                      <input
                        type="date"
                        placeholder="expectedJoinDate"
                        name="expectedJoinDate"
                        value={formValues.expectedJoinDate}
                        onChange={handleInputChange}
                      />
                    </Col>

                    <Col md={6} className="mb-5">
                      <label>Are You Fresher</label>
                      <select
                        name="isFresher"
                        value={formValues.isFresher}
                        onChange={handleInputChange}
                      >
                        <option value="">Select is Fresher</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </Col>
                  </Row>
                </div>

                {/* step 6 form*/}
                <div className="tab">
                  <h5 className="pageheader text-center">EMPLOYMENT DETAILS</h5>
                  <Row>
                    <Col md={6} className="mb-5">
                      <label>Enter Your Total Experience</label>
                      <input
                        type="text"
                        placeholder=" "
                        name="totalExperience"
                        value={formValues.totalExperience}
                        onChange={handleInputChange}
                      />
                    </Col>
                    <Col md={6} className="mb-5">
                      <label>Enter Your Total Organization Name </label>
                      <input
                        type="text"
                        placeholder=" "
                        name="organizationName"
                        value={formValues.organizationName}
                        onChange={handleInputChange}
                      />
                    </Col>
                    <Col md={6} className="mb-5">
                      <label>Enter Your Desigantion </label>
                      <input
                        type="text"
                        placeholder=" "
                        name="designation"
                        value={formValues.designation}
                        onChange={handleInputChange}
                      />
                    </Col>
                    <Col md={6} className="mb-5">
                      <label>Enter Your Employment StartDate </label>
                      <input
                        type="date"
                        placeholder=" "
                        name="employmentStartDate"
                        value={formValues.employmentStartDate}
                        onChange={handleInputChange}
                      />
                    </Col>
                    <Col md={6} className="mb-5">
                      <label>Enter Your Employment EndDate </label>
                      <input
                        type="date"
                        placeholder=" "
                        name="employmentEndDate"
                        value={formValues.employmentEndDate}
                        onChange={handleInputChange}
                      />
                    </Col>
                    <Col md={6} className="mb-5">
                      <label>Enter Your Roles Responsibilities </label>
                      <input
                        type="text"
                        placeholder=""
                        name="rolesResponsibilities"
                        value={formValues.rolesResponsibilities}
                        onChange={handleInputChange}
                      />
                    </Col>
                    <Col md={6} className="mb-5">
                      <label>Enter Your Reason For Leaving </label>
                      <input
                        type="text"
                        placeholder=" "
                        name="reasonForLeaving"
                        value={formValues.reasonForLeaving}
                        onChange={handleInputChange}
                      />
                    </Col>
                    <Col md={6} className="mb-5">
                      <label>Enter Your Current CTC</label>
                      <input
                        type="text"
                        placeholder=" "
                        name="currentCTC"
                        value={formValues.currentCTC}
                        onChange={handleInputChange}
                      />
                    </Col>
                    x
                    <Col md={6} className="mb-5">
                      <label>Enter Your Expected CTC</label>
                      <input
                        type="text"
                        placeholder=" "
                        name="expectedCTC"
                        value={formValues.expectedCTC}
                        onChange={handleInputChange}
                      />
                    </Col>
                    <Col md={6} className="mb-5">
                      <label>Enter Your Notice Period</label>
                      <input
                        type="text"
                        placeholder=" "
                        name="noticePeriod"
                        value={formValues.noticePeriod}
                        onChange={handleInputChange}
                      />
                    </Col>
                  </Row>
                </div>

                {/* step 7 form*/}
                <div className="tab">
                  <h5 className="pageheader text-center">
                    DOCUMENTS RELATED TO EXPERIENCE
                  </h5>
                  <Row>
                    <Col md={6} className="mb-5">
                      <label for="salarySlips" className="file-label">
                        Upload salarySlips
                      </label>
                      <input
                        className="d-none"
                        type="file"
                        name="salarySlips"
                        id="salarySlips"
                        onChange={handleInputChange}
                      />
                    </Col>
                    <Col md={6} className="mb-5">
                      <label for="bankStatements" className="file-label">
                        Upload bankStatements
                      </label>
                      <input
                        className="d-none"
                        type="file"
                        name="bankStatements"
                        id="bankStatements"
                        onChange={handleInputChange}
                      />
                    </Col>
                    <Col md={6} className="mb-5">
                      <label for="offerLetter" className="file-label">
                        Upload offerLetter
                      </label>
                      <input
                        className="d-none"
                        type="file"
                        name="offerLetter"
                        id="offerLetter"
                        onChange={handleInputChange}
                      />
                    </Col>
                    <Col md={6} className="mb-5">
                      <label for="incrementLetter" className="file-label">
                        Upload incrementLetter
                      </label>
                      <input
                        className="d-none"
                        type="file"
                        name="incrementLetter"
                        id="incrementLetter"
                        onChange={handleInputChange}
                      />
                    </Col>
                    <Col md={6} className="mb-5">
                      <label for="relievingLetter" className="file-label">
                        Upload relievingLetter
                      </label>
                      <input
                        className="d-none"
                        type="file"
                        name="relievingLetter"
                        id="relievingLetter"
                        onChange={handleInputChange}
                      />
                    </Col>
                  </Row>
                </div>

                {/* step 8 */}
                <div className="tab">
                  <h5 className="pageheader text-center">CURRENT OFFERS</h5>
                  <Row>
                    <Col md={6} className="mb-5">
                      <label>Select serving Notice Period</label>
                      <select
                        name="servingNoticePeriod"
                        value={formValues.servingNoticePeriod}
                        onChange={handleInputChange}
                      >
                        <option value="">Select serving Notice Period</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </Col>

                    <Col md={6} className="mb-5">
                      <label>Enter Your Last Working</label>
                      <input
                        type="date"
                        placeholder=" "
                        name="lastWorkingDate"
                        value={formValues.lastWorkingDate}
                        onChange={handleInputChange}
                      />
                    </Col>

                    <Col md={6} className="mb-5">
                      <label>hasExistingOffers</label>
                      <select
                        name="hasExistingOffers"
                        value={formValues.hasExistingOffers}
                        onChange={handleInputChange}
                      >
                        <option value="">Select has Existing Offers</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        <option value="May Be">May Be</option>
                      </select>
                    </Col>

                    <Col md={6} className="mb-5">
                      <label>Enter Your Organization Name</label>
                      <input
                        type="text"
                        placeholder=""
                        name="organizationName"
                        value={formValues.organizationName}
                        onChange={handleInputChange}
                      />
                    </Col>

                    <Col md={6} className="mb-5">
                      <label for="offerProof" className="file-label">
                        Upload offerProof
                      </label>
                      <input
                        className="d-none"
                        type="file"
                        name="offerProof"
                        id="offerProof"
                        onChange={handleInputChange}
                      />
                    </Col>

                    <Col md={6} className="mb-5">
                      <label>Accepted Offer</label>
                      <select
                        name="acceptedOffer"
                        value={formValues.acceptedOffer}
                        onChange={handleInputChange}
                      >
                        <option value="">Select accepted Offer</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        <option value="May Be">May Be</option>
                      </select>
                    </Col>

                    <Col md={6} className="mb-5">
                      <label>select Your acceptance Date </label>
                      <input
                        type="date"
                        placeholder="acceptanceDate"
                        name="acceptanceDate"
                        value={formValues.acceptanceDate}
                        onChange={handleInputChange}
                      />
                    </Col>

                    <Col md={6} className="mb-5">
                      <label>Enter Your proposedCTC </label>
                      <input
                        type="text"
                        placeholder=""
                        name="proposedCTC"
                        value={formValues.proposedCTC}
                        onChange={handleInputChange}
                      />
                    </Col>
                  </Row>
                </div>

                {/* step 9 */}
                <div className="tab">
                  <h5 className="pageheader text-center">
                    EMPLOYMENT VERIFICATION REFERENCE CHECK
                  </h5>
                  <Row>
                    <Col md={6} className="mb-5">
                      <label>Enter Your Reference Name</label>
                      <input
                        type="text"
                        placeholder=" "
                        name="referenceName"
                        value={formValues.referenceName}
                        onChange={handleInputChange}
                      />
                    </Col>

                    <Col md={6} className="mb-5">
                      <label>Enter Your Reference Contact Number</label>
                      <input
                        type="number"
                        placeholder=" "
                        name="referenceContact"
                        value={formValues.referenceContact}
                        onChange={handleInputChange}
                      />
                    </Col>

                    <Col md={6} className="mb-5">
                      <label>Enter Your Relitonship</label>
                      <input
                        type="text"
                        placeholder=" "
                        name="relationship"
                        value={formValues.relationship}
                        onChange={handleInputChange}
                      />
                    </Col>

                    <Col md={6} className="mb-5">
                      <label>Enter Your Reference Email</label>
                      <input
                        type="email"
                        placeholder=" "
                        name="referenceEmail"
                        value={formValues.referenceEmail}
                        onChange={handleInputChange}
                      />
                    </Col>
                  </Row>
                </div>

                {/* step 10 */}
                <div className="tab">
                  <h5 className="pageheader text-center">
                    VERIFICATION CONSENT{" "}
                  </h5>
                  <Row>
                    <Col md={6} className="mb-5">
                      <label>Your Background Check Consent </label>
                      <select
                        name="backgroundCheckConsent"
                        value={formValues.backgroundCheckConsent}
                        onChange={handleInputChange}
                      >
                        <option value="">
                          Select background Check Consent
                        </option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        <option value="May Be">May Be</option>
                      </select>
                    </Col>

                    <Col md={6} className="mb-5">
                      <label>Your Contact Previous Employers Consent </label>
                      <select
                        name="contactPreviousEmployersConsent"
                        value={formValues.contactPreviousEmployersConsent}
                        onChange={handleInputChange}
                      >
                        <option value="">
                          Select contact Previous Employers Consent
                        </option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        <option value="May Be">May Be</option>
                      </select>
                    </Col>
                  </Row>
                </div>

                {/* step 11 */}
                <div className="tab">
                  <h5 className="pageheader text-center">
                    ACKNOWLEDGEMENT CONSENT{" "}
                  </h5>

                  <Row>
                    <Col md={6} className="mb-5">
                      <label>Your EmploymentV erification Consent </label>
                      <select
                        name="employmentVerificationConsent"
                        value={formValues.employmentVerificationConsent}
                        onChange={handleInputChange}
                      >
                        <option value="">
                          Select employment Verification Consent
                        </option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        <option value="May Be">May Be</option>
                      </select>
                    </Col>

                    <Col md={6} className="mb-5">
                      <label>Drug Testing Consent </label>
                      <select
                        name="drugTestingConsent"
                        value={formValues.drugTestingConsent}
                        onChange={handleInputChange}
                      >
                        <option value="">Select drugTesting Consent</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        <option value="May Be">May Be</option>
                      </select>
                    </Col>

                    <Col md={6} className="mb-5">
                      <label>Criminal Convictions </label>
                      <select
                        name="criminalConvictions"
                        value={formValues.criminalConvictions}
                        onChange={handleInputChange}
                      >
                        <option value="">Select criminal Convictions</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </Col>

                    <Col md={6} className="mb-5">
                      <label>Enter Your Criminal Details</label>
                      <input
                        type="text"
                        placeholder="criminalDetails"
                        name="criminalDetails"
                        value={formValues.criminalDetails}
                        onChange={handleInputChange}
                      />
                    </Col>

                    <Col md={6} className="mb-5">
                      <label>Your Acknowledge</label>
                      <select
                        name="acknowledge"
                        value={formValues.acknowledge}
                        onChange={handleInputChange}
                      >
                        <option value="">Select acknowledge</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </Col>
                  </Row>
                </div>

                <div style={{ overflow: "auto" }} className="pt-5">
                  <div
                    style={{ float: "right" }}
                    className="navigator d-flex gap-3"
                  >
                    <button
                      type="button"
                      id="prevBtn"
                      onClick={() => nextPrev(-1)}
                      style={{ display: currentTab === 0 ? "none" : "inline" }}
                      className="px-5 py-1"
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      id="nextBtn"
                      onClick={() => nextPrev(1)}
                      className="px-5 py-1"
                    >
                      {currentTab ===
                      document.getElementsByClassName("tab").length - 1
                        ? "Submit"
                        : "Next"}{" "}
                      <GrNext />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </Col>
          <Col md={2} />
        </Row>
      </Container>

      <div
        className="popup d-flex justify-content-center align-items-center b-radius-10"
        id="thankpopup"
      >
        <div className="w-50 py-3 px-5 bg-white">
          <div className="d-flex justify-content-center pb-4">
            <AiOutlineSafetyCertificate className="icon" />
          </div>

          <h2 className="text-center">Thank You</h2>

          <p className="text-center t-md">
            All Rights Reserved | Designed & Developed by Halaswamy
          </p>
          <p className="text-center">
            <a href="mailto:halaswamyg07@gmail.com">halaswamyg07@gmail.com</a>{" "}
          </p>

          <div className="d-flex justify-content-center pt-4">
            <button
              type="button"
              className="popupbtn px-4 py-1"
              onClick={close}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
