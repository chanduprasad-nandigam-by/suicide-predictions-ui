import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control'
import {  Button, Checkbox, Container, Flex, Input,     NumberInput, NumberInputField,  Radio, RadioGroup, RadioGroupProps, Select, Stack } from '@chakra-ui/react'
import axios from 'axios'
import { Field, FieldAttributes,  Form, Formik,  useFormikContext } from 'formik'
import React from 'react'
import * as yup from 'yup'

const validationSchema = yup.object().shape({
    gender : yup.string().required()
    })

const genderOptions = ['Male', 'Female', 'Transgender male', 'Transgender female']

const raceOptionsOptions = ['White non-Hispanic', 'Hispanic (of any race)', 'Asian',
       'white and asian', 'caucasian', 'Black', 'Middle Eastern',
       'half Arab', 'Mixed race', 'Pakistani', 'helicopterkin', 'Turkish',
       'Indian', 'Native american', 'Mixed', 'Mixed white/asian',
       'indian', 'Multi', 'Native American mix', 'North African',
       'Half Asian half white', 'White and Native American',
       'First two answers. Gender is androgyne, not male; sexuality is asexual, not bi.',
       'European']

const bodyWeightOptions =['Normal weight', 'Underweight', 'Overweight', 'Obese']

const payForSexOptions = ['No', 'Yes and I have', "Yes but I haven't"]
const employmentOptions = ['Employed for wages', 'Out of work and looking for work',
       'Out of work but not currently looking for work', 'A student',
       'Unable to work', 'Retired', 'Military', 'Self-employed',
       'A homemaker']

const educationLevelOptions = ['Associate degree', 'Some college, no degree',
       'High school graduate, diploma or the equivalent (for example: GED)',
       'Bachelor’s degree', 'Trade/technical/vocational training',
       'Master’s degree', 'Some high school, no diploma',
       'Doctorate degree', 'Professional degree']

