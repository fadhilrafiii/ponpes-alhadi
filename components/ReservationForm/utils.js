import { useFormik } from 'formik';
import * as yup from 'yup';

export const useForm = () => {
  const validationSchema = yup.object({
    location: yup.string().required('Please select a location!'),
    // date: yup.string('Please enter a valid date!').required('Please select the date!'),
    isFlexible: yup.array(yup.string()),
    totalRoom: yup
      .number('Enter a valid number of room!')
      .required('Please fill the number of room!'),
    totalGuest: yup
      .number('Enter a valid number of guest!')
      .required('Please fill the number of guest!'),
    referralCode: yup.string(),
    useRewardPoints: yup.array(yup.string()),
  });

  const form = useFormik({
    initialValues: {
      location: '',
      startDate: null,
      endDate: null,
      isFlexible: [],
      totalRoom: 1,
      totalGuest: 2,
      referralCode: '',
      useRewardPoints: [],
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return form;
};
