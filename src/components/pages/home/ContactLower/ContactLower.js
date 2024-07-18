import { useState } from "react";
import { useTranslation } from "next-i18next";
import emailjs from "emailjs-com";
import { Formik, Form, Field, ErrorMessage } from "formik";
import PrivacyModalManager from "@/components/pages/home/ContactLower/components/PrivacyModalManager";
import {
  formFields,
  additionalForms,
  initialValues,
} from "@/components/pages/home/ContactLower/components/formFieldsConfig";
import { getValidationSchema } from "@/components/pages/home/ContactLower/components/validationSchemas";

export default function ContactLower() {
  const { t } = useTranslation();
  const [step, setStep] = useState(1);
  const [submissionError, setSubmissionError] = useState("");
  const legalLinks = t("legalLinks", { returnObjects: true });

  const handleSubmit = (values, { setSubmitting }) => {
    const formData = {
      ...values,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStep(2);
          setSubmitting(false);
        },
        (error) => {
          console.log("FAILED...", error);
          setSubmissionError(t("submissionError"));
          setSubmitting(false);
        },
      )
      .catch((error) => {
        console.log("ERROR...", error);
        setSubmissionError(t("submissionError"));
        setSubmitting(false);
      });
  };

  const renderFormFields = (fields, formType) => {
    return fields?.map((field, index) => (
      <div key={index} className="flex flex-col gap-[12px]">
        <label className="text-[1rem]" htmlFor={field.name}>
          {t(field.label)}{" "}
          {field.required && (
            <span aria-hidden={true} className="text-color02">
              *
            </span>
          )}
        </label>
        {field.type === "text" ||
        field.type === "email" ||
        field.type === "number" ||
        field.type === "tel" ||
        field.type === "date" ? (
          <Field
            type={field.type}
            name={field.name}
            id={field.name}
            placeholder={t(field.placeholder)}
            className="w-full px-[16px] py-[12px] placeholder-black-50 rounded-[6px] focus-visible:outline-color01 border-color03 border-solid border-[1px] bg-[#F2F2F2]"
            aria-live="assertive"
            aria-required={field.required}
          />
        ) : field.type === "textarea" ? (
          <Field
            as="textarea"
            name={field.name}
            id={field.name}
            placeholder={t(field.placeholder)}
            className="w-full px-[16px] py-[12px] placeholder-black-50 rounded-[6px] focus-visible:outline-color01 border-color03 border-solid border-[1px] h-[150px] resize-none bg-[#F2F2F2]"
            aria-live="assertive"
            aria-required={field.required}
          />
        ) : null}
        <ErrorMessage
          name={field.name}
          className="text-[#FF4C4C]"
          render={(msg) => (
            <p role="alert" className="text-[#FF4C4C]">
              {msg}: &quot;{t(field.label)}&quot;
            </p>
          )}
        />
      </div>
    ));
  };

  return (
    <div className="px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] w-full">
      <Formik
        initialValues={initialValues}
        validationSchema={getValidationSchema(t)}
        onSubmit={(values, actions) => {
          if (step === 1) {
            setStep(2);
            handleSubmit(values, actions);
            actions.setSubmitting(false);
          }
        }}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ isSubmitting }) => (
          <Form className="w-full p-[24px] border-solid border-color03 border-[1px] flex flex-col gap-[32px] shadow-custom rounded-[16px]">
            {step === 1 && (
              <div className="flex flex-col gap-[12px]">
                {renderFormFields(formFields)}
                <button
                  type="submit"
                  className="btn px-[32px] py-[12px] rounded-[4px] uppercase font-bold text-[14px] text-white w-full md:w-fit"
                  disabled={isSubmitting}
                >
                  {t("submit")}{" "}
                </button>

                <PrivacyModalManager legalLinks={legalLinks} />

                {submissionError && (
                  <p className="text-[#FF4C4C]">{submissionError}</p>
                )}
              </div>
            )}
            {step === 2 && (
              <div className="py-[80px] flex flex-col gap-[16px] items-center">
                <h2 className="text-[1.5rem]">
                  {t("formSubmittedSuccessfully")}
                </h2>
                <p className="text-color02 text-[1rem]">
                  {t("thankYouForYourSubmission")}
                </p>
                <button
                  type="button"
                  className="btn px-[32px] py-[12px] rounded-[4px] uppercase font-bold text-[1rem] text-white w-full md:w-fit"
                  onClick={() => setStep(1)}
                >
                  {t("backToStart")}
                </button>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}