export const SuicideForm:React.FC = () => {
    return (
     
         <Formik
         validateOnBlur
      initialValues={{ gender: '', sexuallity : 'straight', age : '30', from : '', to : '', race : '', bodyweight: '', virgin:'Yes', prostitution_legal: false, pay_for_sex: '', social_fear: false, depressed: false, employment:'', job_title: '' }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
       const authAxios = axios.create({
    baseURL: 'http://localhost:5000',
 
  })
  const result = await authAxios.post('/predict', {...values, prostitution_legal : values.prostitution_legal ? 'Yes' : 'No', social_fear : values.social_fear ? 'Yes' : 'No', depressed : values.depressed ? 'Yes' : 'No'})
  console.log({ result });
      }}
    >
      {(props) => (
        <Container width={'auto'}>
        <Form>
          <  >
            <Field name='gender' >
            {({ field , form } : FieldAttributes<any>) => {
             
              return (
                
              <FormControl isInvalid={form.errors.name && form.touched.name} id='gender' isRequired >
                <FormLabel htmlFor='gender'>Gender</FormLabel>
                <Select placeholder="Select option" {...field}>
                 {genderOptions.map(option => <option value={option} key={option}>{option}</option>)}
                </Select>
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}}
          </Field>
          <RadioField name={'sexuallity'} label='sexuality' options={[{value: 'straight', label : 'Straight'}, {value: 'bisexual', label : 'Bisexual'}, {value : 'gay/lesbian', label : 'Gay/Lesbian'}]}/>
                  
          <Field name="age" >
            {({ field , form } : FieldAttributes<any>) =>{
              const {onChange, ...rest} = field
               return(
              <FormControl isInvalid={form.errors.name && form.touched.name} id={'age'} isRequired >
                <FormLabel htmlFor="age">Age</FormLabel>
                <NumberInput {...rest} width={'auto'}>
                  <NumberInputField onChange={onChange}/>
                </NumberInput>
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}}
          </Field>
           <FormLabel htmlFor="from">Income</FormLabel>
          <Flex direction={'row'}>
             {/* <FormLabel htmlFor="from">From</FormLabel> */}
             <Field name="from" >
            {({ field , form } : FieldAttributes<any>) =>{
              const {onChange, ...rest} = field
               return(
              <FormControl isInvalid={form.errors.name && form.touched.name} id={'from'} isRequired>
                <NumberInput {...rest} width={'auto'}  precision={2}>
                  <NumberInputField onChange={onChange} placeholder={'from'}/>
                </NumberInput>
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}}
          </Field>
           <Field name="to" >
            {({ field , form } : FieldAttributes<any>) =>{
              const {onChange, ...rest} = field
               return(
              <FormControl isInvalid={form.errors.name && form.touched.name} id={'to'} isRequired >
                <NumberInput {...rest} width={'auto'}  precision={2} marginLeft={'1'}>
                  <NumberInputField onChange={onChange} placeholder={'to'}/>
                </NumberInput>
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}}
          </Field>

          </Flex>
          <Field name="race" >
            {({ field , form } : FieldAttributes<any>) => {
             
              return (
              <FormControl isInvalid={form.errors.name && form.touched.name} id='race' isRequired>
                <FormLabel htmlFor="race">Race</FormLabel>
                <Select placeholder="Select option" {...field}>
                   {raceOptionsOptions.map(option => <option value={option} key={option}>{option}</option>)}
                </Select>
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}}
          </Field>
          <Field name="bodyweight" isRequired >
            {({ field , form } : FieldAttributes<any>) => {
             
              return (
              <FormControl isInvalid={form.errors.name && form.touched.name} id='bodyweight' isRequired>
                <FormLabel htmlFor="bodyweight">Body Weight</FormLabel>
                <Select placeholder="Select option" {...field}>
                   {bodyWeightOptions.map(option => <option value={option} key={option}>{option}</option>)}
                </Select>
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}}
          </Field>
        
          <RadioField name={'virgin'} label='Virgin' options={[{value: 'Yes', label : 'Yes'}, {value: 'No', label : 'No'}]}/>
          <Field name="prostitution_legal" >
            {({ field , form } : FieldAttributes<any>) => {
             
              return (
                   <FormControl  >
              <Checkbox {...field} >Prostitution Legal</Checkbox>
              </FormControl>
            )}}
          </Field>
         
          

              <Field name="pay_for_sex" >
            {({ field , form } : FieldAttributes<any>) => {
             
              return (
              <FormControl isInvalid={form.errors.name && form.touched.name} id="pay_for_sex" isRequired >
                <FormLabel htmlFor="pay_for_sex">Pay For Sex</FormLabel>
                <Select placeholder="Select option" {...field}>
                   {payForSexOptions.map(option => <option value={option} key={option}>{option}</option>)}
                </Select>
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}}
          </Field>

           <Field name="social_fear" >
            {({ field , form } : FieldAttributes<any>) => {
             
              return (
                 <FormControl  >
              <Checkbox {...field} >Social Fear</Checkbox>
              </FormControl>
            )}}
          </Field>
           <Field name="depressed" >
            {({ field , form } : FieldAttributes<any>) => {
             
              return (
                 <FormControl  >
              <Checkbox {...field} >Depressed</Checkbox>
              </FormControl>
            )}}
          </Field>
              <Field name="employment" >
            {({ field , form } : FieldAttributes<any>) => {
             
              return (
              <FormControl isInvalid={form.errors.name && form.touched.name} id='employment' isRequired >
                <FormLabel htmlFor="employment">Employment</FormLabel>
                <Select placeholder="Select option" {...field}>
                   {employmentOptions.map(option => <option value={option} key={option}>{option}</option>)}
                </Select>
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}}
          </Field>
          
          
              <Field name="edu_level" >
            {({ field , form } : FieldAttributes<any>) => {
             
              return (
              <FormControl isInvalid={form.errors.name && form.touched.name} id='edu_level' isRequired>
                <FormLabel htmlFor="edu_level">Eduction Level</FormLabel>
                <Select placeholder="Select option" {...field}>
                   {educationLevelOptions.map(option => <option value={option} key={option}>{option}</option>)}
                </Select>
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}}
          </Field>
         
          <Field name="job_title" >
            {({ field , form } : FieldAttributes<any>) => (
              <FormControl isInvalid={form.errors.name && form.touched.name} id={'job_title'} isRequired>
                <FormLabel htmlFor="job_title">Job Title</FormLabel>
                <Input {...field} id="job_title"  />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
        
          </>
          <Flex direction='row-reverse'>
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Submit
          </Button>
          </Flex>
        </Form>
        </Container>
      )}
    </Formik>
   
    )
}

const FormValues = () => {
  const {errors} = useFormikContext()
  return <p>{JSON.stringify(errors)}</p>
}

type RadioFieldProps = {
  name: string
  label: string
  options: ReadonlyArray<{
    value: string | number
    label: string
  }>
}

export const RadioField :React.FC<RadioFieldProps> = ({name, label, options})=>{

  return ( <Field name={name} >
            {({ field , form } : FieldAttributes<any>) => {
              const {onChange, ...rest} = field
              return(
              < >
                <FormLabel htmlFor={name}>{label}</FormLabel>
                <RadioGroup {...rest} id={name}>
                  <Stack spacing={5} direction="row">
                    {options.map((val) =>  <Radio onChange={onChange} key={val.value} value={val.value}>
                      {val.label}
                    </Radio>)}
                  
                  </Stack>
                </RadioGroup>
              </>
            )}}
          </Field>)

}
