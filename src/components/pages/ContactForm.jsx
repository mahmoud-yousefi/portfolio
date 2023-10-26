import {Button, CardActions, CardContent, InputAdornment, TextField, Typography} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import Grid from "@mui/material/Grid";
import {EmailRounded, Face6Rounded, SubjectRounded} from "@mui/icons-material";
import ReCAPTCHA from "react-google-recaptcha";
import {useFormik} from "formik";
import {contactValidationSchema} from "../../validations/contactValidation";
import {useTheme} from "@mui/material/styles";

const ContactForm = () => {
    const contactInputNames = {
        fullname: "",
        email: "",
        subject: "",
        message: "",
        recaptcha: ""
    };

    const formik = useFormik({
        initialValues: contactInputNames,
        onSubmit: values => {
            console.log("Form Values: ", values)
        },
        validationSchema: contactValidationSchema
    })

    const theme = useTheme();

  return (
      <>
          <form autoComplete={"off"} onSubmit={formik.handleSubmit}>
              <CardContent>
                  <Grid2 container>
                      <Grid xs={12} sx={{direction: "ltr"}}>
                          <Grid2 container spacing={2}>
                              <Grid2 xs={12} md={6}>
                                  <TextField
                                      fullWidth
                                      size={"small"}
                                      color={"warning"}
                                      focused
                                      label={"نام و نام خانوادگی"}
                                      name={"fullname"}
                                      variant={"outlined"}
                                      helperText={
                                          formik.touched.fullname? formik.errors.fullname: null
                                      }
                                      error={
                                          Boolean(formik.touched.fullname && formik.errors.fullname)
                                      }
                                      value={formik.values?.fullname}
                                      onChange={formik.handleChange}
                                      InputProps={{
                                          endAdornment: (
                                              <InputAdornment position={"end"}>
                                                  <Face6Rounded/>
                                              </InputAdornment>
                                          )
                                      }}
                                  />
                              </Grid2>
                              <Grid2 xs={12} md={6}>
                                  <TextField
                                      fullWidth
                                      size={"small"}
                                      color={"warning"}
                                      label={"آدرس ایمیل"}
                                      name={"email"}
                                      variant={"outlined"}
                                      helperText={
                                          formik.touched.email? formik.errors.email: null
                                      }
                                      error={
                                          Boolean(formik.touched.email && formik.errors.email)
                                      }
                                      value={formik.values?.email}
                                      onChange={formik.handleChange}
                                      InputProps={{
                                          endAdornment: (
                                              <InputAdornment position={"end"}>
                                                  <EmailRounded/>
                                              </InputAdornment>
                                          )
                                      }}
                                  />
                              </Grid2>
                              <Grid2 xs={12} md={12}>
                                  <TextField
                                      fullWidth
                                      size={"small"}
                                      color={"warning"}
                                      label={"عنوان"}
                                      name={"subject"}
                                      variant={"outlined"}
                                      helperText={
                                          formik.touched.subject? formik.errors.subject: null
                                      }
                                      error={
                                          Boolean(formik.touched.subject && formik.errors.subject)
                                      }
                                      value={formik.values?.subject}
                                      onChange={formik.handleChange}
                                      InputProps={{
                                          endAdornment: (
                                              <InputAdornment position={"end"}>
                                                  <SubjectRounded/>
                                              </InputAdornment>
                                          )
                                      }}
                                  />
                              </Grid2>
                              <Grid2 xs={12} md={12}>
                                  <TextField
                                      fullWidth
                                      multiline
                                      rows={6}
                                      size={"small"}
                                      color={"warning"}
                                      label={"متن پیام"}
                                      name={"message"}
                                      variant={"outlined"}
                                      helperText={
                                          formik.touched.message? formik.errors.message: null
                                      }
                                      error={
                                          Boolean(formik.touched.message && formik.errors.message)
                                      }
                                      value={formik.values?.message}
                                      onChange={formik.handleChange}
                                  />
                              </Grid2>
                          </Grid2>
                      </Grid>
                  </Grid2>
              </CardContent>
              <CardActions
                  sx={{
                      alignItems: "end",
                      flexDirection: "column"
                  }}
              >
                  <ReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                             theme={theme.palette.mode}
                             hl={"fa"}
                             onChange={value => {
                                 formik.setFieldValue("recaptcha", value)
                             }}
                  />
                  {
                      formik.errors.recaptcha && formik.touched.recaptcha &&
                      (
                          <Typography variant={"caption"} color={"error"}>
                              {formik.errors.recaptcha}
                          </Typography>
                      )
                  }
                  <Button
                      type={"submit"}
                      color={"success"}
                      variant={"contained"}
                      fullWidth
                      sx={{mt: 2}}
                  >
                      ارسال کن
                  </Button>
              </CardActions>
          </form>
      </>
  )
}
export default ContactForm;